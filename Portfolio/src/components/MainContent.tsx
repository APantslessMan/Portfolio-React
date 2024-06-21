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
    <div className="grid group relative grid-cols-12 -my-10 justify-items-center md:justify-items-start md:align-content-center ">
  
      <div className="col-span-12 mt-8 md:mt-0 md:col-span-5 text-white justify-self-start text-3xl md:self-center">
        {project.title}      
      </div>
      <div className="col-span-12 mt-2 mb-2 pl-4md:mt-0 md:col-span-4">
        <div className="image-conatiner mb-2 md:mb-0">
          <img className="rounded-2xl shadow-black shadow-md md:opacity-0 md:group-hover:opacity-100 md:group-hover:-rotate-6 
          md:transition-all md:ease-in-out md:delay-150 md:duration-1000 w-[307px] md:w-[277px] border-1 h-auto" 
          src={project.img} 
          alt="Album" />
           <div className=" md:hidden *:shadow-black *:shadow-sm flex gap-2 pt-4  pb-6 md:gap-2 self-end justify-self-start">
        {project.link1 && <button className="rounded hover:rounded-lg bg-stone-600 w-24 h-8 text-white mb-2"  onClick={() => openLink(project.link1)}>Live Site</button>  }
        {project.link2 && <button className="rounded hover:rounded-lg bg-stone-600 w-24 h-8 text-white mb-2" onClick={() => openLink(project.link2)}>Demo</button> }
        {project.link3 && <button className="rounded hover:rounded-lg bg-github w-24 h-8 text-white" onClick={() => openLink(project.link3)}><div className="flex justify-center text-center ">Github <span className="pl-1 pt-1"><GoTriangleDown /></span></div>
        </button> }
      </div>
        </div>
      </div>
      
      <div className="opacity-0 col-span-1  md:opacity-100 text-white text-1xl "></div>
      <div className="hidden *:shadow-black *:shadow-sm md:inline col-span-2 md:-ml-16 md:w-28 grid-rows-3 pb-10 md:gap-2 self-end justify-self-center">
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
        
            
    
      
          <div className="flex flex-col md:items-center justify-items-start   px-4 ">
          <AnimateOnScroll>
            <div className="flex flex-row ">
            <div className=" justify-items-stretch self-center mr-44 text-4xl justify-start pt-52 text-white"> //Projects</div>
            <div className="justify-self-stretch md:pl-[575px]"></div></div>
          </AnimateOnScroll>
          <AnimateOnScroll>
          {cardData.map((project, index) => (
        <ProjectCard key={index} project={project} openLink={openNewTab}/>
      ))}

          <div className="divider divider-neutral"></div>
          
          </AnimateOnScroll>
    
        {/* </div> */}
      </div>
    </main>
  );
};

export default MainContent;
