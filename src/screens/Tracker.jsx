import React, { useState, useEffect } from "react";
import axios from "axios";

const Tracker = () => {
  const [totalProjects, setTotalProjects] = useState(0);
  const [projectsToday, setProjectsToday] = useState(0);

  // Función para obtener las cantidades de registros
  const fetchProjectCounts = async () => {
    try {
      const response = await axios.get("https://jobseeker.visssible.com/backend/tracker-count.php");
      if (response.data.success) {
        setTotalProjects(response.data.totalProjects); // Total de proyectos
        setProjectsToday(response.data.projectsToday); // Proyectos de hoy
      } else {
        console.error("Error al obtener los datos:", response.data.error);
      }
    } catch (error) {
      console.error("Error al acceder a la API:", error);
    }
  };

  // Función para agregar un nuevo registro
  const handleClick = async () => {
    try {
      const response = await axios.get("https://jobseeker.visssible.com/backend/tracker-insert.php");
      if (response.data.success) {
        // Después de insertar, actualizamos ambos contadores
        fetchProjectCounts(); // Vuelve a consultar las cantidades actualizadas de registros
        console.log("Registro agregado correctamente.");
      } else {
        console.log("Error al agregar el registro.");
      }
    } catch (error) {
      console.error("Error al acceder a la API:", error);
      console.log("Hubo un problema al conectar con la API.");
    }
  };

  // Cargar las cantidades de proyectos cuando la página se carga
  useEffect(() => {
    fetchProjectCounts();
  }, []); // El arreglo vacío asegura que solo se ejecute una vez al montar el componente

  return (
    <div className="flex flex-col space-y-3">
      {/* Mostrar el total de proyectos */}
      <label className="text-lg pl-1">
        <b>{totalProjects}</b> Total Projects
      </label>

      {/* Botón para agregar un nuevo registro y mostrar proyectos de hoy */}
      <span
        className="clickable"
        onClick={handleClick}
      >
        <b>{projectsToday}</b> Projects Today
      </span>
    </div>

  );
};

export default Tracker;
