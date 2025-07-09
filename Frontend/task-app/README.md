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

📦task-app
┣ 📂backend
┃ ┣ 📂controllers
┃ ┗ taskController.js
┃ ┣ 📂models
┃ ┗ taskModel.js
┃ ┣ 📂routes
┃ ┗ taskRoutes.js
┃ ┗ server.js
┣ 📂frontend
┃ ┣ 📂components
┃ ┃ ┣ 📂TaskForm
┃ ┃ ┗ taskForm.jsx
┃ ┃ ┣ 📂TaskItem
┃ ┃ ┗ taskItem.jsx
┃ ┃ ┗ 📂TaskList
┃ ┃ ┗ taskList.jsx
┃ ┣ 📂context
┃ ┃ ┗ TaskContext.jsx
┃ ┣ 📂styles
┃ ┃ ┗ styles.scss
┃ ┣ App.jsx
┃ ┗ main.jsx


---

## 🔄 Instalación y ejecución

