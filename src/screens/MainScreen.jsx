import React, { useState, useEffect } from 'react';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import UxDesigner from './UxDesigner';
import UxEngineer from './UxEngineer';
import Details from './Details';
import Texting from './Texting';
import Links from './Links';
import Resumes from './Resumes';
import USAmap from './USAmap';
import Tracker from './Tracker';
import Integrated from './Integrated';
import copyToClipboard from '../utils/copyToClipboard'; // Importa la función

// Definición del componente funcional
const MainScreen = () => {

    const version = "2.6"

    const [postitVisible, setPostitVisible] = useState(false);

  // Agregar event listener para detectar la tecla "K"
//   useEffect(() => {
//     const handleKeyPress = (event) => {
//         if (event.key.toLowerCase() === 'k') { // Detecta "K" (mayúscula o minúscula)
//           newRecruiter();
//         }
//         if (event.key.toLowerCase() === 'l') { // Detecta "L" (mayúscula o minúscula)
//           connectedRecruiter();
//         }
//       };

//     window.addEventListener('keydown', handleKeyPress);

//     // Cleanup al desmontar el componente
//     return () => {
//       window.removeEventListener('keydown', handleKeyPress);
//     };
//   }, []);

  return (
  <div className='relateive'>

    <TabGroup>
        <TabList className='sticky top-0 bg-white z-10 shadow-md'>

            <div className="px-4 pt-4 flex flex-row space-x-1 justify-between items-center relative">

                <h1 className='font-bold text-2xl'><i className="fa-solid fa-briefcase"></i> JobSeeker</h1>

                <div className=''>Version {version}</div>

                {/* <div className='
                    py-1 px-2
                    rounded    
                    cursor-pointer
                    hover:bg-gray-100
                    transform
                    transition-transform
                    active:translate-y-0.5
                    active:bg-blue-100
                    transition-colors duration-3000' 
                    onClick={() => copyToClipboard(emailText)}>
                    <i className="fa-solid fa-envelope mr-1"></i> 
                    <span className='hidden md:inline-block'>Emails</span>
                </div>

                |

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
                    onClick={() => newRecruiter()}
                >
                    <i className="fa-solid fa-headset mr-1"></i>
                    <span className='hidden md:inline-block'>New</span>
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
                    onClick={() => connectedRecruiter()}
                >
                    <i className="fa-solid fa-headset mr-1"></i>
                    <span className='hidden md:inline-block'>Connected</span>
                </div> */}

            </div>

            <Tab className="
                py-2 px-5
                border-b-4
                text-xs
                md:text-lg
                border-transparent
                hover:border-b-4 hover:border-blue-500
                data-[selected]:border-b-3 data-[selected]:border-blue-500
            ">Resumes</Tab>
            <Tab className="
                py-2 px-5
                border-b-4
                text-xs
                md:text-lg
                border-transparent
                hover:border-b-4 hover:border-blue-500
                data-[selected]:border-b-3 data-[selected]:border-blue-500
            ">Integrated</Tab>
            <Tab className="
                py-2 px-5
                border-b-4
                text-xs
                md:text-lg
                border-transparent
                hover:border-b-4 hover:border-blue-500
                data-[selected]:border-b-3 data-[selected]:border-blue-500
            ">UX designer</Tab>
            <Tab className="
                py-2 px-5
                border-b-4
                text-xs
                md:text-lg
                border-transparent
                hover:border-b-4 hover:border-blue-500
                data-[selected]:border-b-3 data-[selected]:border-blue-500
            ">UI dev. & UX des.</Tab>
            <Tab className="
                py-2 px-5
                border-b-4
                text-xs
                md:text-lg
                border-transparent
                hover:border-b-4 hover:border-blue-500
                data-[selected]:border-b-3 data-[selected]:border-blue-500
            ">Details</Tab>
            <Tab className="
                py-2 px-5
                border-b-4
                text-xs
                md:text-lg
                border-transparent
                hover:border-b-4 hover:border-blue-500
                data-[selected]:border-b-3 data-[selected]:border-blue-500
            ">Texting</Tab>
            <Tab className="
                py-2 px-5
                border-b-4
                text-xs
                md:text-lg
                border-transparent
                hover:border-b-4 hover:border-blue-500
                data-[selected]:border-b-3 data-[selected]:border-blue-500
            ">Links</Tab>
            <Tab className="
                py-2 px-5
                border-b-4
                text-xs
                md:text-lg
                border-transparent
                hover:border-b-4 hover:border-blue-500
                data-[selected]:border-b-3 data-[selected]:border-blue-500
            ">Tracker</Tab>
            <Tab className="
                py-2 px-5
                border-b-4
                text-xs
                md:text-lg
                border-transparent
                hover:border-b-4 hover:border-blue-500
                data-[selected]:border-b-3 data-[selected]:border-blue-500
            ">USA Map</Tab>
        </TabList>

        <TabPanels className="py-4 px-5">
            <TabPanel><Resumes/></TabPanel>
            <TabPanel><Integrated/></TabPanel>
            <TabPanel><UxDesigner/></TabPanel>
            <TabPanel><UxEngineer/></TabPanel>
            <TabPanel><Details/></TabPanel>
            <TabPanel><Texting/></TabPanel>
            <TabPanel><Links/></TabPanel>
            <TabPanel><Tracker/></TabPanel>
            <TabPanel><USAmap/></TabPanel>
        </TabPanels>
    </TabGroup>

    {postitVisible && (
        <div className='fixed bottom-2 right-2'>
            <i class="fa-solid fa-circle-xmark absolute top-[-13px] right-[-2px] text-[22px]"
                onClick={() => setPostitVisible(false)}
            ></i>
            <textarea className="bg-yellow-200 w-[400px] h-[300px] text-sm p-4 shadow-md shadow-gray-500"></textarea>
        </div>
    )}
    {!postitVisible && (
        <i className="fa-solid fa-note-sticky fa-rotate-180 fa-2x fixed bottom-4 right-4 text-yellow-500"
            onClick={() => setPostitVisible(true)}
        ></i>
    )}


  </div>);
};

