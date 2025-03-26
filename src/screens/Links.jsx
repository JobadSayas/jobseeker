import React from 'react';
import Content from '../components/Content';

// Definición del componente funcional
const Links = () => {

  //Selected button
  const handleClick = (event) => {
    event.target.classList.add("selected");
  };

  //Open Applying spcae
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
            <a
                href="https://www.linkedin.com/jobs/search/?alertAction=viewjobs&currentJobId=4174692078&distance=25&f_TPR=a1740950436-&f_WT=1%2C3%2C2&geoId=103644278&keywords=ux%20designer&origin=JOB_SEARCH_PAGE_JOB_FILTER&refresh=true&sortBy=DD&spellCorrectionEnabled=true"
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
            <a
                href="https://lensa.com/front-end-ui-developer-jobs-near-me-in-texas-city-tx/cpc-hl-v3/c9d4a0dbb7265ef8dd667039a963648b11e73b67e90e798120e788f6bfec0ace?tr=7e9d5b9fbbb3458aa329c4d57479833cincc1&utm_source=All+the+top+Bananas&utm_medium=cpc&utm_campaign=CaMO-CO-VP1_ABT_B&utm_content=378363"
                target="_blank"
                className="clickable"
                onClick={(event) => {
                    handleClick(event);
                }}
            >
                Lensa
            </a>
        </div>

        <h2 className='font-bold text-xl'>Company Carrers</h2>

        <div className='clickables-group'>
            <a
                href="https://careers.walmart.com/results?q=ux%20designer&page=1&sort=date&jobCity=Bentonville&jobState=AR&expand=department,brand,type,rate&jobCareerArea=all"
                target="_blank"
                className="clickable"
                onClick={(event) => {
                    handleClick(event);
                }}
            >
                Walmart
            </a>
            <a
                href="https://corporate.target.com/careers/job-search?currentPage=1&country=United%20States"
                target="_blank"
                className="clickable"
                onClick={(event) => {
                    handleClick(event);
                }}
            >
                Target
            </a>
            <a
                href="https://jobs.ford.com/careers?query=UI%2FUX%20Design&location=United%20States&pid=563568440116318&domain=ford.com&sort_by=relevance&triggerGoButton=false&triggerGoButton=true"
                target="_blank"
                className="clickable"
                onClick={(event) => {
                    handleClick(event);
                }}
            >
                Ford
            </a>
            <a
                href="https://jobs.grainger.com/search/?createNewAlert=false&q=ux+design&locationsearch="
                target="_blank"
                className="clickable"
                onClick={(event) => {
                    handleClick(event);
                }}
            >
                Grainger
            </a>
            <a
                href=""
                target="_blank"
                className="clickable"
                onClick={(event) => {
                    handleClick(event);
                }}
            >
                Insight Global
            </a>
            <a
                href="https://careers.homedepot.com/"
                target="_blank"
                className="clickable"
                onClick={(event) => {
                    handleClick(event);
                }}
            >
                Home Depot
            </a>
            <a
                href="https://jobs.careers.microsoft.com/global/en/search?q=ux%20designer&lc=United%20States&l=en_us&pg=1&pgSz=20&o=Relevance&flt=true"
                target="_blank"
                className="clickable"
                onClick={(event) => {
                    handleClick(event);
                }}
            >
                Microsoft
            </a>
            <a
                href="https://jobs.apple.com/en-us/search?search=ux%20designer&sort=relevance&location=united-states-USA"
                target="_blank"
                className="clickable"
                onClick={(event) => {
                    handleClick(event);
                }}
            >
                Apple
            </a>
            <a
                href="https://www.ibm.com/careers"
                target="_blank"
                className="clickable"
                onClick={(event) => {
                    handleClick(event);
                }}
            >
                IBM
            </a>
            <a
                href="https://www.costco.com/careers.html"
                target="_blank"
                className="clickable"
                onClick={(event) => {
                    handleClick(event);
                }}
            >
                Costco
            </a>
            <a
                href="https://www.amazon.jobs/en/search?offset=0&result_limit=10&sort=relevant&country%5B%5D=USA&distanceType=Mi&radius=24km&latitude=&longitude=&loc_group_id=&loc_query=&base_query=ux%20designer&city=&country=&region=&county=&query_options=&"
                target="_blank"
                className="clickable"
                onClick={(event) => {
                    handleClick(event);
                }}
            >
                Amazon
            </a>
            <a
                href="https://jobs.ebayinc.com/us/en/search-results?keywords=ux%20designer"
                target="_blank"
                className="clickable"
                onClick={(event) => {
                    handleClick(event);
                }}
            >
                Ebay
            </a>
        </div>
        
        <h2 className='font-bold text-xl'>Utilities</h2>

        <div className='clickables-group'>

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
                href="https://www.figma.com/design/514qmffqdT4yCkrDiJKkVz/Portfolio-Case-Studies?node-id=0-1&p=f&t=y4RDj5y3PYuOry4K-0"
                target="_blank"
                className="clickable"
                onClick={(event) => {
                    handleClick(event);
                }}
            >
                <i className="fa-solid fa-play"></i> Case studies
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


        <h2 className='font-bold text-xl'>Other</h2>

        <div className='clickables-group'>

            <a
                href="https://walmart.wd5.myworkdayjobs.com/en-US/WalmartExternal/userHome?clientRequestID=2a5932af6bde4661b3065964fdb7bd6d"
                target="_blank"
                className="clickable"
                onClick={(event) => {
                    handleClick(event);
                }}
            >
                <i className="fa-solid fa-key"></i> Keyword reviewer
            </a>

            <span
                className="clickable"
                onClick={(event) => {
                    handleClick(event);
                    applyingSpace();
                }}
            >
                <i className="fa-solid fa-window-restore"></i> Open applying space
            </span>

        </div>


    </div>

  );
};

export default Links;