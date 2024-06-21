import React, { useState } from 'react';
import './styles/tailwind.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Toast from "./components/utils/toast"
import { LuCopy } from "react-icons/lu";
import { TbSlashes } from "react-icons/tb";
import { useRef } from 'react'
import About from "./components/About"
import Blog from "./components/Blog"
import Contact from "./components/Contact"

const App: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);
  const projectsRef = useRef<null | HTMLDivElement>(null);
  const aboutRef = useRef<null | HTMLDivElement>(null);
  const blogRef = useRef<null | HTMLDivElement>(null);
  const contactRef = useRef<null | HTMLDivElement>(null);

  const handleShowToast = () => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const elementPosition = ref.current.getBoundingClientRect().top + window.scrollY + 20;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
};

      return (
    <main className="bg-black">
    
      <div className="gradientbg-breathe h-dvh w-dvw   max-w-full md:w-dvw absolute top-0 left-0 bg-gradient-to-bl from-stone-700 to-35% to-stone-900">
        <div className="navbar bg-black justify-start ">
          <div className="flex-1">
            <span className="text-white text-3xl -pl-1 grow-0 flex-none"><TbSlashes /></span>
            <button className=" text-sm lg:text-2xl w-24 text-white hidden  mr-2 text-left lg:inline">Caseyp.ca</button>
            <span className="text-white text-3xl hidden lg:inline"><TbSlashes /></span>
            <a className="btn btn-ghost text-2xl font-normal w-20 text-white hidden pt-2 pl-2 -ml-2 mr-4 lg:inline" onClick={() => scrollToRef(projectsRef)}>Projects</a>
            <span className="text-white text-3xl hidden lg:inline"><TbSlashes /></span>
            <a className="btn btn-ghost text-2xl w-16  pt-2 pl-2 -ml-3 mr-4 font-normal text-white hidden  lg:inline" onClick={() => scrollToRef(aboutRef)}>About</a>
            <span className="text-white text-3xl hidden lg:inline"><TbSlashes /></span>
            <a className="btn btn-ghost text-2xl w-12 pt-2 pl-2 -ml-3 mr-4 font-normal text-white hidden lg:inline" onClick={() => scrollToRef(blogRef)}>Blog</a>
          </div>
          
            <details className="dropdown lg:hidden ">
              <summary role="button" className="btn bg-black border-none -ml-4 bg-opacity-20 text-2xl text-white ">Caseyp.ca</summary>
              <ul tabIndex={0} className="dropdown-content fixed  -ml-10 left-0 bg-black z-[1] menu  opacity-100 shadow-white">
                <li><a className="text-xl text-white block justify-left" href="#" onClick={() => scrollToRef(projectsRef)}>//Projects</a></li>
                <li><a className="text-xl text-white block justify-left" href="#" onClick={() => scrollToRef(aboutRef)}>//About</a></li>
                <li><a className="text-xl text-white block justify-left" href="#" onClick={() => scrollToRef(blogRef)}>//Blog</a></li>
              </ul>
            
            </details>
            <div className="space-between flex-grow"></div>
            <div className="flex-none">
              <a className="btn btn-ghost text-white se:text-lg md:text-1xl" onClick={handleShowToast}><LuCopy /> dev@caseyp.ca</a>
            </div>
          </div>
        {show && <Toast message="Email Copied to Clipboard" onClose={() => setShow(false)} />}
      <Header />
      <div ref={projectsRef}>
        <MainContent />
      
              </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={blogRef}>
        <Blog />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
    </main>
  );
};

export default App;