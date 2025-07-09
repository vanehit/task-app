import express from "express";
// Importamos todas las funciones del controlador de tareas
import * as TaskController from "../controllers/taskController.js";

// Creamos un nuevo enrutador
const router = express.Router();

// Ruta para obtener todas las tareas (GET /api/tasks)
router.get("/", TaskController.getTasks);

//Ruta para obtener una tarea por ID (GET /api/tasks/:id)
router.get("/:id", TaskController.getTask);

//Ruta para crear una nueva tarea (POST /api/tasks)
router.post("/", TaskController.createTask);

//Ruta para actualizar una tarea (PUT /api/tasks/:id)
router.put("/:id", TaskController.updateTask);

router.delete("/:id", TaskController.deleteTask);

export default router;
