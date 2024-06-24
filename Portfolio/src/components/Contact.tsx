import React from "react";


const Contact: React.FC = () => {
    const openLink = (url?: string) => {
        if (url) {
        window.open(url, "_blank", "noreferrer");
      }
      };

  return (
    <main className="bg-black">
    <div className="flex flex-col md:items-center justify-items-start text-white   ">

    <div className="flex flex-row ">
                <div className=" justify-items-stretch self-center text-2xl justify-start pt-2 pb-2 text-white">//find_Me</div>
                
                <div className="justify-self-stretch md:pl-[667px]">
                
                </div>
                
            </div> 
            <div className="grid items-center pt-5 -mt-10 px-4">
    <button className="btn btn-ghost mt-2 mb-6" onClick={() => openLink('https://www.linkedin.com/in/caseyp-dev')}><i className="text-7xl devicon-linkedin-plain-wordmark"></i> </button>
          
    <button className="btn btn-ghost mb-2 mt-2" onClick={() => openLink('https://github.com/APantslessMan')}><i className="text-5xl  -mt-4 pb-4 devicon-github-original-wordmark"></i> </button>
          
          </div>

    </div>
        
            
    </main>
  );
};

export default Contact;
