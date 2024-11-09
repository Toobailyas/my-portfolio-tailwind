import React from "react";
import Image from "next/image";

const ProjectCard = () =>{
    return (
        <div id="projectCard" className="container pt-32">
        <section className="font-bold w-53px text-4xl bg-opacity-15 rounded-lg bg-purple-500 text-white m-5 text-center">
            <h2 className="m-1">
            MY PROJECTS
        </h2>
        <div className="lg:flex justify-around gap-5 lg:justify-center p-10 rounded-lg bg-[#181818] text-white" >
            <div className="w-53px  border rounded-lg mt-5  hover:bg-[#c6aed6d0] hover:text-black transition-500">
            <a href="https://html-css-final-assignment-cpi8.vercel.app" target="blank">
            <div className="flex items-center flex-col">
                <Image src="/card/panacloud.jpeg" alt="Project Image" width={50} height={50} className="w-52 h-52 m-2 rounded-lg mt-4" />
                    <h3 className="font-bold mt-2  text-xl">Panacloud Website</h3>
                    <p className="  flex flex-wrap m-2 text-xs  mb-4 text-center ">
                        Clone of panaCloud Website using html & css
                    </p>
                    </div>
                
            </a>
            </div>
                 <div className="w-55px mt-5 border rounded-lg hover:bg-[#c6aed6d0] hover:text-black transition-500">
            <a href="https://resume-builder-hackathon-jmzk.vercel.app" target="blank">
            <div className="flex items-center flex-col">
                <Image src="/card/Dynamic-Resume.jpeg" alt="Project Image" height={50}
                width={50} className="w-52 h-52 m-2 rounded-lg mt-4" />
                    <h3 className="font-bold text-xl mt-2">Dynamic Resume Builder</h3>
                    <p className="  flex flex-wrap m-2 text-xs  mb-4 text-center ">
                    A Website where you can generate your Resume</p>
                    </div>
                
            </a>
            </div>
               <div className="w-55px mt-5 border rounded-lg hover:bg-[#c6aed6d0] hover:text-black transition-500">
            <a href="https://github.com/Toobailyas/Project-02.git" target="blank">
              <div className="flex items-center flex-col">
                <Image src="/card/num-game.PNG" alt="Project Image" width={50} height={50} className="w-52 h-52 m-2 rounded-lg mt-4" />
              <h3 className="font-bold text-xl mt-2 flex self-center items-center">Number Guessing Game</h3>
              <p className="  flex flex-wrap m-2 text-xs  mb-4 text-center ">A Fun CLI game using TypeScript</p>
        </div>
    
          </a>
             </div>

              <div className="w-55px  border mt-5 rounded-lg hover:bg-[#c6aed6d0] hover:text-black transition-500">
            <a href="https://github.com/Toobailyas/cli-simple-calculator.git" target="blank">
            <div className="flex items-center flex-col">
                <Image src="/card/cli-calculator.PNG" alt="Project Image" width={50} height={50} className="w-52 h-52 m-2 rounded-lg mt-4" />
                    <h3 className="font-bold text-xl mt-2">CLI Calculator</h3>
                    <p className="  flex flex-wrap m-2 text-xs  mb-4 text-center ">A CLI Calculator using TypeScript for basic operations</p>
                    </div>
                
            </a>
            </div>

            <div className="w-55px border mt-5 rounded-lg hover:bg-[#c6aed6d0] hover:text-black transition-500">
            <a href="https://milestone1and2-xi.vercel.app" target="blank">
            <div className="flex items-center flex-col">
                <Image src="/card/static-resume.png" alt="Project Image" width={50} height={50} className="w-52 h-52 m-2 rounded-lg mt-4" />
                    <h3 className="font-bold text-xl mt-2">Static Resume Project</h3>
                    <p className="  flex flex-wrap m-2 text-xs  mb-4 text-center " >My Static Resume Project using just html & CSS</p>
                    </div>
        
            </a>
            </div>
        </div>
        </section>
        </div>
    )
};

export default ProjectCard;