import React from 'react';
import Content from '../components/Content';

// Definición del componente funcional
const Details = () => {
  return (

    <div className='space-y-2 pb-[150px]'>

        <div className='flex flex-row space-x-2 items-center'>
          <i className="text-2xl fa-solid fa-user"></i>  
          <h2 className='text-xl font-bold'>Personal</h2>
        </div>
        
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <Content 
            label="Full name" 
            content = 'Jobad Adbeel Sayas Hernandez'
          />
          <Content 
            label="Full First name" 
            content = 'Jobad Adbeel'
          />
          <Content 
            label="Full Last Name" 
            content = 'Sayas Hernandez'
          />
          <Content 
            label="First name" 
            content = 'Jobad'
          />
          <Content 
            label="Last Name" 
            content = 'Sayas'
          />
          <Content 
            label="DOB" 
            content = '10/6/1985'
          />
          <Content 
            label="SSN" 
            content = '4265'
          />
        </div>

        <hr/>

        <div className='flex flex-row space-x-2 items-center'>
          <i className="text-2xl fa-solid fa-location-dot"></i>
          <h2 className='text-xl font-bold'>Address</h2>
        </div>
        
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <Content 
            label="Address 1" 
            content = '5803 SW Parc st'
          />
          <Content 
            label="Address 2" 
            content = 'Apt 101'
          />
          <Content 
            label="City" 
            content = 'Bentonville'
          />
          <Content 
            label="State" 
            content = 'Arkansas'
          />
          <Content 
            label="Zip code" 
            content = '72713'
          />
          <Content 
            label="City & state" 
            content = 'Bentonville, AR'
          />
          <Content 
            label="Full Address" 
            content = '5803 SW Parc st, Apt 101, Bentonville, AR, 72713'
          />
        </div>

        <hr/>

        <div className='flex flex-row space-x-2 items-center'>
          <i className="text-2xl fa-solid fa-id-card"></i>
          <h2 className='text-xl font-bold'>Migration</h2>
        </div>
        
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <Content 
            label="Visa" 
            content = 'TN Visa'
          />
          <Content 
            label="Expiration" 
            content = '08/17/2025'
          />
          <Content 
            label="Passport" 
            content = 'G22881103'
          />
        </div>

        <hr/>

        <div className='flex flex-row space-x-2 items-center'>
            <i className="text-2xl fa-solid fa-mobile-screen-button"></i>
            <h2 className='text-xl font-bold'>Contact</h2>
        </div>
        
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <Content 
            label="Phone" 
            content = '919 866 8974'
          />
          <Content 
            label="Email Personal" 
            content = 'job.sayas@gmail.com'
          />
          <Content 
            label="Email Integrass" 
            content = 'jobad.sayas@gmail.com'
          />
          <Content 
            label="Skype" 
            content = 'jobad.sayas'
          />
        </div>

        <hr/>

        <div className='flex flex-row space-x-2 items-center'>
          <i className="text-2xl fa-solid fa-globe"></i>
          <h2 className='text-xl font-bold'>Web / Social</h2>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <Content 
            label="Linked in (simple)" 
            content = 'linkedin.com/in/jobadsayas'
          />
          <Content 
            label="Linked in https.wwww" 
            content = 'https://wwww.linkedin.com/in/jobadsayas'
          />
          <Content 
            label="Portfolio (simple)" 
            content = 'jobadsayas.com'
          />
          <Content 
            label="Portfolio (https)" 
            content = 'https://jobadsayas.com'
          />
          <Content 
            label=" Password" 
            content = 'SpecialAccess'
          />
          <Content 
            label=" Portfolio + Password" 
            content = 'jobadsayas.com (Pass: SpecialAccess)'
          />
          <Content 
            label=" Github (simple)"
            content = 'github.com/jobadsayas'
          />
          <Content 
            label=" Github (https)"
            content = 'https://github.com/jobadsayas'
          />
        </div>

        <hr/>

        <div className='flex flex-row space-x-2 items-center'>
          <i className="text-2xl fa-solid fa-graduation-cap"></i>
          <h2 className='text-xl font-bold'>Education</h2>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <Content 
            label="University" 
            content = 'UAA (Universidad Autonoma de Aguascalientes)'
          />
          <Content 
            label="Degree" 
            content = "Bachelor's"
          />
          <Content 
            label="Field" 
            content = 'Graphic Design'
          />
          <Content 
            label="Start year" 
            content = '2005'
          />
          <Content 
            label=" End year" 
            content = '2010'
          />
        </div>

        <hr/>

        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <Content 
            label="Certification" 
            content = 'Google UX Design Professional Certificate'
          />
          <Content 
            label="Year" 
            content = "2024"
          />
        </div>

        <hr/>

        <div className='flex flex-row space-x-2 items-center'>
          <i className="text-2xl fa-solid fa-pen-ruler"></i>
          <h2 className='text-xl font-bold'>Design Skills</h2>
        </div>
        
        <div className="clickables-group">
          <Content 
              content = 'UX Research'
          />
          <Content 
              content = 'Usability Testing'
          />
          <Content 
              content = 'Wireframing'
          />
          <Content 
              content = 'Mockups'
          />
          <Content 
              content = 'Visual Design'
          />
          <Content 
              content = 'Information Architecture'
          />
          <Content 
              content = 'Interaction Design'
          />
          <Content 
              content = 'Website Design'
          />
          <Content 
              content = 'Prototyping'
          />
          <Content 
              content = 'Accessibility'
          />
          <Content 
              content = 'Design Systems'
          />
          <Content 
              content = 'Iconography'
          />
          <Content 
              content = 'Branding'
          />
          <Content 
              content = 'User Flows'
          />
          <Content 
              content = 'User Journey Mapping'
          />
          <Content 
              content = 'Mobile-First Design'
          />
          <Content 
              content = 'Agile UX'
          />
          <Content 
              content = 'Figma'
          />
          <Content 
              content = 'Sketch app'
          />
          <Content 
              content = 'Adobe Creative Cloud'
          />
          <Content 
              content = 'Design thinking'
          />
        </div>

        <hr/>

        <div className='flex flex-row space-x-2 items-center'>
          <i className="text-2xl fa-solid fa-code"></i>
          <h2 className='text-xl font-bold'>Development Skills</h2>
        </div>
        
        <div className="clickables-group">
          <Content 
              content = 'HTML5'
          />
          <Content 
              content = 'CSS3'
          />
          <Content 
              content = 'Bootstrap'
          />
          <Content 
              content = 'Tailwind CSS'
          />
          <Content 
              content = 'SASS/LESS'
          />
          <Content 
              content = 'Mobile responsive'
          />
          <Content 
              content = 'JavaScript ES6'
          />
          <Content 
              content = 'React'
          />
          <Content 
              content = 'Redux'
          />
          <Content 
              content = 'Vue'
          />
          <Content 
              content = 'Node.js'
          />
          <Content 
              content = 'Express.js'
          />
          <Content 
              content = 'Angular'
          />
          <Content 
              content = 'jQuery'
          />
          <Content 
              content = 'PHP'
          />
          <Content 
              content = 'MySQL'
          />
          <Content 
              content = 'Cordova'
          />
          <Content 
              content = 'WordPress'
          />
          <Content 
              content = 'RESTful APIs'
          />
          <Content 
              content = 'Chart.js'
          />
          <Content 
              content = 'Git'
          />
          <Content 
              content = 'Webpack'
          />
          <Content 
              content = 'Cross-Browser'
          />
          <Content 
              content = 'Accessibility ARIA'
          />
          <Content 
              content = 'Unit Testing'
          />
          <Content 
              content = 'Jest'
          />
          <Content 
              content = 'React Testing Library'
          />
          <Content 
              content = 'Agile'
          />
        </div>

        <hr/>

        <div className='flex flex-row space-x-2 items-center'>
          <i className="text-2xl fa-solid fa-calendar-days"></i>
          <h2 className='text-xl font-bold'>Interviews</h2>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <Content 
            label = 'Time frame'
            content = 'Monday - Friday 9:00 am - 5:00 pm CST'
          />
        </div>

        <hr/>

        <div className='flex flex-row space-x-2 items-center'>
          <i className="text-2xl fa-solid fa-sack-dollar"></i>
          <h2 className='text-xl font-bold'>Salary</h2>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <Content 
            label = 'Annually'
            content = '125,000 anually'
          />
          <Content 
            label = 'Hourly'
            content = '60/hr'
          />
        </div>

        <hr/>

        <div className='flex flex-row space-x-2 items-center'>
          <i className="text-2xl fa-solid fa-comments-dollar"></i>
          <h2 className='text-xl font-bold'>Rate</h2>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-2">
<Content 
label="Check employer" 
content = {
`Check with my employer:
`}
/>
<Content 
label="George" 
content = {
`George Fernandez
407-550-7212
george@integrass.com`}
/>
<Content 
label="Alex" 
content = {
`Alex Smith
407-550-7236
alex@integrass.com`}
/>
<Content 
label="Sri" 
content = {
`Sri B
352-631-0798
srib@integrass.com`}
/>
        </div>

        <hr/>

        <div className='flex flex-row space-x-2 items-center'>
          <i className="text-2xl fa-solid fa-users"></i>
          <h2 className='text-xl font-bold'>References</h2>
        </div>

        <div className='grid grid-cols-4 gap-4'>
<Content 
label="Ditty" 
content = {
`Name: Ditty George
Role: Product Owner
Company: Infosys
Email: naveen_george@infosys.com
Phone: 832 212-5624`}
className='w-auto'
/>
<Content 
label="Sourabh" 
content = {
`Name: Sourabh Roy
Role: Account manager
Company: Infosys
Email: sourabh_roy@infosys.com
Phone: 510 833-1426`}
className='w-auto'
/>
<Content 
label="Ritesh" 
content = {
`Name: Ritesh Gupta
Role: Team lead
Company: Walmart
Email: ritesh.gupta@walmart.com
Phone: 312 375-1767
LinkedIn: linkedin.com/in/riteshguptaus24`}
className='w-auto'
/>
<Content 
label="Bob" 
content = {
`Name: Bob Kelley
Role: Team lead
Company: Walmart
Email: bob.kelley@walmart.com
Phone: 513 200-4657
LinkedIn: linkedin.com/in/bob-kelley-55958436`}
className='w-auto'
/>
        </div>

        <div className='grid grid-cols-4 gap-4'>
<Content 
label="Joshua" 
content = {
`Name: Joshua Rossicoe
Role: Product Owner
Company: Walmart
Email: joshua.rossicoe@walmart.com
Phone: 479 616-4993
LinkedIn: linkedin.com/in/joshua-rossicoe-928ab71b6`}
className='w-auto'
/>
<Content 
label="Maha" 
content = {
`Name: Mahalakshmi Ranganathan
Role: Product Owner
Company: Walmart
Email: mahalakshmi.ranganathan@walmart.com
Phone: 650-676-5330
LinkedIn: linkedin.com/in/mahar`}
className='w-auto'
/>
<Content 
label="Shailendra" 
content = {
`Name: Shailendra Saini
Role: Technical Manager
Company: Walmart
Email: shailendra.saini@walmart.com
Phone: 619 538-5477
Linkedin: linkedin.com/in/shailendra-saini`}
className='w-auto'
/>
<Content 
label="Baskar" 
content = {
`Name: Baskar Gopal
Role: UI lead
Company: Walmart
Email: baskar.gopal@walmart.com
Phone: 317 626-8056
Linkedin: linkedin.com/in/baskar-gopal-9872885`}
className='w-auto'
/>


        </div>

    </div>


  );
};

export default Details;