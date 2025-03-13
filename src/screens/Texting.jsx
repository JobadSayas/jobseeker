import React from 'react';
import LargeContent from '../components/LargeContent';
import copyToClipboard from '../utils/copyToClipboard'; // Importa la función


// Definición del componente funcional
const Responses = () => {

  
  return (

    <div className="clickables-group">

      <LargeContent 
        display="C2C or visa sponsorship"
        content="I can work C2C with my current employer, or also open to switch employers but would require visa sponsorship, would that work?"
      />

      <div className='clickable' onClick={() => interestedEmail()}>
          Interested email reply
      </div>

      <div className='clickable' onClick={() => newRecruiter()}>
          <i className="fa-solid fa-headset"></i> New recruiter
      </div>

      <div className='clickable' onClick={() => connectedRecruiter()}>
          <i className="fa-solid fa-headset"></i> Connected recruiter
      </div>

    </div>

  );
};

export default Responses;


const capitalizeFirstLetter = (str) => {
  // Asegura que la cadena no esté vacía o sea nula
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
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

const interestedEmail = () => {
  const recruiterName = prompt("New recruiter's name"); // Captura el nombre del reclutador

  // Verifica que se haya ingresado un nombre
  if (recruiterName) {
      const newRecruiterMessage = 
`Hi ${capitalizeFirstLetter(recruiterName)}, thank you for having me in consideration

Yes I am interested in this position, please find my resume attached and a link to my portfolio below.
www.jobadsayas.com

Let me know if you need anything else from my end to move forward
Regards
Jobad Sayas `;

      copyToClipboard(newRecruiterMessage); // Copia el mensaje actualizado
      console.log(recruiterName);
  } else {
      console.log("No name entered");
  }
};




