import React from 'react';
import { useState, useEffect } from "react";
import copyToClipboard from '../utils/copyToClipboard'; // Importa la función
import integratedProjects from '../utils/integratedProjects';
import SkillsSelector from '../components/SkillsSelector';

// Definición del componente funcional
const Resumes = () => {

  const [role, setRole] = useState("");
  const [profile, setProfile] = useState("");
  const [jobDescriptionSummary, setJobDescriptionSummary] = useState("");
  const [project1, setProject1] = useState("");
  const [project2, setProject2] = useState("");
  const [selectedSkills, setSelectedSkills] = useState("");
  const [skillsSelectorVisible, setSkillsSelectorVisible] = useState(false);
  const [showRealDates, setShowRealDates] = useState(false);
  

  //Todays date
  const today = new Date();
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const todaysDate = today.toLocaleDateString('en-US', options);

  //Selected button
  const handleClick = (event) => {
    event.target.classList.add("selected");
  };


  //Step 3: Selected skills
  const insertJobDescription = () => {
    const userInput = prompt("Insert job description summary");
    if (userInput !== null) {
        setJobDescriptionSummary(userInput);
    }
  }

  //Step 6: Selected skills
  const insertSelectedSkills = () => {
    const userInput = prompt("Selected skills");
    if (userInput !== null) {
        setSelectedSkills(userInput);
        setSkillsSelectorVisible(true);
    }
  }

  //Save skills from skill selector
  const handleSkillsSave = (updatedSkills) => {
    setSelectedSkills(updatedSkills); // Actualiza selectedSkills con los skills modificados
    setSkillsSelectorVisible(false); // Opcional, cerrar el selector después de guardar
  };

  //Insert projects
  const insertProject1 = () =>{
    const userInput = prompt("Selected skills");
    if (userInput !== null) {
        setProject1(userInput);
    }
  }

  const insertProject2 = () =>{
    const userInput = prompt("Selected skills");
    if (userInput !== null) {
        setProject2(userInput);
    }
  }

const initialSkills = `Design Systems
Visual Libraries
Reusable Components
Wireframes
Prototypes
Journey Maps
High-Fidelity Mocks
Accessibility
Customer-Centric Design
Collaboration
Cross-Functional Teams
User Testing
Client Feedback
Innovation
Holistic Product View
Component Libraries
User Experience
Visual Design
Interaction Design
Design Thinking
Usability
Scalability`.split("\n");


//Step 1 - Initial instrucions
const step1 = 
`-Te voy a pasar una job description
-Puede ser que te lo pase en este mensaje al principio o al final o en el siguiente mensaje
-No escribas nada sino te he pasado la job description
-Cuando ya tengas la job description hazme un resumen muy breve de la job description en ingles
-Quiero todo en bullets de máximo 150 caracteres cada uno
-Menciona el tipo de rol
-Lista los skills mencionados, no como enunciados sino como palabras
-Menciona las características principales o relevantes acerca de la job description
-No hagas comentarios, solo dame el resumen para solo copiar y pegar
-Menciona si es hibrido, remote o si es onsite, en que location
-Menciona el salario si se especifica
-Menciona el sector o industry si se especifica (government, finance, healthcare, education, etc).
-Menciona duración si se especifica
`;

//Step 4 - List skills
const step4 = 
`-De ese mismo job description hazme una lista de los skills mas relevantes para la posicion. Máximo 30
-No explicaciones, solo los skills por ejemplo: ux design, user research, react, node.js, etc.
-No omites ninguno skill
-No los agrupes asi: Design Tools (Figma, Sketch, Adobe XD), sino que cada skill separado por coma: Figma, Sketch, Adobe XD
-No en bullets, quiero un skill por cada linea, es decir, un salto de linea por cada skill
-No los repitas ni menciones los que sean muy parecidos

`;


//Step 9 - Request tailored projects
const getRoleInstruction = (role) => {
    if (role === "UX Designer") {
        return "Esta posición es para UX Designer, quita toda referencia o todo lo que tenga que ver con UI developer tanto en el role, overview y bullets y technologies.";
    } else if (role === "UX/UI Engineer") {
        return "Como esta posición es para UX/UI Engineer, mantén mi experiencia tanto de UI developer como de UX designer.";
    } else if (role === "UI Developer") {
        return "Esta posición es para UI Developer, quita toda referencia o todo lo que tenga que ver con UX designer tanto en el role, overview y bullets y technologies.";
    } else {
        return "Define correctamente el rol antes de continuar.";
    }
};

const requestTailoredProjects = (role) => { 
return`
-Te voy a pasar la descripción de dos de mis experiencias laborales a la que llamaremos "proyecto 1" y "proyecto 2"
-Te voy a pasar una lista de skills a la que llamaremos "skills seleccionados"
-Edita ambos "proyecto 1" y "proyecto 2" integrando de manera coherente y explícita los "skills seleccionados"
-Distribuye los skills seleccionados entre los dos proyectos según haga más sentido
-Asegúrate de mencionar todos los skills ya sea en un proyecto o en el otro, no omitas ninguno
-Puedes agregar nuevos bullets para integrar skills seleccionados
-Los bullets deben de tener máximo 200 caracteres, no más.
-${getRoleInstruction(role)}
-Formatéalo con las etiquetas HTML correspondientes
-Envuelve todo en un div con este CSS: Font family: Arial y font size 13px
-Reemplaza los guiones con <ul>
-Bold en los subtítulos de los bullets (lo primero hasta los dos puntos), el resto del bullet no bold
-Bold las etiquetas Company, Role, Duration, Location, Technologies 
-Entre las líneas de Company, Role y Duration, Location solo un <br>
-El párrafo del Overview debe de estar en un <p>
-Mantén la sección Technologies
-No hagas comentarios, solo dame la descripción editada para solo copiar y pegar
-Todo en fondo blanco y texto negro
-Reemplaza Project name: con Project #1: [nombre de proyecto]
-Ponle este CSS a Project name: color #006ec1, font size 16px, bold
-Divide ambos proyectos con un <hr>
-Respeta la estructura de Company: | Role: en una linea, y Duration: | Location: en la linea de abajo separados por un <br>
-Asegurate de que esten todas los skills seleccionados esten entre ambos proyectos, esto es muy importante, no omitas ninguno
-Dame la opción de Run HTML

Proyecto 1:
${project1}

Proyecto 2:
${project2}

Skills seleccionados:
${selectedSkills}
`;};

// STEP 10 - Request resume summary
const requestResumeSummary = 
`-Te voy a pasar la cronología de toda mi experiencia laboral, un resumen corto de cada experiencia
-Te voy a pasar tambien el summary de la job description
-Hazme un summary en ingles de mi experiencia ajustado a lo que sea relevante de la job description
-Que sea un solo parafo de 400 a 450 caracteres
-No resaltes nada en bold
-Este summary va a ir en la parte de arriba de resume
-Menciona mis 13 años de experiencia en IT y 6 años onsite en USA.
-No menciones mi titulo ejemplo: “UX designer”, porque ya va a estar mencionado en otra sección
-Aprovecha este párrafo para hablar solo de mi experiencia
-Menciona que algunas de las empresas para las que he trabajado son: Walmart, GE (General Electric), NYC Department of Buildings, USA Hockey.
-Menciona mis 3 años de liderazgo si es relevante para la job description
-Menciona mi experiencia en herramientas o tecnologías que tengan que ver con la job description
-Estos son los sectores en lo que he trabajado: Fintech, Retail, Corporate, Government, IT Security, Oil&Gas, Energy, Fintech, Startups, Legal, Sports. Menciona que he trabajado en sectores como… (y los 3 que tengan mas relación con la job description)

Cronologia:
Company: Walmart | Role: Senior UX Designer, Researcher & UI Developer
Duration: 12/2021 - 1/2025 | Location: Bentonville, AR
At Walmart, I contributed to key projects enhancing user experience and optimizing interfaces. From conducting in-depth research and designing high-fidelity prototypes to developing UI components, I led initiatives that improved user satisfaction by 30%, boosted productivity, and ensured accessibility compliance, driving a 25% increase in usability.

Company: NYC | Role: Senior UX Designer & UI Developer Jr.
Duration: 6/2020 - 10/2021 | Location: NYC (Remote)
Enhanced UI consistency and user experience for NYC's DOB and DCWP platforms, impacting thousands of users. Created high-fidelity mockups, interactive prototypes, and custom icons. Delivered responsive, pixel-perfect HTML/CSS templates. Implemented accessibility features and developed design guidelines, mentoring developers on best practices.

Company: Infosys | Role: Lead UX Designer & Lead UI Developer
Duration: 3/2019 - 5/2020 | Location: Raleigh, NC and Houston, TX
I led the redesign of a customer service portal for Schlumberger and an automation platform for Conduent, focusing on both UX design and UI development. My leadership in both projects resulted in a 30% improvement in user engagement, a 50% reduction in design revisions, and a 30% faster project delivery.

Company: USA Hockey | Role: UX Designer, Researcher & UI Developer Jr.
Duration: 11/2018 - 2/2019 | Location: Bentonville, AR
Led the redesign of the registration form for youth hockey classes, improving usability for users 50+ by 40%. Applied Design Thinking to create personas, wireframes, and prototypes, conducting A/B testing. Developed responsive HTML/CSS templates and ensured cross-browser compatibility, boosting engagement.

Company: AV Plus | Role: UX Designer, Branding Designer & UI Developer Jr.
Duration: 2/2017 - 10/2018 | Location: Aguascalientes, Mexico
Designed and developed web and mobile experiences for startup projects, leveraging branding to enhance recognition. Created wireframes, mockups, and prototypes to refine user flows. Built responsive interfaces with HTML, CSS, and JavaScript, optimized SEO, and integrated Google Maps, increasing client reach by 30% and driving higher sales.

Company: General Electric (GE) | Role: Lead UX Designer & Branding Designer
Duration: 2/2012 - 1/2017 | Location: Remote from Aguascalientes, Mexico
Optimized internal platforms at GE by leading UX/UI design and providing responsive HTML/CSS layouts. Enhanced efficiency by 30%, user satisfaction by 35%, and engagement by 40% through research-driven design, intuitive interfaces, and standardized systems. Collaborated with global teams using agile methodologies

Job description:
${jobDescriptionSummary}
`;

//Step 11 - Request tailored projects
const getEmail = (profile) => {
    if (profile === "Personal") {
        return "job.sayas@gmail.com";
    } else if (profile === "Integrass") {
        return "jobad.sayas@gmail.com";
    } else {
        return "";
    }
};

const getStructure = (role) => {
    if (role === "UX Designer") {
        return "<b>Skype:</b> jobad.sayas | <br><b>LinkedIn:</b> linkedin.com/in/jobadsayas | <b>Portfolio:</b> jobadsayas.com";
    } else if (role === "UI Developer" || role === "UX/UI Engineer") {
        return "<b>LinkedIn:</b> linkedin.com/in/jobadsayas | <br><b>Portfolio:</b> jobadsayas.com | <b>Github:</b> github.com/jobadsayas";
    } else {
        return "";
    }
};

const requestDocumentHeader = (role, profile) => { 
return `-Revisa la siguiente estructura html:
<div>
<h1>${role}</h1>
<p><b>Email:</b> ${getEmail(profile)} | <b>Phone:</b> 919 866 8974  | ${getStructure(role)} | <b>Location:</b> Bentonville, AR</p>
</div>

-Manten las etiquetas html actuales
-El email no lo hagas link sino que déjalo texto plano
-Tambien haz un link clickable de la url de Linked in, portfolio y GitHub (si está disponible)
-Ponle al <p> css font-size 13px
-a div envolvente ponle css font family Arial
-css
-Al <h1> ponle font size 20px y font regular, no bold
-A todos los links ponle el css color: #006ec1 y underline
-muestrame la opcion run HTML
-No me hagas toda una estructura <html><body>, solo a partir del div que te estoy proveyendo
-No hagas comentarios extras, solo dame el codigo
`;};

// STEP 12 - Request cover letter
const requestCoverLetter = 
`-Hazme una cover letter en ingles para la posicion de la job description
-Te voy a pasar nuevamente el resumen job description
-Te voy a pasar también 2 proyectos de mi experiencia laboral, menciona lo más relevante de dichos proyectos para la job description.
-Te voy a pasar tambien la lista de skills seleccionados, asegurate de integrarlos
-De 1800 a 2000 caracteres, asegúrate que no sean menos de 1800 ni más de 2000
-Empieza la carta con la fecha de hoy en este formato: February 28, 2025
-Tengo 13 años de experiencia en IT
-Mi nombre es Jobad Sayas
-Resalta en bold las palabras mas relevantes con <b>, pero no sobre cargas con muchas palabras en bold
-menciona el nombre de la empersa si esta disponible
-No pongas placeholders como [Company name], sino sabes algo no lo pongas, yo no voy a hacer adiciones
-No hagas comentarios, solo dame el cover letter para solo copiar y pegar
-No uses viñetas o bulletes porque ocupan mucho espacio, todo debe caber en 1 pagina de word. En vez de bullets mantenlo todo en parrafos
-Te voy a pasar una lista de links a mi portafolio para varias proyectos
-Si alguno de los dos proyectos que te comparto esta entre la lista de links, inserta el link
-Damelo en html, no empiezas con html, body, etc... solo agrupa todo en un div
-al div holder ponle family: Arial y font size 14.5px
-El link al portafolio debe de estar inline inmediatamente después de lo que menciones sobre el proyecto
-Si el link al portafolio tiene password mencionado en parentesis. Ejemplo: (Password: TemporalAccess)
-No pongas el link literal como https://jobadsayas.com/wsr a menos de que te lo especifique. Mejor integradlo de manera mas natural. Ejemplo: You can take a look to this project in this link (this link to be the clickable area)
-Dame la opcion de Run HTML

Lista de links al portafolio:
-Todos los proyectos de Walmart tienen la misma contraseña: TemporalAccess.
ReportHub: https://jobadsayas.com/walmart-report-hub (password: TemporalAccess.)
WSR: https://jobadsayas.com/wsr (password: TemporalAccess.)
IR Reports: https://jobadsayas.com/ir-reports (password: TemporalAccess.)
IBG: https://jobadsayas.com/ibg-telescope (password: TemporalAccess.)
CSP 2.0 https://jobadsayas.com/csp2
USA Hockey https://jobadsayas.com/usa-hockey

resumen de la job description:
${jobDescriptionSummary}

Proyecto 1:
${project1}

Proyecto 2:
${project2}

Skills seleccionados:
${selectedSkills}

`;

const skillsList = `Design Systems
Innovation
Holistic Product View
Component Libraries
User Experience
Design Thinking`;


  return (
  
    <div className="flex flex-col space-y-2">

        {skillsSelectorVisible && (
            <SkillsSelector 
                initialSkills={selectedSkills} 
                onSave={handleSkillsSave}
            />
        )}

        <div>

            <div className="section-label">
                <b>Step 1:</b> Initial instrucions
            </div>

            <div className='clickables-group'>

                <a
                    href="https://chat.deepseek.com/"
                    target="_blank"
                    className="clickable"
                    onClick={(event) => {
                        handleClick(event);
                    }}
                >
                    Open Deepseek
                </a>

                <span className="clickable"
                    onClick={(event) => {
                        handleClick(event);
                        copyToClipboard(step1);
                    }}
                >
                    Request job description summary
                </span>
            
            </div>

        </div>


        <div className="section-label">
            <b>Step 2:</b> Copy & paste job description
        </div>


        <div className="clickable"
            onClick={(event) => {
                handleClick(event);
                insertJobDescription();
            }}
        >
            <b>Step 3:</b> Insert job description summary
        </div>


        <div>
            <div className="section-label">
                <b>Step 4:</b> Skills list
            </div>
        
            <div className='clickables-group'>
                <div className="clickable"
                    onClick={(event) => {
                        handleClick(event);
                        copyToClipboard(step4);
                    }}
                >
                    Request skills list
                </div>


                    <div className="clickable"
                        onClick={(event) => {
                            handleClick(event);
                            insertSelectedSkills();
                        }}
                    >
                        Insert selected skills
                    </div>

                    <div className="clickable"
                        onClick={(event) => {
                            handleClick(event);
                            copyToClipboard(selectedSkills);
                        }}
                    >
                        List selected skills
                    </div>
            </div>
        </div>


        <div>
            <div className="section-label">
                <b>Step 5:</b> Select role
            </div>

            <div className='clickables-group'>

                <span className="clickable"
                    onClick={(event) => {
                        handleClick(event);
                        setRole("UX Designer");
                    }}
                >
                        UX Designer
                </span>

                <span className="clickable"
                    onClick={(event) => {
                        handleClick(event);
                        setRole("UX/UI Engineer");
                    }}
                >
                        UX/UI Engineer
                </span>

                <span className="clickable"
                    onClick={(event) => {
                        handleClick(event);
                        setRole("UI Developer");
                    }}
                >
                        UI Developer
                </span>

            </div>
        </div>


        <div>

            <div className="section-label">
                <b>Step 6:</b> Select projects
            </div>

            <div className='clickables-group'>
                {integratedProjects.map((project, index) => {
                    const startDate = showRealDates ? project.RstartDate : project.FstartDate;
                    const endDate = showRealDates ? project.RendDate : project.FendDate;
                    
                    return (
                        <div 
                            key={index}
                            className="clickable"
                            onClick={(event) => {
                                const projectInfo = `Project: ${project.project}
    Company: ${project.company} | Role: ${project.role}
    Duration: ${startDate} - ${endDate} | Location: ${project.location}
    Details:
    ${project.details}`;
                                copyToClipboard(projectInfo);
                                handleClick(event);
                            }}
                        >
                            {project.title}
                        </div>
                    );
                })}
            </div>

            <label>
                <input
                    className='ml-1 mt-2'
                    type="checkbox"
                    checked={showRealDates}
                    onChange={() => {setShowRealDates(prev => !prev);}}
                /> Show Real Dates
            </label>

        </div>


        <div className=''>

            <div className="section-label">
                <b>Step 7:</b> Tailor projects
            </div>

            <div className='clickables-group'>

                <div className="clickable"
                    onClick={(event) => {
                        handleClick(event);
                        insertProject1();
                    }}
                >
                        Insert project 1
                </div>

                <div className="clickable"
                    onClick={(event) => {
                        handleClick(event);
                        insertProject2();
                    }}
                >
                        Insert project 2
                </div>

                <div className="clickable"
                    onClick={(event) => {
                        handleClick(event);
                        copyToClipboard(requestTailoredProjects(role));
                    }}
                >
                    Request tailored projects
                </div>

                <a
                    href="https://docs.google.com/spreadsheets/d/1CBn_weoXBOIkTbRUH8DzZYjcG48kwigC7CJT7I5iIi0/edit?gid=996828623#gid=996828623"
                    target="_blank"
                    className="clickable"
                    onClick={(event) => {
                        handleClick(event);
                        copyToClipboard(selectedSkills);
                    }}
                >
                    Keyword reviewer
                </a>

            </div>
        </div>


        <div>
            <div className="section-label">
                <b>Step 8:</b> Ensamble Resume
            </div>

            <div className='clickables-group'>

                <a
                    href="https://docs.google.com/document/d/1mao6tkz191SEEsnNCs4Q6C2LgaZOdZAkrFIeuXoaKa4/edit?tab=t.0#heading=h.y477ijvclfzh"
                    target="_blank"
                    className="clickable"
                    onClick={(event) => {
                        handleClick(event);
                    }}
                >
                    Open resume template
                </a>
            
                <span className="clickable"
                    onClick={(event) => {
                        handleClick(event);
                        copyToClipboard(requestResumeSummary);
                    }}
                >
                    Request resume summary
                </span>
                
            </div>

        </div>


        <div>
            <div className="section-label">
                <b>Step 9:</b> Document header
            </div>

            <div className='clickables-group'>

                <span className="clickable"
                    onClick={(event) => {
                        handleClick(event);
                        setProfile("Personal");
                    }}
                >
                    Personal
                </span>

                <span className="clickable"
                    onClick={(event) => {
                        handleClick(event);
                        setProfile("Integrass");
                    }}
                >
                    Integrass
                </span>

                <span className="clickable"
                    onClick={(event) => {
                        handleClick(event);
                        copyToClipboard(requestDocumentHeader(role, profile));
                    }}
                >
                    Request document header
                </span>
                
            </div>

        </div>


        <div>

            <div className="section-label">
                <b>Step 10:</b> Cover letter
            </div>

            <div className='clickables-group'>

                <span className="clickable"
                    onClick={(event) => {
                        handleClick(event);
                        copyToClipboard(requestCoverLetter);
                    }}
                >
                    Request cover letter
                </span>

                <a
                    href="https://docs.google.com/document/d/1OUujo_ZVWQvbTTKSy10yWkxJ4AxM-EALtL6mMr8Z44M/edit?tab=t.0#heading=h.y477ijvclfzh"
                    target="_blank"
                    className="clickable"
                    onClick={(event) => {
                        handleClick(event);
                    }}
                >
                    Open Cover letter editor
                </a>
            
            </div>
        
        </div>

        
        <div>

            <div className="section-label">
                Other common resources
            </div>

            <div className='clickables-group'>

                <span className="clickable"
                    // onClick={() => insertProject1()}
                >
                        Headline
                </span>

                <span className="clickable"
                    // onClick={() => insertProject2()}
                >
                        Summary
                </span>

                <span className="clickable"
                    // onClick={() => insertProject2()}
                >
                        Answer question
                </span>

            </div>
        </div>
  
    </div>
  );    
};

export default Resumes;