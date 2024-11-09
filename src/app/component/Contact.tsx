"use client";
import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    <div id="contact" className="container">
      <div>
      <section>
        <div className="contact">
          <div className=" text-white">
            <h3 className="font-bold text-4xl m-3 text-start">Let's Conect</h3>
            <p className="text-start text-xl m-3">
              I'm currently looking for nw opportunities,my inbox is always
              open. I'll try my best to get back to you.{" "}
            </p>
            <p className="text-start text-xs m-3">
              My Email:{" "}
              <a href="mailto:toobailyas30@gmail.com">toobailyas30@gail.com</a>
            </p>
            <div className="socials flex flex-row gap-2 m-3">
              <Link href="https://github.com/Toobailyas" target="blank">
                <Image src={GithubIcon} alt="Github Icon" />
              </Link>
              <Link
                href="https://linkedin.com/in/tooba-ilyas-6277982b6"
                target="blank"
              >
                <Image src={LinkedinIcon} alt="Linkedin Icon" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Contact;
