
//vamos a guardar las tareas
let tasks = [];
//agregamos Id único para incrementar cada tarea
let currentId = 1;

//Devolvemos el array completo con todas las tareas.
//Sirve para listar todas las tareas.
export const getAllTasks = () => tasks;

//Recibe un Id.
//Busca en el array tasks la tarea cuyo id sea igual al que se pasó.
//Devuelve la tarea encontrada o undefined si no existe.
export const getTaskById = (id) => tasks.find(t => t.id === id);

export const createTask = ({ title, description }) => {
  const newTask = {
    id: currentId++,  // Asigna el Id actual y luego lo incrementa para la próxima tarea
    title,// Título de la tarea (obligatorio)
    description: description || "",// Descripción, si no se pasa se pone cadena vacía
    completed: false, // Estado inicial: no completada
  };
  tasks.push(newTask);// Agrega la tarea al array
  return newTask;// Devuelve la tarea creada
};

export const updateTask = (id, { title, description, completed }) => {
  const task = tasks.find(t => t.id === id);//Busca la tarea por id
  if (!task) return null;//Si no la encuentra devuelve null.

  if (title !== undefined) task.title = title//Si la encuentra, actualiza los campos que vienen en el segundo parámetro (pueden ser uno o varios).
  if (description !== undefined) task.description = description;
  if (completed !== undefined) task.completed = completed;//Devuelve la tarea actualizada.

  return task;
};

export const deleteTask = (id) => {
  const index = tasks.findIndex(t => t.id === id);//Busca el índice de la tarea con ese id.
  if (index === -1) return false;//Si no la encuentra devuelve false.
  tasks.splice(index, 1);//Si la encuentra, la elimina del array usando splice.
  return true;//Devuelve true para indicar que la eliminación fue exitosa.
};
