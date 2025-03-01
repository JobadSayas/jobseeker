import React from 'react';
import Content from '../components/Content';

// Definición del componente funcional
const Links = () => {

  //Selected button
  const handleClick = (event) => {
    event.target.classList.add("selected");
  };

  return (

    <div className="flex flex-col space-y-2">

        <h2 className='font-bold text-xl'>Job boards</h2>

        <div className='clickables-group'>
            <a
                href="https://www.linkedin.com/jobs/search/?currentJobId=4145949601&f_WT=2&geoId=103644278&keywords=ux%20designer&origin=JOB_SEARCH_PAGE_SEARCH_BUTTON&refresh=true"
                target="_blank"
                className="clickable"
                onClick={(event) => {
                    handleClick(event);
                }}
            >
                Linkedin
            </a>
            <a
                href="https://www.indeed.com/jobs?q=ux+designer&l=&sc=0kf%3Aattr%28DSQF7%29%3B&sort=date&vjk=fa97663525ab5a46"
                target="_blank"
                className="clickable"
                onClick={(event) => {
                    handleClick(event);
                }}
            >
                indeed
            </a>
            <a
                href="https://www.dice.com/jobs?q=ux%20designer&location=USA&latitude=38.7945952&longitude=-106.5348379&countryCode=US&locationPrecision=Country&radius=30&radiusUnit=mi&page=1&pageSize=20&filters.postedDate=SEVEN&filters.workplaceTypes=Remote&language=en&utm_source=iterable&utm_medium=email&utm_campaign=9221420&utm_content=postapply180d_nowhiring&eid=8855"
                target="_blank"
                className="clickable"
                onClick={(event) => {
                    handleClick(event);
                }}
            >
                Dice
            </a>
            <a
                href="https://www.ziprecruiter.com/jobs-search?search=ux+designer&location=Remote+%28USA%29&days=10&refine_by_employment=employment_type%3Aall&refine_by_salary=&refine_by_salary_ceil=&lvk=Dj4UmsI1Mj2XAoDca7CGqw.--NitEdaK-R"
                target="_blank"
                className="clickable"
                onClick={(event) => {
                    handleClick(event);
                }}
            >
                ZipRecruiter
            </a>
            <a
                href="https://www.glassdoor.com/Job/remote-us-ux-designer-jobs-SRCH_IL.0,9_IS11047_KO10,21.htm?fromAge=14&remoteWorkType=1"
                target="_blank"
                className="clickable"
                onClick={(event) => {
                    handleClick(event);
                }}
            >
                Glassdoor
            </a>
        </div>
        
        <h2 className='font-bold text-xl'>Utilities</h2>

        <a
            href="https://countmytext.visssible.com/"
            target="_blank"
            className="clickable"
            onClick={(event) => {
                handleClick(event);
            }}
        >
            <i className="fa-solid fa-keyboard mr-1"></i> Count my text
        </a>

        <a
            href="https://drive.google.com/drive/u/0/folders/1zqk8NxrXcMSgwn39PZwuFZTJ9YHgNAJZ"
            target="_blank"
            className="clickable"
            onClick={(event) => {
                handleClick(event);
            }}
        >
            <i className="fa-solid fa-folder"></i> Resume folder
        </a>

        <a
            href="https://docs.google.com/spreadsheets/d/1CBn_weoXBOIkTbRUH8DzZYjcG48kwigC7CJT7I5iIi0/edit?gid=996828623#gid=996828623"
            target="_blank"
            className="clickable"
            onClick={(event) => {
                handleClick(event);
            }}
        >
            <i className="fa-solid fa-key"></i> Keyword reviewer
        </a>


    </div>

  );
};

export default Links;