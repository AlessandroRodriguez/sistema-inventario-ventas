# Documentación de Infraestructura como Código (IaC)

## 1. Introducción

El presente documento desarrolla el proyecto **“Sistema de Inventarios y Ventas con IaC en AWS”**, una solución orientada a mejorar y automatizar los procesos de control de productos, inventario, ventas y gestión de usuarios en una organización. En la actualidad, muchas empresas enfrentan dificultades relacionadas con la administración manual de inventarios y registros de ventas, lo que genera errores, pérdida de información y limitaciones al momento de escalar sus operaciones. Este sistema busca resolver dichas problemáticas mediante una plataforma confiable, moderna y con soporte para crecimiento continuo.  

El proyecto se basa en el uso de **Infraestructura como Código (IaC)**, un enfoque que permite definir y administrar los recursos tecnológicos a través de código, garantizando que la infraestructura sea reproducible, escalable y fácil de mantener. Gracias a esta metodología, se eliminan configuraciones manuales propensas a errores y se logra que los entornos de desarrollo, pruebas y producción sean consistentes entre sí.  

Para la implementación se emplean dos herramientas fundamentales: **Terraform**, que se encarga de la provisión automática de los recursos en **Amazon Web Services (AWS)**, y **Ansible**, utilizado para la configuración de servidores, instalación de dependencias y despliegue de la aplicación. La combinación de ambas tecnologías permite gestionar desde la creación de máquinas virtuales hasta la instalación del software necesario para el funcionamiento del sistema.  

Adicionalmente, el proyecto incorpora prácticas de **DevOps** con pipelines de **Integración y Despliegue Continuo (CI/CD)** mediante **GitHub Actions o Jenkins**, lo que posibilita automatizar pruebas, validar cambios y realizar despliegues seguros de nuevas versiones de la aplicación. Este enfoque garantiza entregas rápidas, reduce los tiempos de inactividad y mejora la calidad del software en cada iteración.  

El **Sistema de Inventarios y Ventas con IaC en AWS** está diseñado para ser escalable, seguro y confiable. Gracias a la infraestructura en la nube, es posible adaptarse a diferentes cargas de trabajo, mantener alta disponibilidad y asegurar la continuidad del negocio. De esta manera, la organización obtiene una herramienta que no solo moderniza la gestión de inventarios y ventas, sino que también incorpora las mejores prácticas de automatización y operación en la nube.  

**Objetivos del proyecto:**
- Automatizar la creación, configuración y despliegue de la infraestructura en AWS.  
- Optimizar la gestión de inventarios y ventas mediante una plataforma ágil, confiable y escalable.  
- Garantizar la consistencia y reproducibilidad en los entornos de desarrollo, pruebas y producción.  
- Incrementar la disponibilidad, seguridad y rendimiento del sistema en operación.  
- Integrar buenas prácticas de DevOps que permitan entregas ágiles, continuas y eficientes.  
- Reducir los errores manuales y tiempos de implementación a través de IaC.  
- Brindar a la organización una base tecnológica sólida que facilite la innovación y el crecimiento.  

---

## 2. Arquitectura de la Infraestructura

**Componentes principales:**
- **EC2:** Servidores web y backend PHP.  
- **RDS (MySQL):** Base de datos del sistema.  
- **S3:** Almacenamiento de archivos y backups.  
- **ELB (Elastic Load Balancer):** Balanceo de carga entre instancias.  
- **Auto Scaling Groups (ASG):** Escalado automático según demanda.  
- **IAM:** Gestión de usuarios y roles para seguridad.  
- **Prometheus / Grafana:** Monitorización de métricas.  
- **ELK Stack (opcional):** Gestión centralizada de logs.  
- **GitHub Actions / Jenkins:** Pipelines de CI/CD.  

---

## 3. Terraform  

### 3.1 Estructura de carpetas  

terraform/
  main.tf        # Recursos principales (EC2, RDS, S3, ELB, ASG)
  variables.tf   # Variables de configuración
  outputs.tf     # Salidas de recursos para integración con Ansible o CI/CD
  ec2/           # Módulo de instancias EC2
  rds/           # Módulo de base de datos RDS
  s3/            # Módulo de almacenamiento S3
  elb/           # Módulo de balanceador de carga
  asg/           # Módulo de Auto Scaling Groups

---

### 3.2 Recursos principales  

| Recurso | Descripción |
|---------|-------------|
| **EC2** | Servidores web con PHP y backend |
| **RDS** | Base de datos MySQL para el sistema |
| **S3**  | Almacenamiento de archivos y backups |
| **ELB** | Distribuye el tráfico entre instancias EC2 |
| **ASG** | Permite escalado automático según carga |

---

### 3.3 Variables importantes  

terraform/
  main.tf        # Recursos principales (EC2, RDS, S3, ELB, ASG)
  variables.tf   # Variables de configuración
  outputs.tf     # Salidas de recursos para integración con Ansible o CI/CD
  ec2/           # Módulo de instancias EC2
  rds/           # Módulo de base de datos RDS
  s3/            # Módulo de almacenamiento S3
  elb/           # Módulo de balanceador de carga
  asg/           # Módulo de Auto Scaling Groups
  
---

### 3.4 Comandos básicos  

terraform init       # Inicializar el proyecto
terraform plan       # Revisar los cambios antes de aplicar
terraform apply      # Crear y aplicar la infraestructura
terraform destroy    # Eliminar toda la infraestructura

---

## 4. Ansible  

### 4.1 Estructura de carpetas  

ansible/
  hosts.yml
  playbooks/
    setup-webserver.yml   # Configuración inicial del servidor
    deploy-app.yml        # Despliegue de la aplicación PHP
  roles/
    webserver/            # Tareas reutilizables

---

### 4.2 Inventario (hosts.yml)  

webservers:
  hosts:
    ec2-web-01:
      ansible_host: <IP_PUBLICA>
    ec2-web-02:
      ansible_host: <IP_PUBLICA>

---

### 4.3 Playbooks principales  

- **setup-webserver.yml:** instala Apache, PHP, extensiones necesarias, Git y herramientas básicas.  
- **deploy-app.yml:** clona el repositorio desde GitHub y despliega la aplicación en el servidor.  

---

### 4.4 Comandos básicos  

ansible-playbook -i hosts.yml playbooks/setup-webserver.yml
ansible-playbook -i hosts.yml playbooks/deploy-app.yml

---

## 5. Integración Terraform + Ansible  

- Terraform crea los recursos en AWS.  
- Se obtienen las IPs públicas de EC2 con `terraform output`.  
- Ansible utiliza estas IPs para configurar los servidores y desplegar la aplicación automáticamente.  

---

## 6. Buenas prácticas  

- Versionar todos los scripts en Git.  
- Separar variables y secretos de los archivos de configuración.  
- Modularizar Terraform para facilitar escalabilidad.  
- Usar roles en Ansible para tareas repetitivas.  
- Revisar cambios con `terraform plan` antes de aplicar.  
- Monitorear métricas y logs de la infraestructura en producción.  

---

## 7. Referencias  

- Terraform Documentation → https://developer.hashicorp.com/terraform/docs  
- Ansible Documentation → https://docs.ansible.com/  
- AWS Architecture Best Practices → https://aws.amazon.com/architecture/  



