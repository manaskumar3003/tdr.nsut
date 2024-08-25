"use client";

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        if (nav) {
          setNav(false);
        }
        setAnimationClass('');
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [nav]);

  const handleNavToggle = () => {
    if (window.innerWidth < 768) {
      setAnimationClass(nav ? 'nav-menu-exit' : 'nav-menu');
    } else {
      setAnimationClass('');
    }
    setNav(!nav);
  };

  return (
    <nav>
      <div className="flex justify-between items-center bg-gray-100 h-16 px-4 sm:px-6 xl:px-8 nav">
        <a href="/" className="z-20">
          {/* <Logo className="w-16 h-16" /> */}
        </a>

        <div className="hidden text-l   md:flex md:items-center md:justify-center md:gap-8 font-medium text-gray-900">
          <a href="/"
            className="hover:scale-125 duration-200 hover:transform hover:origin-center">
            TDR
          </a>
          <a href="/team"
            className="hover:scale-125 duration-200 hover:transform hover:origin-center">
            Team
          </a>
         
          <a href="/event"
            className="hover:scale-125 duration-200 hover:transform hover:origin-center">
            Events
          </a>
          <a href="/blog"
            className="hover:scale-125 duration-200 hover:transform hover:origin-center">
            Sponsor
          </a>

        </div>

        <div
          onClick={handleNavToggle}
          className="cursor-pointer pr-4 -mt-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {(nav || animationClass === 'nav-menu-exit') && (
          <div
            className={`${animationClass} flex flex-col ps-6 pe-8 pt-16 py-4 gap-3 text-2xl w-full font-medium text-gray-900 absolute top-0 text-right right-0 
            bg-gradient-to-br from-white to-gray-50 transform`}
            onAnimationEnd={() => {
              if (animationClass === 'nav-menu-exit') {
                setAnimationClass('hidden');
              }
            }}
          >
            <a href="/" className="">Home</a>
            <a href="/team" className="">Team</a>
            <a href="/roadmap" className="">Roadmap</a>
            <a href="/event" className="">Events</a>
            <a href="/blog" className="">Blog</a>
          </div>
        )}
      </div>
    </nav>
  );
}