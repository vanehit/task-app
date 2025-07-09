import React, { useContext } from "react";
import TaskItem from "../TaskItem/taskItem";
import TaskForm from "../TaskForm/taskForm";
import { TaskContext } from "../../context/TaskContext";

// Componente que representa la lista completa de tareas, divididas en columnas
const TaskList = () => {
  // Usamos el contexto para acceder al estado global de tareas y las funciones asociadas
  const { tasks, addTask, deleteTask, editTask, moveTask } = useContext(TaskContext);
  // Diccionario para mostrar etiquetas en vez de los estados internos
  const statusLabels = {
    todo: "Por hacer",
    doing: "En progreso",
    done: "Hechas",
  };

  return (
    <div className="container mt-5 task-board">
      <div className="row">
        {/* Recorremos cada estado ('todo', 'doing', 'done') y renderizamos una columna por cada uno */}
        {["todo", "doing", "done"].map((status) => (
          <div key={status} className="col-md-4">
             {/* Título de la columna */}
            <h4 className="text-capitalize mb-3">{statusLabels[status]}</h4>
            {/* Solo en la columna "todo" se muestra el formulario para agregar nuevas tareas */}
            {status === "todo" && <TaskForm onTaskAdded={addTask} />}
            {/* Si no hay tareas en esta columna, mostramos el mensaje no hay tareas */}
            {tasks[status].length === 0 ? (
              <p className="text-muted">No hay tareas en esta columna</p>
            ) : (
               // Si hay tareas, las recorremos y mostramos cada una con TaskItem
              tasks[status].map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onDelete={deleteTask}
                  onEdit={editTask}
                  onMove={moveTask}
                />
              ))
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
