"use client";
import React from "react";
import Image from "next/image";

const About = () => {

    return(
        <div id="about" className="container ">
            <div>
        <section className="text-white mt-10 border border-[#33353F] ">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16xl:px-16 ">
                <Image src="/about-bg.png" alt="aboutMe"
                width={500}
                height={500}/>
                <div className="">
        <h1 className="text-4xl font-bold mb-4 ">ABOUT ME</h1>
        <p className="text-base lg:text-lg">As a dedicated 12th-grade student and passionate frontend developer, I am eager to leverage my skills in HTML, CSS, and TypeScript to contribute to innovative web development projects. Currently enhancing my expertise with Tailwind CSS and Next.js, I am committed to creating responsive and user-friendly interfaces. With a keen interest in AI, I aspire to integrate cutting-edge technologies into my work, aiming to deliver exceptional digital experiences. Seeking opportunities to grow and collaborate within a forward-thinking team.</p>
        <div className=" mt-8 flex flex-row">
            <span className="mr-3 text-xl font-bold hover:text-white text-[#ADB7BE] hover:border-b-2 border-purple-500">Skills
               <div className="text-sm font-medium mb-5 ">
                <li>HTML</li>
                <li>CSS</li>
                <li>TypeScript</li>
                    <li>C (Programming Lang)</li>
                    <li>Next.js</li>
                </div>
            </span>
            <span className="mr-3 text-xl font-bold hover:text-white text-[#ADB7BE] hover:border-b-2 border-purple-500">Education
            <div className="text-sm font-medium ">
                <li>Matriculation from TCF(Al-Muhaimin campus) with Science</li>
                <li>GIAIC Student (Artificial Intelligence, Web 3.0 & metaverse) <span className="text-purple-300">continue</span> </li>
                <li>Intermediate from Khursheed Govt. college with Pre-Engineering</li>
                <li>FAST'29 (BAI)<span className="text-purple-300">continue</span></li>
                </div>
            </span>
        </div>
        </div>

        </div>
        </section>
        </div>
        </div>
    )
}

export default About;
