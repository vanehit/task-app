
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoutes.js";

// Cargamos las variables de entorno desde el archivo .env
dotenv.config(); 

// Inicializamos la aplicación de Express
const app = express();

// Definimos el puerto del servidor (desde .env o por defecto 5000)
const PORT = process.env.PORT || 5000;

//Middlewares
app.use(cors());// Permite que el frontend se conecte al backend desde otro origen
app.use(express.json());// Permite recibir datos en formato JSON en las solicitudes

//Montamos las rutas para el endpoint de tareas
app.use("/api/tasks", taskRoutes);

// Ruta raíz para saber si funciona el servidor 
app.get("/", (req, res) => {
  res.send(`🚀 Servidor corriendo en puerto ${PORT}`);
});

//Iniciamos el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en puerto ${PORT}`);
});
