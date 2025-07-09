import * as TaskModel from "../models/taskModel.js";

export const getTasks = (req, res) => {
  res.json(TaskModel.getAllTasks());
};

export const getTask = (req, res) => {
  const id = Number(req.params.id);
  const task = TaskModel.getTaskById(id);
  if (!task) return res.status(404).json({ error: "Tarea no encontrada" });
  res.json(task);
};

export const createTask = (req, res) => {
  const { title, description } = req.body;
  if (!title) return res.status(400).json({ error: "El título es obligatorio" });

  const newTask = TaskModel.createTask({ title, description });
  res.status(201).json(newTask);
};

export const updateTask = (req, res) => {
  const id = Number(req.params.id);
  const { title, description, completed } = req.body;

  const updatedTask = TaskModel.updateTask(id, { title, description, completed });
  if (!updatedTask) return res.status(404).json({ error: "Tarea no encontrada" });
  res.json(updatedTask);
};

export const deleteTask = (req, res) => {
  const id = Number(req.params.id);
  const success = TaskModel.deleteTask(id);
  if (!success) return res.status(404).json({ error: "Tarea no encontrada" });
  res.status(204).end();
};
