"use client";
import React from "react";
import Image from "next/image";

const About = () => {

    return(
        <div id="about" className="container">
  <div>
    <section className="text-white mt-10 border border-[#33353F]">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/about-bg.png"
          alt="aboutMe"
          width={500}
          height={500}
        />

        <div>
          <h1 className="text-4xl font-bold mb-4">ABOUT ME</h1>

          <p className="text-base lg:text-lg">
            I am a passionate frontend developer and undergraduate student of 
            Bachelor in Artificial Intelligence at FAST University. I enjoy 
            building responsive and user-friendly web applications using modern 
            technologies like HTML, CSS, JavaScript, TypeScript, Next.js, and 
            Tailwind CSS. Alongside web development, I have a strong interest in 
            artificial intelligence and emerging technologies. My goal is to 
            combine creative design with intelligent solutions to create impactful 
            digital experiences while continuously learning and growing as a developer.
          </p>

          <div className="mt-8 flex flex-row">
            <span className="mr-3 text-xl font-bold hover:text-white text-[#ADB7BE] hover:border-b-2 border-purple-500">
              Skills
              <div className="text-sm font-medium mb-5">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>C Programming</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
              </div>
            </span>

            <span className="mr-3 text-xl font-bold hover:text-white text-[#ADB7BE] hover:border-b-2 border-purple-500">
              Education
              <div className="text-sm font-medium">
                <li>Matriculation from TCF (Al-Muhaimin Campus) - Science</li>
                <li>Intermediate from Khursheed Govt. College - Pre-Engineering</li>
                <li>
                  GIAIC Student (Artificial Intelligence, Web 3.0 & Metaverse)
                  <span className="text-purple-300"> continue</span>
                </li>
                <li>
                  FAST University - BS Artificial Intelligence (BAI)
                  <span className="text-purple-300"> continue</span>
                </li>
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
