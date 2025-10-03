"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className={`flex flex-col m-2 rounded-[4px] border-4 border-[#202020] bg-orange-400 md:h-[14vh] ${isExpanded ? 'h-auto' : 'h-[16h]'} transition-all duration-500 ease-in-out overflow-hidden`}>
      <div className="flex flex-row w-full md:h-full h-[12vh]">
        <div className="navbar-start">
          <Link href="https://denverdelamasa.vercel.app" target="_blank">
            <div className="avatar">
              <div className="w-[8vh] m-4 rounded-full neo-brutalist">
                <img alt="avatar" src="/avatar.png" />
              </div>
            </div>
          </Link>
        </div>

        <div className="navbar-center hidden md:flex flex-row gap-8">
          <Link href="/">
            <div className="bg-orange-400 neo-brutalist py-2 px-4 text-white hover:text-black">
              <span className="text-xl">
                <i className="bi bi-house mr-2 my-auto"></i>
                Home
              </span>
            </div>
          </Link>
          <Link href="/blog">
            <div className="bg-orange-400 neo-brutalist py-2 px-4 text-white hover:text-black">
              <span className="text-xl">
                <i className="bi bi-newspaper mr-2 my-auto"></i>
                Blog
              </span>
            </div>
          </Link>
          <Link href="/#about">
            <div className="bg-orange-400 neo-brutalist py-2 px-4 text-white hover:text-black">
              <span className="text-xl">
                <i className="bi bi-info-circle mr-2 my-auto"></i>
                About
              </span>
            </div>
          </Link>
        </div>

        <div className="navbar-end flex items-center">
          <div className={`${isExpanded ? 'hidden' : 'block'} md:block`}>
            <Link href="https://github.com/denverdelamasa/blog" target="_blank">
              <div className="w-[8vh] h-[8vh] m-4 neo-brutalist bg-[#24292d] flex items-center justify-center">
                <i className="bi bi-github text-white text-[5vh]"></i>
              </div>
            </Link>
          </div>
          
          <button 
            className="md:hidden w-[8vh] h-[8vh] m-4 neo-brutalist bg-orange-400 flex items-center justify-center transition-all ease-out duration-300"
            onClick={toggleNavbar}
            aria-label="Toggle menu"
          >
            <i className={`bi ${isExpanded ? 'bi-x' : 'bi-list'} text-black text-[5vh] transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`}></i>
          </button>
        </div>
      </div>

      <div className={`md:hidden w-full transition-all duration-500 ease-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col items-center gap-4 pb-4">
          <Link 
            href="/" 
            className="w-full text-center transition-transform duration-300"
            onClick={() => setIsExpanded(false)}
          >
            <div className="bg-orange-400 neo-brutalist py-3 mx-4 text-white hover:text-black transform">
              <span className="text-xl">
                <i className="bi bi-house mr-2 my-auto"></i>
                Home
              </span>
            </div>
          </Link>
          <Link 
            href="/blog" 
            className="w-full text-center transition-transform duration-300"
            onClick={() => setIsExpanded(false)}
          >
            <div className="bg-orange-400 neo-brutalist py-3 mx-4 text-white hover:text-black transform">
              <span className="text-xl">
                <i className="bi bi-newspaper mr-2 my-auto"></i>
                Blog
              </span>
            </div>
          </Link>
          <Link 
            href="/#about" 
            className="w-full text-center transition-transform duration-300"
            onClick={() => setIsExpanded(false)}
          >
            <div className="bg-orange-400 neo-brutalist py-3 mx-4 text-white hover:text-black transform">
              <span className="text-xl">
                <i className="bi bi-info-circle mr-2 my-auto"></i>
                About
              </span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}