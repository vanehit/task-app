import React, { useContext } from "react";
import TaskItem from "../TaskItem/taskItem";
import TaskForm from "../TaskForm/taskForm";
import { TaskContext } from "../../context/TaskContext";

const TaskList = () => {
  const { tasks, addTask, deleteTask, editTask, moveTask } = useContext(TaskContext);

  const statusLabels = {
    todo: "Por hacer",
    doing: "En progreso",
    done: "Hechas",
  };

  return (
    <div className="container mt-5 task-board">
      <div className="row">
        {["todo", "doing", "done"].map((status) => (
          <div key={status} className="col-md-4">
            <h4 className="text-capitalize mb-3">{statusLabels[status]}</h4>

            {status === "todo" && <TaskForm onTaskAdded={addTask} />}

            {tasks[status].length === 0 ? (
              <p className="text-muted">No hay tareas en esta columna</p>
            ) : (
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
