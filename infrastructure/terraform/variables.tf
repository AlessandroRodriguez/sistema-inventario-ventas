variable "db_instance_class" {
	description = "Clase de instancia para RDS"
	type        = string
	default     = "db.t3.micro"
}

variable "db_name" {
	description = "Nombre de la base de datos RDS"
	type        = string
	default     = "inventario"
}

variable "db_username" {
	description = "Usuario administrador de la base de datos RDS"
	type        = string
	default     = "admin"
}

variable "project_name" {
	description = "Nombre del proyecto para recursos AWS"
	type        = string
	default     = "sistema-inventario-ventas"
}

variable "environment" {
	description = "Ambiente de despliegue (dev, prod, etc.)"
	type        = string
	default     = "dev"
}

variable "alb_http_port" {
	description = "Puerto HTTP para el ALB"
	type        = number
	default     = 80
}

variable "alb_https_port" {
	description = "Puerto HTTPS para el ALB"
	type        = number
	default     = 443
}

variable "ecs_app_port" {
	description = "Puerto de la aplicación ECS"
	type        = number
	default     = 8000
}

variable "rds_username" {
  description = "Username for RDS MySQL"
  type        = string
}

variable "rds_instance_class" {
  description = "RDS instance class"
  type        = string
}

variable "rds_allocated_storage" {
  description = "Allocated storage for RDS"
  type        = number
}

variable "rds_db_name" {
  description = "Database name for RDS"
  type        = string
}

variable "private_subnet_ids" {
  description = "List of private subnet IDs for RDS subnet group"
  type        = list(string)
}
