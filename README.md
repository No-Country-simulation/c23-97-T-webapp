# c23-97-T-webapp
No Country - Simulación laboral - Cohorte 23 (Enero 2025)<br><br>

# QR Share Pro

La pagina se dedica a la venta de ropa online la cual tienes la funcionalidad de mostrar un codigo QR que sirve para que lo puedas buscar de una forma rapida y sencilla sin clicks. este servicio le ahorra tiempo y reduce las complicaciones al compartir información asi puede enfocarse en sus tareas mientras sus compañeros acceden fácilmente a los productos.

![ejempo](https://github.com/user-attachments/assets/b1a3b50a-26e9-48c6-865c-2dc327e51891)<br><br>

## Comenzando 🚀

En Windows, si deseas usar este proyecto como base para tu propio proyecto, puedes usar el comando `git clone` para clonar este repositorio en tu computadora.<br><br>

Mira **Deployment** para ver el despliegue del proyecto.<br><br>

## Pre-requisitos 📋

Como desarrollador, necesitarás tener instalados los siguientes programas:

**Frontend:**

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/es/)
- Manejador de dependencias [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

**Backend:**

- [Python 3.13.1](https://www.python.org/)
- Pip 24.3.1
- [MySQL Community Edition 8.0](https://dev.mysql.com/downloads/installer/)<br><br>

## Instalación 🔧

Para poder ejecutar el proyecto, primero debes clonar el repositorio en tu computadora.
Para clonar el repositorio, abre tu terminal y ejecuta el siguiente comando:

```bash
git clone https://github.com/No-Country-simulation/c23-97-T-webapp.git
```
<br>

Una vez clonado el repositorio, abre tu terminal y ejecuta los siguentes comandos para instalar las dependencias necesarias la cuales estan separadas en las carpetas `Frontend` y `Backend`:
<br>

### Frontend:

```bash
cd Frontend
npm install
```

### Backend:

> ***Para descartar posibles errores, repetidamente se hace hincapié en que el entorno virtual de Python siempre debe estar activado y que los comandos deben ser ejecutados en ubicaciones especificas.***

Instalar MySQL Community Edition 8.0 (incluyendo MySQL Workbench).
![Instalacion](https://github.com/user-attachments/assets/7d648678-0ff0-4508-9d3a-1ecf0df92da1)

Desde MySQL Workbench, crear manualmente la base de datos ya que <ins>Django no la crea automáticamente</ins>.
```sql
CREATE DATABASE apidb CHARACTER SET utf8mb4;
```
![crear_base_de_datos_para_django](https://github.com/user-attachments/assets/ff954f8a-d49c-47fa-bfc8-bd65c0cb3795)

Editar el archivo que está en `proyecto\settings.py` para modificar el acceso a la base de datos.
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'apidb',
        'USER': 'tu_usuario_de_mysql',
        'PASSWORD': 'tu_contraseña_de_mysql',
        'HOST': 'tu_localhost',
        'PORT': 'el_puerto_de_tu_localhost',
        'OPTIONS': {
            'charset': 'utf8mb4',
        },
    }
}
```
<br>

> En Windows 10 se utilizo PowerShell 7.5.0 para ejecutar los siguientes comandos...

En la carpeta principal donde está el archivo `manage.py` crear un entorno virtual de Python, donde se van a descargar los paquetes necesarios para el proyecto de Django.
```bash
python -m venv entornoVirtual
```

Activar el entorno virtual (si se está usando PowerShell, ejecutar el script `.ps1`)
```bash
.\entornoVirtual\Scripts\Activate.ps1
```

Teniendo el entorno virtual de Python activado, instalar los paquetes (automáticamente se descargan <ins>dentro de la carpeta del entorno virtual</ins>, no de manera general en la carpeta de la instalación de Python).
```bash
pip install -r requirements.txt
```
<br>

> Los comandos `makemigrations` y `migrate` solo funcionan <ins>si la base de datos ya ha sido creada</ins>.

Teniendo el entorno virtual de Python activado, ir a la carpeta principal donde está el archivo `manage.py` para ejecutar el comando que detecta los cambios que se le van a hacer a la base de datos.
```bash
python manage.py makemigrations
```

Teniendo el entorno virtual de Python activado, ir a la carpeta principal donde está el archivo `manage.py` para ejecutar el comando que aplica los cambios a la base de datos.
```bash
python manage.py migrate
```

Teniendo el entorno virtual de Python activado, ir a la carpeta principal donde está el archivo `manage.py` para ejecutar el comando que crea un usuario admin necesario para acceder a la página de administración de Django (completar la información que pide).
```bash
python manage.py createsuperuser
```
<br>

## Ejecución 🏁

### Frontend:

```bash
cd Frontend
npm run dev
```

Una vez ejecutado el entorno de desarrollo, abre tu navegador y ingresa la dirección `http://localhost:5173/` para ver el proyecto en acción.<br><br>

### Backend:

Teniendo el entorno virtual de Python activado, ir a la carpeta principal donde está el archivo `manage.py` para ejecutar el proyecto de Django.
```bash
python manage.py runserver
```
<br>

Para ingresar a la página de <ins>administración</ins>.
```bash
http://127.0.0.1:8000/admin/
```
<br>

### Tarjetas
Para ver <ins>todas</ins> las tarjetas, que muestran información de las categorías que están en la parte de abajo de todo de la página home.
```bash
http://127.0.0.1:8000/api/tarjetas/
```
<br>

Para ver las tarjetas, según la <ins>categoría</ins>.
```bash
http://127.0.0.1:8000/api/tarjetas/hombre/
```
```bash
http://127.0.0.1:8000/api/tarjetas/mujer/
```
```bash
http://127.0.0.1:8000/api/tarjetas/niño/
```
<br>

### Productos
Para ver <ins>todos</ins> los productos.
```bash
http://127.0.0.1:8000/api/productos/
```
<br>

Para ver productos por <ins>categoría</ins>.
```bash
http://127.0.0.1:8000/api/productos/hombre/
```
```bash
http://127.0.0.1:8000/api/productos/mujer/
```
```bash
http://127.0.0.1:8000/api/productos/niño/
```
<br>

### Pasar parámetro a través de la URL
Estando dentro de una categoría, <ins>buscar una palabra que esté en el título</ins> de un producto.
```bash
http://127.0.0.1:8000/api/productos/hombre/?titulo=palabra
```
```bash
http://127.0.0.1:8000/api/productos/mujer/?titulo=palabra
```
```bash
http://127.0.0.1:8000/api/productos/niño/?titulo=palabra
```
<br>

## Despliegue 📦

El proyecto se encuentra desplegado en la siguiente URL: https://qr-share-pro.netlify.app/
<br><br>

## Construido con 🛠️

Las tecnologías que se utilizaron para crear el proyecto:<br><br>

**Frontend:**

- [ReactJS](https://reactjs.org/) Biblioteca para la creación de interfaces de usuario
- [Tailwind CSS](https://tailwindcss.com/) Framework de estilos CSS 
- [Vite](https://vitejs.dev/) Herramienta de desarrollo de aplicaciones
- [React Router](https://reactrouter.com/) Biblioteca de navegación para aplicaciones de React
<br><br>

**BackEnd:**

- [Django](https://www.djangoproject.com/) Framework para el desarrollo de aplicaciones web
- [Render](https://render.com/) Alojamiento de aplicaciones
- [Aiven](https://aiven.io/) Servicio de base de datos
- [Cloudinary](https://cloudinary.com/) Gestión de archivos multimedia<br><br>

## Autores ✒️

Este proyecto fue desarrollado por los siguientes colaboradores:

- **Juan Micozzi** - _Backend_ - [robicombi](https://github.com/robicombi)
- **Leandro Eduardo Dziej** - _Frontend_ - [LeandroDziej](https://github.com/LeandroDziej)
- **Edward Botello** - _Frontend_ - [EdwardbotA](https://github.com/EdwardbotA)
