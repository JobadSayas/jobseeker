import React from 'react';
import Experience from '../components/Experience';
import XdUdProjects from '../utils/XdUdProjects';

// Definición del componente funcional
const UiDeveloper = () => {
  
  return (
    <div className='space-y-4 pb-[150px]'>

      {XdUdProjects.map((project, index) => (

        <Experience 
          key={index}
          title= {project.title}
          project= {project.project}
          tag = {project.tag}
          role = {project.role}
          company = {project.company}
          location = {project.location}
          FstartDate={project.FstartDate}
          FendDate={project.FendDate}
          RstartDate={project.RstartDate}
          RendDate={project.RendDate}
          details={project.details}
        />

      ))}

    </div>
  );
};

export default UiDeveloper;