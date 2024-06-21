import React from "react";
import AnimateOnScroll from "./utils/AnimateOnScreen";

const Blog: React.FC = () => {

  return (
    <main className="bg-stone-900">
    
        
            
    
      
        <div className="flex flex-col md:items-center justify-items-start    pb-64">
            <AnimateOnScroll>
            <div className="flex flex-row ">
                <div className=" justify-items-stretch self-center text-4xl justify-start text-white">//Blog</div>
                
                <div className="justify-self-stretch md:pl-[800px]">
                
                </div>
                
            </div>
        
            
        </AnimateOnScroll>
        <div className="flex flex-col items-center justify-center  md:px-4 pb-32">
      <div className="divider  mx-6 pb-4 divider-neutral"></div>
        <div className="max-w-[800px]">
        {/* <AnimateOnScroll>
            <div className="text-left text-6xl pl-10 pb-20 text-white ">//About Me</div>
          </AnimateOnScroll> */}
  
            
        <AnimateOnScroll>
        <span className="text-white">Blog Posts Coming soon</span>
            </AnimateOnScroll>
 </div></div>
      </div>
    </main>
  );
};

export default Blog;
