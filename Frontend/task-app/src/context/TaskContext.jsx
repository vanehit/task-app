import React, { createContext, useState, useEffect } from 'react';
// Creamos el contexto para toda la app
export const TaskContext = createContext();

// Componente provider del contexto
export const TaskProvider = ({ children }) => {
  // Estado global de las tareas, agrupadas por estado
  const [tasks, setTasks] = useState({
    todo: [],
    doing: [],
    done: [],
  });

  // URL base de la API que usamos para hacer el CRUD en el Backend
  const API_URL = "http://localhost:5000/api/tasks";

  // 🔄 Cargar tareas al iniciar
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const categorized = {
          todo: [],
          doing: [],
          done: [],
        };
        data.forEach((task) => {
          categorized[task.status || 'todo'].push(task);
        });
        setTasks(categorized);
      })
      .catch((err) => console.error("Error al cargar tareas:", err));
  }, []);

  // ➕ Agregar tarea
  const addTask = ({ title, description, status }) => {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    })
      .then((res) => res.json())
      .then((newTask) => {
        const estado = status || "todo";
        setTasks((prev) => ({
          ...prev,
          [estado]: [...prev[estado], { ...newTask, status: estado }],
        }));
      })
      .catch((err) => console.error("Error al agregar tarea:", err));
  };

  // ✏️ Editar tarea
  const editTask = (taskId, updates) => {
    fetch(`${API_URL}/${taskId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    })
      .then((res) => res.json())
      .then((updatedTask) => {
        setTasks((prev) => {
          const newTasks = { ...prev };
          for (const status in newTasks) {
            newTasks[status] = newTasks[status].map((task) =>
              task.id === taskId ? { ...task, ...updates } : task
            );
          }
          return newTasks;
        });
      })
      .catch((err) => console.error("Error al editar tarea:", err));
  };

  // ❌ Eliminar tarea
  const deleteTask = (taskId) => {
    fetch(`${API_URL}/${taskId}`, {
      method: "DELETE",
    })
      .then(() => {
        setTasks((prev) => {
          const newTasks = {};
          for (const status in prev) {
            newTasks[status] = prev[status].filter((task) => task.id !== taskId);
          }
          return newTasks;
        });
      })
      .catch((err) => console.error("Error al eliminar tarea:", err));
  };

  // 🔁 Mover tarea
  const moveTask = (taskId, from, to) => {
    const task = tasks[from].find((t) => t.id === taskId);
    if (!task) return;

    // Actualiza en el backend el estado
    fetch(`${API_URL}/${taskId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: to }),
    })
      .then((res) => res.json())
      .then(() => {
        setTasks((prev) => ({
          ...prev,
          [from]: prev[from].filter((t) => t.id !== taskId),
          [to]: [...prev[to], { ...task, status: to }],
        }));
      })
      .catch((err) => console.error("Error al mover tarea:", err));
  };

  // Retornamos el contexto con todas las funciones y el estado compartido
  return (
    <TaskContext.Provider value={{ tasks, addTask, editTask, deleteTask, moveTask }}>
      {children}
    </TaskContext.Provider>
  );
};
