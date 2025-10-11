resource "aws_db_instance" "mysql" {
  identifier         = "${var.project_name}-db"
  engine             = "mysql"
  instance_class     = var.db_instance_class
  allocated_storage  = 20
  username           = var.db_username
  password           = random_password.db_password.result
  db_name            = var.db_name
}
resource "aws_db_instance" "mysql" {
  identifier         = "${var.project_name}-db"
  engine             = "mysql"
  instance_class     = var.db_instance_class
  username           = var.db_username
  password           = random_password.db_password.result
  db_name            = var.db_name
}
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
  vpc_security_group_ids = [aws_security_group.rds_sg.id]
}
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

resource "random_password" "rds" {
  length  = 16
  special = true
}

resource "random_password" "rds" {
  length  = 16
  special = true
}

resource "aws_db_subnet_group" "rds" {
  name       = "${var.project_name}-rds-subnet-group"
  subnet_ids = var.private_subnet_ids
}

resource "aws_db_instance" "rds" {
  identifier              = "${var.project_name}-rds"
  engine                  = "mysql"
  instance_class          = var.rds_instance_class
  allocated_storage       = var.rds_allocated_storage
  db_name                 = var.rds_db_name
  username                = var.rds_username
  password                = random_password.rds.result
  db_subnet_group_name    = aws_db_subnet_group.rds.name
  vpc_security_group_ids  = [aws_security_group.rds_sg.id]
  skip_final_snapshot     = true
  publicly_accessible     = false
}
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