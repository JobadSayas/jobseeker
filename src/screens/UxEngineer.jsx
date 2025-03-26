import React, { useState } from "react";
import Experience from "../components/Experience";
import XdUdProjects from "../utils/XdUdProjects";

// Definición del componente funcional
const UxEngineer = () => {
  const [showRealDates, setShowRealDates] = useState(true);

  return (
    <div className="space-y-4 pb-[150px]">
      <label>
        <input
          className="ml-1 mt-2"
          type="checkbox"
          checked={showRealDates}
          onChange={() => setShowRealDates((prev) => !prev)}
        />{" "}
        Real Dates
      </label>

      {XdUdProjects.map((project, index) => {
        const startDate = showRealDates ? project.RstartDate : project.FstartDate;
        const endDate = showRealDates ? project.RendDate : project.FendDate;

        return (
          <Experience
            key={index}
            title={project.title}
            project={project.project}
            tag={project.tag}
            role={project.role}
            company={project.company}
            location={project.location}
            startDate={startDate}
            endDate={endDate}
            details={project.details}
          />
        );
      })}
    </div>
  );
};

export default UxEngineer;