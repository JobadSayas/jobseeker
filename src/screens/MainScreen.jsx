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

    const version = "2.18"

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

                <div className='flex flex-row gap-2'>
                    <div className='rounded px-2 cursor-pointer hover:bg-gray-100 ' onClick={() => askQuestion()}>
                        <i className="fa-solid fa-circle-question"></i> Question
                    </div>
                    | 
                    <div className=''>Version {version}</div>
                </div>

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

                

                 */}

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

const emailText = 
`dime si tengo que tomar alguna accion en los siguientes correos que me mandaron, solo revisalos y dime si tengo que hacer algo o si solo es informativo de que recibieron mi aplicaion. Son varios emails que me mandaron y te los voy a pasar uno por uno. Se breve no des muchas explicaiones, solo di "no necesitas tomar accion" o si hay alguna accion, dime cual es. Si dicen que no me escogieron solo di eso “no te escogieron”.
Esto es lo que espero que respondas:
-Recibieron tu aplicación
-No te seleccionaron
-o si piden que complete algo o tomar alguna accion di: “Necesitar tomar accion: ” y especifica cual
-O si se trata de otra cosa di en breve de que se trata (máximo un párrafo)`;


const askQuestion = () => {
    const question = prompt("What's the question?"); // Captura el nombre del reclutador
  
    if (question) {
        const questionPrompt = 
  `Hi I am looking for a job, looking for ux designer, ux researchers, ui developer or frontend developers.
  As I talk to recruiters or go into job descriptions I find terms, technologies, acronyms or other kind of things I need to understand.
  I want you to explain me in a brief 300 maximum characters paragraph to have a quick idea of what this is about
  If I need more details I'll ask you
  Sometimes I'll just give you a word
  Sometimes I can ask you a complete question
  Please explain what is this word or answer the question according to the context of ux research or ui development
  
  The question is this below:
  ${question}
  
  `;
  
        copyToClipboard(questionPrompt); // Copia el mensaje actualizado
        // window.open("https://chat.deepseek.com/", "_blank");
        window.open("https://chatgpt.com/", "_blank");
  
    } else {
        console.log("No name entered");
    }
  };