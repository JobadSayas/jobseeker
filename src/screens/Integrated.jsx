import React from 'react';
import Experience from '../components/Experience';
import integratedProjects from '../utils/integratedProjects';

// Definición del componente funcional
const Integrated = () => {
  
  return (
    <div>
        <div className='space-y-4 pb-[150px]'>

          {integratedProjects.map((project, index) => (

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
  
    </div>
  );
};

export default Integrated;