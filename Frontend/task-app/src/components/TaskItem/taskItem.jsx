import React, { useState } from "react";
import "../../styles/styles.scss";

const TaskItem = ({ task, onDelete, onEdit, onMove }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description || '');


  const statusOrder = ["todo", "doing", "done"];
  const currentIndex = statusOrder.indexOf(task.status);
  const canMoveLeft = currentIndex > 0;
  const canMoveRight = currentIndex < statusOrder.length - 1;

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
            <h5 className="card-title">{task.title}</h5>
            {task.description && <p className="card-text">{task.description}</p>}
            <p className="card-text estado">Estado: {task.status}</p>

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
