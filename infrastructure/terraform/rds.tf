resource "aws_db_instance" "mysql" {
  identifier         = "${var.project_name}-db"
  engine             = "mysql"
  engine_version     = "8.0.39"
  instance_class     = var.db_instance_class
  allocated_storage  = 20
  storage_type       = "gp3"
  storage_encrypted  = true
  db_name            = var.db_name
  username           = var.db_username
  password           = random_password.db_password.result
  db_subnet_group_name = aws_db_subnet_group.db_subnets.name
  tags = {
    Name        = "${var.project_name}-db"
    Environment = var.environment
  }
}
terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
    random = {
      source  = "hashicorp/random"
      version = "~> 3.0"
    }
  }
}

resource "random_password" "db_password" {
  length  = 32
  special = true
}

resource "aws_secretsmanager_secret" "db_password" {
  name                    = "${var.project_name}/rds/password"
  recovery_window_in_days = 7
  tags = {
    Name = "${var.project_name}-db-password"
    Environment = var.environment
  }
}

# Versión del secreto
resource "aws_secretsmanager_secret_version" "db_password" {
  secret_id     = aws_secretsmanager_secret.db_password.id
  secret_string = random_password.db_password.result
}

resource "aws_db_subnet_group" "db_subnets" {
  name       = "${var.project_name}-db-subnet"
  subnet_ids = aws_subnet.private[*].id
  tags = {
    Name = "${var.project_name}-db-subnet"
    Environment = var.environment
  }
}

resource "aws_db_instance" "mysql" {
  identifier     = "${var.project_name}-db"
  engine         = "mysql"
  engine_version = "8.0.39"
  instance_class = var.db_instance_class
  allocated_storage = 20
  storage_encrypted = true
  storage_type      = "gp3"
  db_name  = var.db_name
  username = var.db_username
  password = random_password.db_password.result
  db_subnet_group_name = aws_db_subnet_group.db_subnets.name
  vpc_security_group_ids = [aws_security_group.rds_sg.id]
  multi_az = true
  skip_final_snapshot = true
  tags = {
    Name = "${var.project_name}-db"
    Environment = var.environment
  }
}
  username = var.db_username
  password = aws_secretsmanager_secret_version.db_password.secret_string

  # Networking
  db_subnet_group_name   = aws_db_subnet_group.db_subnets.name
  vpc_security_group_ids = [aws_security_group.rds_sg.id]
  publicly_accessible    = false

  # High Availability
  multi_az = true

  # Backups
  backup_retention_period = var.environment == "production" ? 30 : 7
  backup_window           = "03:00-04:00"
  maintenance_window      = "sun:04:00-sun:05:00"
  copy_tags_to_snapshot   = true

  # Snapshots
  skip_final_snapshot       = var.environment != "production"
  final_snapshot_identifier = var.environment == "production" ? "${var.project_name}-db-final-snapshot-${formatdate("YYYY-MM-DD-hhmm", timestamp())}" : null

  # Protección
  deletion_protection = var.environment == "production"

  # Logging
  enabled_cloudwatch_logs_exports = ["error", "general", "slowquery"]

  # Performance Insights
  performance_insights_enabled = var.environment == "production"
  performance_insights_retention_period = 7

  # Parámetros
  parameter_group_name = aws_db_parameter_group.mysql.name

  tags = {
    Name        = "${var.project_name}-rds"
    Environment = var.environment
  }

  depends_on = [
    aws_db_subnet_group.db_subnets
  ]
}

# Parameter Group para MySQL
resource "aws_db_parameter_group" "mysql" {
  name        = "${var.project_name}-mysql-params"
  family      = "mysql8.0"
  description = "Custom parameter group for MySQL"

  # Parámetros de seguridad y rendimiento
  parameter {
    name  = "slow_query_log"
    value = "1"
  }

  parameter {
    name  = "long_query_time"
    value = "2"
  }

  tags = {
    Name = "${var.project_name}-mysql-params"
  }
}

# Outputs
output "db_endpoint" {
  description = "RDS database endpoint"
  value       = aws_db_instance.mysql.endpoint
}

output "db_name" {
  description = "Name of the database"
  value       = var.db_name
}

output "db_username" {
  description = "Database username"
  value       = var.db_username
}

output "db_password_secret_arn" {
  description = "ARN of the secret containing the database password"
  value       = aws_secretsmanager_secret.db_password.arn
  sensitive   = true
}