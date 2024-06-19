import React from "react";
import AnimateOnScroll from "./utils/AnimateOnScreen";

const About: React.FC = () => {

  return (
    <main className="bg-stone-900">
    
        
            
    
      
        <div className="flex flex-col md:items-center justify-items-start  border-none px-4 pb-48">
            <AnimateOnScroll>
            <div className="flex flex-row ">
                <div className=" justify-items-stretch self-center text-6xl justify-start pt-52 text-white"> //About_me</div>
                
                <div className="justify-self-stretch md:pl-[515px]">
                
                </div>
                
            </div>
            <div className="divider divider-neutral"></div>
        </AnimateOnScroll>
        {/* <AnimateOnScroll>
            <div className="text-left text-6xl pl-10 pb-20 text-white ">//About Me</div>
          </AnimateOnScroll> */}
      <div className="flex flex-col items-center pt-5 px-4 pb-32">
        <div className="max-w-[800px]">
        <AnimateOnScroll>
        <div className="text-5xl text-white self-center">Technologies</div>
        <div className="divider divider-neutral"></div>
        <div className="flex p-2 flex-wrap gap-2 *:h-16 mb-10 rounded-lg shadow-black shadow-xl bg-stone-600">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" alt="PostgreSQL" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" alt="Python" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" alt="Material UI" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" alt="React" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-plain.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                  </div>
                  <div className="divider divider-neutral"></div>
            </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="text-5xl text-white self-center pb-14">Who is Casey?</div>
            </AnimateOnScroll><AnimateOnScroll>
            <div className="divider divider-neutral -mt-5 pb-10"></div>
            </AnimateOnScroll><AnimateOnScroll>
            <div className="div grid grid-cols-3">
                <div className="w-auto bg-stone-700 z-0  -mr-20 -mb-10 -mt-10 rounded-lg shadow-black shadow-xl"></div>
                <div className="bg-stone-800 text-lg z-10  mr-1 -ml-20 md:-ml-0 bg-opacity-95 font-light p-2 rounded-lg shadow-black shadow-xl col-span-2 text-gray-400">
                    Hello! 
                    <br /><br />I'm Casey Petersen, a
                    <b className="font-bold text-white"> Full Stack Developer </b> 
                    With a rich background in both <b className="font-bold text-white">technology</b> and Construction. My journey in tech 
                    began in 1985, sparking a lifelong passion that led me to turn a hobby into a career.
                    <br /><br />With over 20 years in the building trades, I gained valuable experience and <b className="font-bold text-white">leadership</b> 
                    skills in pipeline construction, eventually leading a facing crew. This role required overseeing a team under tight schedules and adverse 
                    conditions, ensuring each project met the <b className="font-bold text-white">highest standards of precision and excellence</b>. 
                    It also honed my <b className="font-bold text-white">problem-solving</b> abilities and <b className="font-bold text-white">
                    attention to detail</b>, as well as my ability to work under pressure. (Dun dun dun da-da-dun dun)
                    <br /><br />In 2023, I seamlessly transitioned these skills into a career in software development. As a Full Stack Developer, 
                    I now focus on creating dynamic, user-friendly web applications. <br /><br />Who knew that years of wrangling pipelines would 
                    translate so well into wrangling code into a <b className="font-bold text-white">CI/CD pipeline</b>?
                    <br /><br />When I'm not coding, you'll find me tinkering with my home server and synthesizers, learning 
                    a new technology, or baking something delicious. I thrive on solving challenges, improving my knowledge 
                    and contributing to impactful projects, always with a positive attitude and a humble spirit.
                    <br /><br />Thank you for visiting my site. Let's build something amazing together!

              </div>
              </div>
              
          </AnimateOnScroll>
          </div></div>
      </div>
    </main>
  );
};

export default About;
