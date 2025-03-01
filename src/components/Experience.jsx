import React from 'react';
import Content from './Content';
import copyToClipboard from '../utils/copyToClipboard';

// Definición del componente funcional
const Experience = ({title, project, role, company, location, FstartDate, FendDate, RstartDate, RendDate, details, tag}) => {

    const bundle = 
`Project name: ${project}
Company: ${company} | Role: ${role}
Duration: ${FstartDate} - ${FendDate} | Location: ${location}

Details: 
${details}
`;

  return (
    <div className='space-y-4'>

        <div className="flex justify-between">


            <div className='flex flex-row space-x-1 items-center'>
                <span className={`w-4 h-4 bg-${tag} rounded-full inline-block`}></span>
                <h1 className='text-2xl font-bold'>{project}</h1>
            </div>

            <div className='
                    py-1 px-2
                    rounded    
                    cursor-pointer
                    hover:bg-gray-100
                    transform
                    transition-transform
                    active:translate-y-0.5
                    active:bg-blue-100
                    transition-colors duration-3000' 
                onClick={() => copyToClipboard(bundle)}>
                <i className="fa-solid fa-copy mr-1"></i> 
                <span className='hidden md:inline-block'>Copy all</span>
            </div>
        
        </div>
        
        <div className="flex items-center space-x-4 overflow-x-auto">

            <Content 
                label="Job title/Role/Position" 
                content = {role}
            />
            <Content 
                label="Company" 
                content = {company}
            />
            <Content 
                label="Location" 
                content = {location}
            />
            <Content 
                label="Start date (F)" 
                content = {FstartDate}
            />
            <span>-</span>

            <Content 
                label="End date (F)" 
                content = {FendDate}
            />

            <span> | </span>

            <Content 
                label="Start date (R)" 
                content = {RstartDate}
            />
            <span>-</span>

            <Content 
                label="End date (R)" 
                content = {RendDate}
            />

        </div>
    
        <Content 
            label="Details" 
            content = {details}
            className = "max-h-[100px] overflow-hidden mb-5"
        />

        <hr/>

    </div>
  );
};

export default Experience;
