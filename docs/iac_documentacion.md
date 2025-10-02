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
