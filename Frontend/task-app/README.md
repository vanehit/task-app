# 📝Tasks app - Gestor de tareas React con Vite y Node.js

Aplicación web simple para gestionar tareas al estilo **Trello**, desarrollada para el desafío técnico de ingreso a la **Academia Fort It 2025**

---

## 🧾 Funcionalidades

✅ Crear nuevas tareas con título y descripción.  
✅ Ver tareas organizadas por estado: `Por hacer`, `En progreso` y `Hecha`.  
✅ Editar el título y la descripción de cada tarea.  
✅ Eliminar tareas existentes.  
✅ Mover tareas entre estados (`todo`, `doing`, `done`).  
✅ Datos persistentes a través de una API con Express.js.  

---

## 🛠️ Las tecnologías utilizadas

### 💻 Frontend (React + Vite)
- React con Hooks (`useState`, `useEffect`, `useContext`)
- React Context API para manejo global del estado de las tareas
- Fetch API para consumir la API REST
- Estilos con SASS y Bootstrap 5
- Arquitectura basada en componentes reutilizables
- Tiene un Navbar para seguir agregando funcionalidades

### 🌐 Backend (Node.js + Express)
- Express.js para la creación de endpoints REST
- Controladores y rutas organizadas
- Simulación de base de datos en memoria (`array`)
- Middleware para CORS y JSON
- Estructura simple pero escalable

---

## 📁 Estructura de carpetas

![Estructura de Carpetas](./img/estructuraCarpeta1.png)

![Estructura de Carpetas](./img/estructuraCarpeta2.png)




---
## Capturas de pantalla

Aquí te muestro cómo se ve la app funcionando:

### Pantalla principal

![Pantalla principal](./img/tasksApp-foto1.png)

### Menú de opciones

![Tareas En Progreso...](./img/tasksApp-foto2.png)

![Tareas En Progreso...Hechas](./img/tasksApp-foto3.png)

![Tareas En Progreso...Edición](./img/tasksApp-foto4.png)

![Tareas Hechas...](./img/tasksApp-foto5.png)


### 🚀 Instalación y ejecución

1. Clonar el repositorio:
```bash
git clone https://github.com/vanehit/task-app.git
cd task-app

2. Instalar dependencias del backend:
cd ../backend
npm install
npm run dev

El servidor se ejecutará por defecto en:
📍 http://localhost:5000

3. Instalar dependencias del frontend:
cd ../frontend
npm install
npm run dev

La aplicación se abrirá en el navegador en:
🌐 http://localhost:5173