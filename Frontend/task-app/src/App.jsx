import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskList from "./components/TaskList/taskList";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    // Usamos <Router> para manejar rutas con React Router
    <Router>
      {/* Componente navbar que se muestra en todas las rutas */}
      <Navbar />
      {/* Definimos las rutas de la app */}
      <Routes>
         {/* Ruta raíz ("/") que muestra el tablero de tareas */}
        <Route path="/" element={<TaskList />} />
      </Routes>
    </Router>
  );
};

export default App;
