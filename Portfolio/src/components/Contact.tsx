import React from "react";


const Contact: React.FC = () => {

  return (
    <main className="bg-black">
    <div className="flex flex-col md:items-center justify-items-start text-white   pb-64">

    <div className="flex flex-row ">
                <div className=" justify-items-stretch self-center text-3xl justify-start pt-5 text-white"> //Social</div>
                
                <div className="justify-self-stretch md:pl-[667px]">
                
                </div>
                
            </div> 
            <div className="flex items-center pt-5 gap-10 -mt-10 px-4">
    <button className="text-9xl devicon-linkedin-plain-wordmark mt-8 "></button>
          
    <button className="text-6xl  devicon-github-original-wordmark"></button>
          
          </div>

    </div>
        
            
    </main>
  );
};

export default Contact;