export default MainScreen;


//Promps

const summaryText = 
`De este job description que te acabo de proporcionar arriba, dame un breve summary en listado de bullets de los skills principales y características de la posicion, que sea breve, no pongas explicaciones, quiero poder escanearlo rápidamente. Tambien no me agregues comentarios tuyos como “aqui esta el summary…” porque quiero poder copiar y pegar la lista.
Si menciona trabajo hibrido o que hay que estar ubicado en ciertos lugares, incluyelo en la lista
Tambien si especifican cuanto pagan
Tambien especifica si mencionan algún sector (government, finance, healthcare, education, etc)
Tambien incluye en la lista si dicen duración del trabajo

`;
  

const coverLetterText = 
`Hazme cover letter en ingles para esa posicion que te acabo de pasar. De 1800 a 2000 caracteres, resalta palabras claves en bold. Incluye mi nombre al final Jobad Sayas. Es muy importante que sea mínimo de 1800 caracteres y maximo 2000 caracteres, ni mas ni menos.
Tengo 13 años como ux designer
No quiero que andes poniendo eso de [Company name] o ese tipo de placeholders, si no sabes algo no lo pongas porque solo voy a copiar y pegar, no quiero hacer ninguna adicion mas
No uses viñetas porque ocupan mucho espacio, el objetio es que todo quepa en 1 hoja usa letter de word
Incluye links a mi portafolio segun los dos proyectos que te especifique y contraseña si es que incluye (todos los proyectos de Walmart tienen la misma contraseña: TemporalAccess). Te paso la lista de todos los links a los proyectos, pero incluye solo los que te mencione, solo te los doy todo para tu referencia:
ReportHub: https://jobadsayas.com/walmart-report-hub (password: TemporalAccess)
WSR: https://jobadsayas.com/wsr (password: TemporalAccess)
IR Reports: https://jobadsayas.com/ir-reports (password: TemporalAccess)
IBG: https://jobadsayas.com/ibg-telescope (password: TemporalAccess)
CSP 2.0 https://jobadsayas.com/csp2
USA Hockey https://jobadsayas.com/usa-hockey

Quiero que los links esten inline dentro del texto justo despues de mencionar el proyecto.

Quiero tambien que menciones mi experiencia en los siguientes 2 proyectos alineándolos con lo que es relevante segun la posicion que te acabo de compartir.

`;
  

const emailText = 
`dime si tengo que tomar alguna accion en los siguientes correos que me mandaron, solo revisalos y dime si tengo que hacer algo o si solo es informativo de que recibieron mi aplicaion. Son varios emails que me mandaron y te los voy a pasar uno por uno. Se breve no des muchas explicaiones, solo di "no necesitas tomar accion" o si hay alguna accion, dime cual es. Si dicen que no me escogieron solo di eso “no te escogieron”.
Esto es lo que espero que respondas:
-Recibieron tu aplicación
-No te seleccionaron
-o si piden que complete algo o tomar alguna accion di: “Necesitar tomar accion: ” y especifica cual
-O si se trata de otra cosa di en breve de que se trata (máximo un párrafo)`;

const capitalizeFirstLetter = (str) => {
    // Asegura que la cadena no esté vacía o sea nula
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const newRecruiter = () => {
    const recruiterName = prompt("New recruiter's name"); // Captura el nombre del reclutador

    // Verifica que se haya ingresado un nombre
    if (recruiterName) {
        const newRecruiterMessage = 
`Hi ${capitalizeFirstLetter(recruiterName)}, reaching out wondering if you have any position for UX designer
https://jobadsayas.com/resume
13 years of experience, 6 on the US. Worked for Walmart for past 4 years. Experienced in Figma, Mobile, AI, HTML&CSS
I can work both W2 with TN visa sponsorship or C2C with current employer`;

        copyToClipboard(newRecruiterMessage); // Copia el mensaje actualizado
        console.log(recruiterName);
    } else {
        console.log("No name entered");
    }
};


const connectedRecruiter = () => {
    const recruiterName = prompt("Connected recruiter's name"); // Captura el nombre del reclutador

    // Verifica que se haya ingresado un nombre
    if (recruiterName) {
        const connectedRecruiterMessage = 
`Hi ${capitalizeFirstLetter(recruiterName)}, I am UX designer & UI Developer. Reaching out wondering if by chance you have a position.

Find below a summary of my experience, a link to my portfolio and my latest resume attached.

13 years of experience as UX designer
7 years of experience as UI developing
6 years working onsite in the US
3 years of experience as team lead
Sectors: Finance, Retail, Corporate, Government, IT Security, Oil&Gas, Legal
Relevant clients: Walmart, NYC Department of Buildings, Schlumberger, General Electric, USA Hockey
Relevant skills: Figma, Mockups, Prototypes, User research, Usability testing, Accessibility, AI integration, Dashboards, Data visualization, Mobile design, Responsive design, HTML&CSS, JavaScript, React.js, Node.js, Restful API

I can work C2C though my employer but also open to W2 and direct hiring but would need TN visa sponsorship.

Portfolio: www.jobadsayas.com
Contact: 919-866-8974
Location: Bentonville, AR (open to relocation)

Thank you in advance and looking forward to hear back from you`;

        copyToClipboard(connectedRecruiterMessage); // Copia el mensaje actualizado
        console.log(recruiterName);
    } else {
        console.log("No name entered");
    }
};
