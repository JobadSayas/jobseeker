import React, { useEffect, useState } from 'react';
import Content from '../components/Content';
import axios from 'axios';

// Definición del componente funcional
const Links = () => {

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    // Realizando la llamada a la API
    axios.get('https://jobseeker.visssible.com/backend/companies-consult.php')
      .then(response => {
        setCompanies(response.data);  // Asignando los datos a la variable de estado
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error fetching companies:', error);
      });
  }, []);

  // Función para manejar el click en los enlaces
  const handleClick = (event) => {
    event.target.classList.add("selected");
  };

  // Función para abrir todos los links de "applying space"
  const applyingSpace = () => {
    const links = [
      'https://chat.deepseek.com/',
      'https://chat.deepseek.com/',
      'https://chat.deepseek.com/',
      'https://chatgpt.com/?model=auto',
      'https://docs.google.com/document/d/1OUujo_ZVWQvbTTKSy10yWkxJ4AxM-EALtL6mMr8Z44M/edit?tab=t.0#heading=h.y477ijvclfzh',
      'https://docs.google.com/document/d/1mao6tkz191SEEsnNCs4Q6C2LgaZOdZAkrFIeuXoaKa4/edit?tab=t.0#heading=h.y477ijvclfzh',
      'https://docs.google.com/spreadsheets/d/1CBn_weoXBOIkTbRUH8DzZYjcG48kwigC7CJT7I5iIi0/edit?gid=996828623#gid=996828623',
      'https://countmytext.visssible.com/'
    ];
  
    links.forEach(link => window.open(link, '_blank'));
  };

  return (
    <div className="flex flex-col space-y-2">

      <h2 className='font-bold text-xl'>Job boards</h2>
      <div className='clickables-group'>
        <a href="https://www.linkedin.com/jobs/search/?alertAction=viewjobs&currentJobId=4174692078&distance=25&f_TPR=a1740950436-&f_WT=1%2C3%2C2&geoId=103644278&keywords=ux%20designer&origin=JOB_SEARCH_PAGE_JOB_FILTER&refresh=true&sortBy=DD&spellCorrectionEnabled=true" target="_blank" className="clickable" onClick={handleClick}>Linkedin</a>
        <a href="https://www.indeed.com/jobs?q=ux+designer&l=&sc=0kf%3Aattr%28DSQF7%29%3B&sort=date&vjk=fa97663525ab5a46" target="_blank" className="clickable" onClick={handleClick}>Indeed</a>
      </div>

      <h2 className='font-bold text-xl'>Company Careers</h2>
      <div className='clickables-group'>
        {companies.length > 0 ? (
          companies.map((company, index) => (
            <a
              key={index}
              href={company.url}
              target="_blank"
              className="clickable"
              onClick={handleClick}
            >
              {company.company}
            </a>
          ))
        ) : (
          <p>Loading companies...</p>
        )}

            {/* <div
              className="clickable"
            //   onClick={handleClick}
            >
              +
            </div> */}

      </div>

      <h2 className='font-bold text-xl'>Utilities</h2>
      <div className='clickables-group'>
        <a href="https://countmytext.visssible.com/" target="_blank" className="clickable" onClick={handleClick}><i className="fa-solid fa-keyboard mr-1"></i> Count my text</a>
        <a href="https://drive.google.com/drive/u/0/folders/1zqk8NxrXcMSgwn39PZwuFZTJ9YHgNAJZ" target="_blank" className="clickable" onClick={handleClick}><i className="fa-solid fa-folder"></i> Resume folder</a>
        <a href="https://www.figma.com/design/514qmffqdT4yCkrDiJKkVz/Portfolio-Case-Studies?node-id=0-1&p=f&t=y4RDj5y3PYuOry4K-0" target="_blank" className="clickable" onClick={handleClick}><i className="fa-solid fa-play"></i> Case studies</a>
        <a href="https://docs.google.com/spreadsheets/d/1CBn_weoXBOIkTbRUH8DzZYjcG48kwigC7CJT7I5iIi0/edit?gid=996828623#gid=996828623" target="_blank" className="clickable" onClick={handleClick}><i className="fa-solid fa-key"></i> Keyword reviewer</a>
      </div>

      <h2 className='font-bold text-xl'>Other</h2>
      <div className='clickables-group'>
        <a href="https://walmart.wd5.myworkdayjobs.com/en-US/WalmartExternal/userHome?clientRequestID=2a5932af6bde4661b3065964fdb7bd6d" target="_blank" className="clickable" onClick={handleClick}><i className="fa-solid fa-key"></i> Keyword reviewer</a>
        <span className="clickable" onClick={(event) => { handleClick(event); applyingSpace(); }}><i className="fa-solid fa-window-restore"></i> Open applying space</span>
      </div>

    </div>
  );
};

export default Links;
