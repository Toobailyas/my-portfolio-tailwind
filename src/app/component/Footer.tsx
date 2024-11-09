import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border bg-[#181818] z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white h-50">
      <div className="container p-6 flex justify-between">
        <span className="flex gap-1"><Image className="rounded-full" width={30} height={30} src="/logo.jpg" alt="logo"/>
        <p>© 2024 Tooba Ilyas ---<a href="https://linkedin.com/in/tooba-ilyas-6277982b6" target="blank"> @Tooba Ilyas </a></p></span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;