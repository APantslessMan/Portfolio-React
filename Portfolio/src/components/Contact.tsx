import React from "react";


const Contact: React.FC = () => {

  return (
    <main className="bg-black">
    <div className="flex flex-col md:items-center justify-items-start text-white   ">

    <div className="flex flex-row ">
                <div className=" justify-items-stretch self-center text-2xl justify-start pt-2 pb-2 text-white">//find_Me</div>
                
                <div className="justify-self-stretch md:pl-[667px]">
                
                </div>
                
            </div> 
            <div className="grid items-center pt-5 -mt-10 px-4">
    <button className="text-7xl devicon-linkedin-plain-wordmark "></button>
          
    <button className="text-5xl  -mt-4 pb-4 devicon-github-original-wordmark"></button>
          
          </div>

    </div>
        
            
    </main>
  );
};

export default Contact;
