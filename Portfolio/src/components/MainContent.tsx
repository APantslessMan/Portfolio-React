import React from "react";
import AnimateOnScroll from "./utils/AnimateOnScreen";

const MainContent: React.FC = () => {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <main className="bg-black">
      <div className="flex flex-col items-center justify-center px-4 pt-96 pb-64">
        <div className="max-w-[800px]">
          <AnimateOnScroll>
            <div className="text-left text-6xl pb-20 text-slate-400">//Projects</div>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-600 to-fuchsia-500 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="card lg:card-side bg-base-100 shadow-xl  animate-gradient border-slate-400">
                <figure>
                  <img src="./cottageshop.png" alt="Album" />
                </figure>
                <div className="card-body lg:rounded-r-2xl bg-black text-white">
                  <h2 className="card-title -m-2">CottageShop</h2>
                  <div className="divider -m-2 divider-neutral"></div>
                  <p className="">
                    ECommerce platform built from the ground up,<br /> using 
                    Python and Flask for the backend, React<br /> and MUI for 
                    the frontend, and Postgres for <br />the Database. Cottageshop
                    strives to be a fullyconfigurable commerce platform
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
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
