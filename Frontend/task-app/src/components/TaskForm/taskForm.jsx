import React, { useState } from 'react';
import '../../styles/styles.scss';

const TaskForm = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('todo');
  const [description, setDescription] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') return;

    onTaskAdded({ title, description, status });
    setTitle('');
    setDescription('');
    setStatus('todo');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form p-4 rounded shadow-sm">
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

      <button type="submit" className="btn btn-jr w-100">
        ➕ Agregar tarea
      </button>
    </form>
  );
};

export default TaskForm;
