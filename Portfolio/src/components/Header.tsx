
import React from 'react';


const Header: React.FC = () => {
  return (
    
      
        
    <div className="flex flex-col items-center justify-center px-4 mt-64">
           <div className="x-[800px]">
            <h1 className="text-justify-center text-6xl py-2 text-white font-medium dark:text-teal-400 md:text-8xl">
                       
            Casey<br />
            Petersen
          </h1>
          
            <span className="text-2xl md:text-3xl text-white ">Full Stack Developer, working with</span> <br />
            <span className="text-2xl md:text-4xl text-green-500">Python, </span>
            <span className="text-2xl md:text-4xl text-orange-500">HTML5, </span>
            <span className="text-2xl md:text-4xl text-teal-500">CSS, </span>
            <span className="text-2xl md:text-4xl text-yellow-500">JS, </span> <span className="text-white text-1xl md:text-3xl">and</span>
            <span className="bg-gradient-to-r font-bold from-cyan-500 to-fuchsia-500 text-transparent bg-clip-text animate-gradient text-2xl md:text-4xl "> React</span>
          

            
          </div>
          </div>
      
  );
};

export default Header;
