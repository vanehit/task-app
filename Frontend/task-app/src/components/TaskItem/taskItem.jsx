import React, { useState } from "react";
import "../../styles/styles.scss";

// Recibimos por props: la tarea, y las funciones para eliminar, editar y moverla
const TaskItem = ({ task, onDelete, onEdit, onMove }) => {
  // Estado local para controlar si la tarea está en modo edición
  const [isEditing, setIsEditing] = useState(false);
   // Estados locales para editar el título y la descripción de la tarea
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description || '');

  // Definimos el orden de los estados posibles
  const statusOrder = ["todo", "doing", "done"];
  
  // Obtenemos el índice actual del estado de la tarea
  const currentIndex = statusOrder.indexOf(task.status);

  // Booleanos para saber si puede moverse hacia la izquierda o derecha
  const canMoveLeft = currentIndex > 0;
  const canMoveRight = currentIndex < statusOrder.length - 1;

  // Maneja la edición de la tarea: llama a la función del padre y cierra el modo edición
    const handleEdit = () => {
    onEdit(task.id, {
      title: editedTitle,
      description: editedDescription,
    });
    setIsEditing(false);
  };

  return (
    <div className={`task-card card shadow-sm mb-3 ${task.status === "done" ? "hecha" : "pendiente"}`}>
       <div className="card-body">
         {/* Si está en modo edición, mostramos inputs para editar */}
        {isEditing ? (
          <div className="d-flex flex-column gap-2">
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="form-control"
              placeholder="Editar título"
            />
            <textarea
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              className="form-control"
              placeholder="Editar descripción"
            ></textarea>
            <button onClick={handleEdit} className="btn btn-success btn-sm">
              Guardar
            </button>
          </div>
        ) : (
          <>
             {/* Título de la tarea */}
            <h5 className="card-title">{task.title}</h5>
            {/* Descripción de la tarea (solo si existe) */}
            {task.description && <p className="card-text">{task.description}</p>}
            {/* Estado de la tarea */}
            <p className="card-text estado">Estado: {task.status}</p>
            
            {/* btn para mover la tarea entre columnas */}
            <div className="d-flex gap-2 mb-2">
              {canMoveLeft && (
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => onMove(task.id, task.status, statusOrder[currentIndex - 1])}
                >
                  ⬅️
                </button>
              )}
              {canMoveRight && (
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => onMove(task.id, task.status, statusOrder[currentIndex + 1])}
                >
                  ➡️
                </button>
              )}
            </div>
             {/* btn para editar o eliminar la tarea */}
            <div className="d-flex gap-2">
              <button
                onClick={() => setIsEditing(true)}
                className="btn btn-outline-primary btn-sm"
              >
                Editar
              </button>
              <button
                onClick={() => onDelete(task.id)}
                className="btn btn-outline-danger btn-sm"
              >
                Eliminar
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskItem;
