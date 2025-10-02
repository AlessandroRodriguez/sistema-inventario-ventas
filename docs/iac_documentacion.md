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
- Integrar prácticas de DevOps que permitan entregas ágiles, continuas y eficientes.  
- Reducir los errores manuales y tiempos de implementación a través de IaC.  
- Brindar a la organización una base tecnológica sólida que facilite la innovación y el crecimiento.  

2. Arquitectura de la Infraestructura

El sistema “Inventarios y Ventas con IaC en AWS” se despliega sobre la nube de Amazon Web Services (AWS) y está diseñado bajo un enfoque modular, escalable y seguro. La infraestructura aprovecha diversos servicios de AWS que permiten garantizar disponibilidad, rendimiento y monitoreo en tiempo real.

Componentes principales:

EC2 (Elastic Compute Cloud): Instancias que alojan el servidor web y el backend desarrollado en PHP.

RDS (Relational Database Service - MySQL): Servicio de base de datos administrada para la persistencia de la información del sistema.

S3 (Simple Storage Service): Almacenamiento de archivos estáticos, documentos y copias de seguridad.

ELB (Elastic Load Balancer): Distribuye el tráfico entrante entre varias instancias EC2 para balancear carga y mejorar disponibilidad.

Auto Scaling Groups (ASG): Ajusta automáticamente la cantidad de instancias según la demanda.

IAM (Identity and Access Management): Administración de usuarios, políticas y roles para la seguridad de la infraestructura.

Prometheus / Grafana: Herramientas de monitoreo y visualización de métricas de la infraestructura y la aplicación.

ELK Stack (opcional): Plataforma para la centralización, análisis y visualización de logs.

GitHub Actions / Jenkins: Pipelines de CI/CD para despliegues automatizados y controlados.

Diagrama de arquitectura:
Https://app.diagrams.net/?src=about#G1DQ7Rc3p1fE37E1PrSi314tYE110Q3-6T#%7B%22pageId%22%3A%22wuBTGgO2qXcWH8F-5qdt%22%7D

3. Terraform
   
3.1 Estructura de carpetas

terraform/
 ├── main.tf          # Recursos principales (EC2, RDS, S3, ELB, ASG)
 ├── variables.tf     # Variables de configuración
 ├── outputs.tf       # Salidas de recursos para integración con Ansible o CI/CD
 └── modules/
     ├── ec2/
     ├── rds/
     ├── s3/
     ├── elb/
     └── asg/

3.2 Recursos principales
Recurso	Descripción
EC2	Servidores web con PHP y backend
RDS	Base de datos MySQL para el sistema
S3	Almacenamiento de archivos y backups
ELB	Distribuye el tráfico entre instancias EC2
ASG	Permite escalado automático según carga
3.3 Variables importantes

aws_region → Región de AWS donde se desplegará la infraestructura.

instance_type → Tipo de instancia EC2 a utilizar.

db_name, db_user, db_password → Configuración de la base de datos.

vpc_id, subnet_ids → Identificadores de red y subredes donde se desplegarán los recursos.

3.4 Comandos básicos
terraform init       # Inicializar el proyecto
terraform plan       # Revisar los cambios antes de aplicar
terraform apply      # Crear y aplicar la infraestructura
terraform destroy    # Eliminar toda la infraestructura

4. Ansible
4.1 Estructura de carpetas
ansible/
├── hosts.yml
├── playbooks/
│   ├── setup-webserver.yml   # Configuración inicial del servidor
│   └── deploy-app.yml        # Despliegue de la aplicación PHP
└── roles/
    └── webserver/            # Tareas reutilizables

4.2 Inventario (hosts.yml)
webservers:
  hosts:
    ec2-web-01:
      ansible_host: <IP_PUBLICA>
    ec2-web-02:
      ansible_host: <IP_PUBLICA>

4.3 Playbooks principales

setup-webserver.yml: instala Apache, PHP, extensiones necesarias, Git y herramientas básicas.

deploy-app.yml: clona el repositorio desde GitHub y despliega la aplicación en el servidor.

4.4 Comandos básicos
ansible-playbook -i hosts.yml playbooks/setup-webserver.yml
ansible-playbook -i hosts.yml playbooks/deploy-app.yml

5. Integración Terraform + Ansible

El flujo de trabajo entre Terraform y Ansible se desarrolla de la siguiente manera:

Terraform crea los recursos en AWS (EC2, RDS, S3, ELB, etc.).

Se obtienen las direcciones IP públicas de las instancias EC2 mediante terraform output.

Ansible utiliza dichas IPs para conectarse a los servidores, instalar dependencias y desplegar la aplicación.

Este enfoque garantiza que desde la creación de la infraestructura hasta la configuración de la aplicación todo el proceso sea automático, reproducible y controlado.

6. Buenas prácticas

Versionar todos los scripts de Terraform y Ansible en Git.

Separar variables y secretos de los archivos de configuración (por ejemplo, usando AWS SSM o Vault).

Modularizar Terraform para mejorar la escalabilidad y el mantenimiento.

Utilizar roles en Ansible para reutilizar tareas comunes.

Ejecutar siempre terraform plan antes de aplicar cambios.

Monitorear métricas y logs de la infraestructura en producción con Prometheus, Grafana y ELK.

7. Referencias

Terraform Documentation

Ansible Documentation

AWS Architecture Best Practices
