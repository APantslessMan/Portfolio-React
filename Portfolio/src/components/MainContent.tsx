import React from "react";
import AnimateOnScroll from "./utils/AnimateOnScreen";

import { GoTriangleDown } from "react-icons/go";

interface Project {
  title: string;
  desc?: string;
  img: string;
  link1?: string;
  link2?: string;
  link3?: string;
}

interface ProjectCardProps {
  project: Project;
  openLink: (url?: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, openLink }) => {
  return (
  <div>
    <div className="divider divider-neutral"></div>
    <div className="grid group relative grid-cols-12 -my-10 justify-items-start md:align-content-center ">
  
      <div className="col-span-12 mt-8 md:mt-0 md:col-span-5 text-white text-4xl md:self-center">
        {project.title}      
      </div>
      <div className="col-span-8 mt-2 md:mt-0 md:col-span-4">
        <div className="image-conatiner mb-10 md:mb-0">
          <img className="rounded-2xl md:opacity-0 md:group-hover:opacity-100 md:group-hover:-rotate-6 
          md:transition-all md:ease-in-out md:delay-150 md:duration-1000  w-[280px] border-2 h-auto" 
          src={project.img} 
          alt="Album" />
        </div>
      </div>
      
      <div className="opacity-0 col-span-1 md:opacity-100 text-white text-1xl"></div>
      <div className="col-span-2 md:-ml-16 md:w-28 grid-rows-3 pb-10 md:gap-2 self-end justify-self-center">
        {project.link1 && <button className="rounded hover:rounded-lg bg-stone-600 w-24 h-8 text-white mb-2"  onClick={() => openLink(project.link1)}>Live Site</button>  }
        {project.link2 && <button className="rounded hover:rounded-lg bg-stone-600 w-24 h-8 text-white mb-2" onClick={() => openLink(project.link2)}>Demo</button> }
        {project.link3 && <button className="rounded hover:rounded-lg bg-github w-24 h-8 text-white" onClick={() => openLink(project.link3)}><div className="flex justify-center text-center ">Github <span className="pl-1 pt-1"><GoTriangleDown /></span></div>
        </button> }
      </div>
</div>
    </div>
  
  );
};
const openNewTab = (url?: string) => {
  if (url) {
  window.open(url, "_blank", "noreferrer");
}
};

const MainContent: React.FC = () => {
 
  const cardData = [
{ "title": "CottageShop", "img": "./cottageshop.png", "desc": "", "link1": "https://littleacres.ca", "link2": "https://cottageshop.caseyp.ca", "link3": "https://github.com/APantslessMan/CottageShop"},
{ "title": "Portfolio", "img": "./portfolio.png", "desc": "", "link1": "https://caseyp.ca", "link2": "", "link3": "https://github.com/APantslessMan/Portfolio-React"}, 
]



  return (
    <main className="bg-stone-900">
        
            
    
      
          <div className="flex flex-col md:items-center justify-items-start   px-4 pb-64">
          <AnimateOnScroll>
            <div className="flex flex-row ">
            <div className=" justify-items-stretch self-center text-6xl justify-start pt-52 text-white"> //Projects</div>
            <div className="justify-self-stretch md:pl-[575px]"></div></div>
          </AnimateOnScroll>
        {/* <div className="max-w-[800px] justify-center"> */}
          
          <AnimateOnScroll>
          {cardData.map((project, index) => (
        <ProjectCard key={index} project={project} openLink={openNewTab}/>
      ))}

            
     
          <div className="divider divider-neutral"></div>
            {/* <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-600 to-fuchsia-500 rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="card lg:card-side bg-base-100 shadow-xl animate-gradient">
                <figure>
                  <img src="./cottageshop.png" alt="Album" />
                </figure>
                <div className="card-body lg:rounded-r-2xl bg-black text-white">
                  <h2 className="card-title -m-2">CottageShop</h2>
                  <div className="divider -m-2 divider-neutral"></div>
                  <p className="text-sm md:text-1xl">
                    ECommerce platform built from the ground up,<br /> using 
                    Python and Flask for the backend, React<br /> and MUI for 
                    the frontend, and Postgres for <br />the Database. Cottageshop
                    strives to be a fully configurable commerce platform
                  </p>
                  <div className="flex p-2 gap-2 *:h-12">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" alt="PostgreSQL" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" alt="Python" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" alt="Material UI" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" alt="React" />
                  </div>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={handleClick}>Real Use</button>
                    <button className="btn glass btn-primary">Demo</button>
                    <button className="btn glass btn-primary">Github</button>
                  </div>
                </div>
              </div>
            </div> */}
           
          </AnimateOnScroll>
    
        {/* </div> */}
      </div>
    </main>
  );
};

export default MainContent;
