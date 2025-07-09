// Importamos todas las funciones del modelo de tareas
import * as TaskModel from "../models/taskModel.js";

// Obtenemos todas las tareas
export const getTasks = (req, res) => {
  // Llamamos al modelo para obtener todas las tareas y las devuelve como JSON
  res.json(TaskModel.getAllTasks());
};

//Obtenemos una tarea por su ID
export const getTask = (req, res) => {
  const id = Number(req.params.id);// Convertimos el ID de string a número
  const task = TaskModel.getTaskById(id);//y buscamos la tarea en el modelo
  // Si no se encuentra la tarea, devolvemos error 404
  if (!task) return res.status(404).json({ error: "Tarea no encontrada" });

   // Si se encuentra, devolvemos la tarea
  res.json(task);
};

// ➕ Creamos una nueva tarea
export const createTask = (req, res) => {
  const { title, description } = req.body;// Extraemos datos del cuerpo de la solicitud
  // Validamos que el título esté presente
  if (!title) return res.status(400).json({ error: "El título es obligatorio" });

  
  // Llamamos al modelo para crear la tarea
  const newTask = TaskModel.createTask({ title, description });

  
  // Respondemos con la nueva tarea y código 201 (creado)
  res.status(201).json(newTask);
};

//Actualizamos una tarea existente
export const updateTask = (req, res) => {
  const id = Number(req.params.id);// ID de la tarea a actualizar
  const { title, description, completed } = req.body;// Datos a actualizar

  // Llamamos al modelo para actualizar
  const updatedTask = TaskModel.updateTask(id, { title, description, completed });

  // Si no se encuentra la tarea, devolvemos error 404
  if (!updatedTask) return res.status(404).json({ error: "Tarea no encontrada" });

   // Si todo va OK, devolvemos la tarea actualizada
  res.json(updatedTask);
};

//Eliminamos una tarea
export const deleteTask = (req, res) => {
  const id = Number(req.params.id);// ID de la tarea a eliminar
  const success = TaskModel.deleteTask(id);// Ejecutamos la lógica de borrado en el modelo

    // Si no se encuentra, devolvemos error 404
  if (!success) return res.status(404).json({ error: "Tarea no encontrada" });
 
  // Si se borra exitosamente, respondemos con 204 (sin contenido)
  res.status(204).end();
};
