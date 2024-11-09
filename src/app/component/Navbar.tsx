"use client";
import React from "react";
import Image from "next/image";

const Navbar = () => {
    return(
        <div >
            <nav className="bg-[#121212] lg:py-4 border border-[#33353F] text-white h-14.5 py-2 px-3 flex justify-between flex-wrap items-center  sm:h-14 md:h-16 lg:h-16">
                <div className="flex items-center mb-3">
                    <a href="#!">
                    <Image className="rounded-full h-10 w-10 " alt="logo" src="/logo.jpg" 
                    height={10}
                    width={10}/>
                </a>
                <p className="ml-3 text-xs mr-3">TOOBA ILYAS</p>
                </div>
                
                <div>
                    <ul className="flex space-x-9">
                        <li className="menuLink">
                            <a href="#hero" className="hover:text-purple-400">Home</a>
                        </li>
                        <li className="menuLink">
                        <a href="#contact"  className="hover:text-purple-400">Contact</a>
                        </li>
                        <li className="menuLink">
                        <a href="#about"  className="hover:text-purple-400">About</a>
                        </li>
                        <li className="menuLink">
                        <a href="#projectCard"  className="hover:text-purple-400">My Projects</a>
                            </li>
                    </ul>
                </div>
            </nav>

        </div>
    )

}

export default Navbar;