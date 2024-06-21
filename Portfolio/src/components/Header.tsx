
import React from 'react';


const Header: React.FC = () => {
  const openLink = (url?: string) => {
    if (url) {
    window.open(url, "_blank", "noreferrer");
  }
  };

  return (
    
      
        
    <div className="flex flex-col items-center justify-center px-4 pb-44 pt-40 md:pt-0 mt-20 md:mt-64">
           <div className="x-[800px]">
            <h1 className="text-justify-center text-6xl  text-white font-medium md:text-9xl">
            <div className="">Casey <br />Petersen,</div><div className="text-4xl md:text-8xl">full stack developer</div>
          </h1>
          <div className="btn btn-outline btn-wide bg-opacity-0 no-animation border-dashed border-2 p-2 mt-4 text-white" onClick={() => openLink('./CaseyPetersen_CV_2024.pdf')}>Resume/CV</div>

          </div>
          </div>
          
      
  );
};

export default Header;
