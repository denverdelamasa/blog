'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => setIsExpanded((v) => !v);

  return (
    <nav className="flex flex-col m-2 rounded-[4px] border-4 border-[#202020] bg-orange-400 min-h-[64px] overflow-hidden">
      <div className="flex flex-row items-center justify-between w-full min-h-[64px]">
        {/* Logo/Avatar */}
        <Link href="https://denverdelamasa.vercel.app" target="_blank" className="flex items-center flex-shrink-0">
          <Image alt="avatar" src="/avatar.png" width={42} height={42} className="m-4 rounded-full neo-brutalist" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-row gap-4 flex-1 justify-center">
          <NavLink href="/" icon="bi-house" label="Home" />
          <NavLink href="/blog" icon="bi-newspaper" label="Blog" />
          <NavLink href="/#about" icon="bi-info-circle" label="About" />
        </div>

        {/* GitHub & Hamburger */}
        <div className="flex items-center gap-2 flex-shrink-0 m-4">
          <Link href="https://github.com/denverdelamasa/blog" target="_blank" className="flex">
            <div className="m-2 w-[42px] h-[42px] neo-brutalist bg-[#24292d] flex items-center justify-center">
              <i className="bi bi-github text-white text-xl"></i>
            </div>
          </Link>
          <button
            className="md:hidden w-[42px] h-[42px] m-2 neo-brutalist hover:bg-orange-500 bg-orange-400 flex items-center justify-center"
            onClick={toggleNavbar}
            aria-label="Toggle menu"
            aria-expanded={isExpanded}
            aria-controls="mobile-menu"
          >
            <i className={`bi ${isExpanded ? 'bi-x' : 'bi-list'} text-black text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown - No animations */}
      {isExpanded && (
        <div id="mobile-menu" className="md:hidden w-full">
          <div className="flex flex-col items-end gap-2 pb-4">
            <NavLink href="/" icon="bi-house" label="Home" onClick={() => setIsExpanded(false)} />
            <NavLink href="/blog" icon="bi-newspaper" label="Blog" onClick={() => setIsExpanded(false)} />
            <NavLink href="/#about" icon="bi-info-circle" label="About" onClick={() => setIsExpanded(false)} />
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, icon, label, onClick }: { href: string, icon: string, label: string, onClick?: () => void }) {
  return (
    <Link href={href} onClick={onClick} className="w-fit text-center max-w-[200px]">
      <div className="hover:bg-orange-500 bg-orange-400 neo-brutalist py-2 px-4 text-white hover:text-black flex items-center justify-center gap-2 mx-2">
        <i className={`bi ${icon}`}></i>
        <span className="text-lg">{label}</span>
      </div>
    </Link>
  );
}