import React, { useState } from 'react';
import '../../styles/styles.scss';

// Componente funcional que recibe una función por props llamada onTaskAdded
const TaskForm = ({ onTaskAdded }) => {
   // Estado para el título de la tarea
  const [title, setTitle] = useState('');
  // Estado para el estado actual de la tarea (por hacer, en progreso, completada)
  const [status, setStatus] = useState('todo');
  // Estado para la descripción opcional de la tarea
  const [description, setDescription] = useState('');

// esta Función se ejecuta cuando se envía el formulario
  const handleSubmit = (e) => {
    e.preventDefault();// Evita que la página se recargue
    // Validación: si el título está vacío, no se agrega la tarea
    if (title.trim() === '') return;

    // Llamamos a la función que viene por props para agregar la tarea
    onTaskAdded({ title, description, status });
      // Limpiamos los campos del formulario
    setTitle('');
    setDescription('');
    setStatus('todo');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form p-4 rounded shadow-sm">
       {/* Campo de entrada para el título de la tarea */}
      <div className="mb-3">
        <label htmlFor="taskInput" className="form-label fw-bold text-label">
          ¿Qué tarea querés agregar?
        </label>
        <input
          type="text"
          id="taskInput"
          className="form-control input-jr"
          placeholder="Escribí tu tarea..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

       {/* Campo de texto para la descripción opcional */}
       <div className="mb-3">
        <label htmlFor="descriptionInput" className="form-label fw-bold text-label">
          Descripción (opcional)
        </label>
        <textarea
          id="descriptionInput"
          className="form-control"
          placeholder="Detalles adicionales de la tarea..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

     {/* Selector del estado de la tarea */}
      <div className="mb-3">
        <label htmlFor="statusSelect" className="form-label fw-bold text-label">
          Estado de la tarea
        </label>
        <select
          id="statusSelect"
          className="form-select"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="todo">Por hacer (To Do)</option>
          <option value="doing">En progreso (Doing)</option>
          <option value="done">Completada (Done)</option>
        </select>
      </div>

        {/* btn para enviar el formulario */}
      <button type="submit" className="btn btn-jr w-100">
        ➕ Agregar tarea
      </button>
    </form>
  );
};

export default TaskForm;
