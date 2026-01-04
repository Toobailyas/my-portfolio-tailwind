"use client";
import React from 'react'

import Image from 'next/image'
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from 'next/link';

import { TypeAnimation } from 'react-type-animation';



const Hero = () => {
  return (
    <section className=' lg:h-96 mb-8 sm:h-60 md:h-70'>
        <div className='grid grid-cols-1 sm:grid-cols-12 mt-8 ml-9 mr-9'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>      
            
    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
       <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
         Hello, I'm {""}</span>
         <br></br>
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'TOOBA',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Frontend Developer',
        1000,
      ]}
      wrapper="span"
      speed={50}
     
      repeat={Infinity}
    />
         </h1>
    <p className='text-[#ccc8f3fb] text-base sm:text-lg mb-6 lg-text-xl'>A passionate Frontend Developer with expertise in HTML, CSS, TypeScript, and C. A programming enthusiast and FAST’29 BS AI student with a keen interest in AI and building intelligent, user-friendly web applications.
    </p>
    <div className="socials flex flex-row gap-2  mb-3">
          <Link href="https://github.com/Toobailyas" target='blank'>  
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://linkedin.com/in/tooba-ilyas-6277982b6" target='blank'>
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
    <div>
      <Link href="mailto:toobailyas30@gmail.com" target='blank'>
        <button className='px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-500  hover:bg-slate-200 text-white'>
            HIRE ME
        </button>
        </Link>
        <Link href="https://milestone1and2-xi.vercel.app" target="_blank">
        <button className='px-1 py-1 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-500 hover:bg-slate-800 text-white border mt-3'>
            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'> My Resume</span></button>
            </Link>
    </div>
    
    </div>
    <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
    <div className='rounded-full bg-[#4f4852d8] w-[250px] h-[250px] relative lg:w-[400px]h-[400px]'>
    <Image className='absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 '
     src='/profile-picture.png'
      alt='Hero Image'
      width={250}
      height={250} />
    </div>
    </div>
    </div>
    </section>

  )
}

export default Hero;
