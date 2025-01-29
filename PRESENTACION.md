# c23-97-T-webapp
No Country - Simulación laboral - Cohorte 23 (Enero 2025)

# QR Share Pro

La pagina se dedica a la venta de ropa online la cual tienes la funcionalidad de mostrar un codigo QR que sirve para que lo puedas buscar de una forma rapida y sencilla sin clicks. este servicio le ahorra tiempo y reduce las complicaciones al compartir información asi puede enfocarse en sus tareas mientras sus compañeros acceden fácilmente a los productos.

![ejempo](https://github.com/user-attachments/assets/b1a3b50a-26e9-48c6-865c-2dc327e51891)

## Comenzando 🚀

En Windows, si deseas usar este proyecto como base para tu propio proyecto, puedes usar el comando `git clone` para clonar este repositorio en tu computadora.

Mira **Deployment** para ver el despliegue del proyecto.

### Pre-requisitos 📋

Como desarrollador, necesitarás tener instalados los siguientes programas:

Frontend:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/es/)
- Manejador de dependencias [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

Backend:

- [Python 3.13.1](https://www.python.org/)
- [MySQL Community Edition 8.0](https://dev.mysql.com/downloads/installer/)

### Instalación 🔧

Para poder ejecutar el proyecto, primero debes clonar el repositorio en tu computadora.
Para clonar el repositorio, abre tu terminal y ejecuta el siguiente comando:

```bash
git clone https://github.com/No-Country-simulation/c23-97-T-webapp.git
```

Una vez clonado el repositorio, abre tu terminal y ejecuta los siguentes comandos para instalar las dependencias necesarias la cuales estan separadas en las carpetas `Frontend` y `Backend`:

Frontend:

```bash
cd Frontend
npm install
```

Backend:

Instalar MySQL Community Edition 8.0 (incluyendo MySQL Workbench).
![Instalacion](https://github.com/user-attachments/assets/7d648678-0ff0-4508-9d3a-1ecf0df92da1)

Desde MySQL Workbench, crear manualmente la base de datos ya que Django no la crea automáticamente.
```bash
CREATE DATABASE apidb CHARACTER SET utf8mb4;
```
![crear_base_de_datos_para_django](https://github.com/user-attachments/assets/ff954f8a-d49c-47fa-bfc8-bd65c0cb3795)

Editar el archivo que está en proyecto\settings.py para modificar el acceso a la base de datos.
```bash
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': apidb,
        'USER': tu_usuario_de_mysql,
        'PASSWORD': tu_contraseña_de_mysql,
        'HOST': tu_localhost,
        'PORT': el_puerto_de_tu_localhost,
        'OPTIONS': {
            'charset': 'utf8mb4',
        },
    }
}
```

En Windows 10 se utilizo PowerShell 7.5.0 para ejecutar los siguientes comandos...

En la carpeta principal donde está el archivo manage.py crear un entorno virtual de Python, donde se descargan los paquetes necesarios para el proyecto de Django.
```bash
python -m venv entornoVirtual
```

Activar el entorno virtual (si se está usando PowerShell, ejecutar el script .ps1)
```bash
.\entornoVirtual\Scripts\Activate.ps1
```

Teniendo el entorno virtual de Python activado, instalar los paquetes (automáticamente se descargan dentro de la carpeta del entorno virtual, no de manera general en la carpeta de la instalación de Python).
```bash
pip install -r requirements.txt
```

Los comandos makemigrations y migrate, solo funcionan si la base de datos ya ha sido creada. Si no, aparecen errores...

Teniendo el entorno virtual de Python activado, ir a la carpeta principal donde está el archivo manage.py para ejecutar el comando que detecta los cambios que se le van a hacer a la base de datos.
```bash
python manage.py makemigrations
```

Teniendo el entorno virtual de Python activado, ir a la carpeta principal donde está el archivo manage.py para ejecutar el comando que aplica los cambios a la base de datos.
```bash
python manage.py migrate
```

Teniendo el entorno virtual de Python activado, ir a la carpeta principal donde está el archivo manage.py para ejecutar el comando que crea un usuario admin necesario para acceder a la página de administración de Django (completar la información que pide).
```bash
python manage.py createsuperuser
```

* Para descartar posibles errores, repetidamente se hace hincapié en que el entorno virtual de Python siempre debe estar activado y que los comandos deben ser ejecutados en ubicaciones especificas.

# Ejecutar

Frontend:

```bash
cd Frontend
npm run dev
```

Una vez ejecutado el entorno de desarrollo, abre tu navegador y ingresa la dirección ` http://localhost:5173/` para ver el proyecto en acción.

Backend:

Teniendo el entorno virtual de Python activado, ir a la carpeta principal donde está el archivo manage.py para ejecutar el proyecto de Django.
```bash
python manage.py runserver
```

Y desde el navegador web...
- Para ingresar a la página de administración http://127.0.0.1:8000/admin/
- Para ver todos los productos http://127.0.0.1:8000/api/productos/
- Para ver productos por categoría (solo admite: hombre, mujer, niño) http://127.0.0.1:8000/api/hombre

## Despliegue 📦

El proyecto se encuentra desplegado en la siguiente URL: https://qr-share-pro.netlify.app/

## Construido con 🛠️

Las tecnologías que se utilizaron para crear el proyecto:

Frontend:

- [ReactJS](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)

BackEnd:

- [Django](https://www.djangoproject.com/)
- [Render](https://render.com/)
- [Aiven](https://aiven.io/)
- [Cloudinary](https://cloudinary.com/)

## Autores ✒️

Este proyecto fue desarrollado por los siguientes colaboradores:

- **Juan Micozzi** - _Backend_ - [robicombi](https://github.com/robicombi)
- **Leandro Eduardo Dziej** - _Frontend_ - [LeandroDziej](https://github.com/LeandroDziej)
- **Edward Botello** - _Frontend_ - [EdwardbotA](https://github.com/EdwardbotA)
