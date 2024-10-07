"use client";

import { useState } from 'react'; // Import useState hook
import { CiMenuBurger } from "react-icons/ci";
import Image from 'next/image';

const Header = () => {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to scroll to the section smoothly
  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      // Scroll to top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Scroll to specific section
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false); // Close the menu after clicking
  };

  return (
    <header className="bg-darkBrown p-4 shadow-lg fixed w-full top-0 z-50">
      <div className="container max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Image src="/scrapFiguresLogo.svg" alt='Logo' width={150} height={60} className='w-34 md:w-60' />

        {/* Navigation Links (Hidden on mobile) */}
        <nav className="text-white font-vintage text-base hidden md:flex md:text-xl uppercase space-x-6">
          <button onClick={() => scrollToSection('home')} className='hover:scale-110 duration-300'>Home</button>
          {/* <button onClick={() => scrollToSection('shop')} className='hover:scale-110 duration-300'>Shop</button> */}
          <button onClick={() => scrollToSection('gallery')} className='hover:scale-110 duration-300'>Gallery</button>
          <button onClick={() => scrollToSection('about')} className='hover:scale-110 duration-300'>About</button>
          <button onClick={() => scrollToSection('contact')} className='hover:scale-110 duration-300'>Contact</button>
        </nav>

        {/* Burger Menu Icon (Visible on mobile) */}
        <div className='block md:hidden' onClick={toggleMenu}>
          <CiMenuBurger className="text-white text-3xl cursor-pointer" />
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col bg-darkBrown text-white font-vintage text-base uppercase p-4 space-y-4">
          <button onClick={() => scrollToSection('home')} className='hover:scale-110 duration-300'>Home</button>
          {/* <button onClick={() => scrollToSection('shop')} className='hover:scale-110 duration-300'>Shop</button> */}
          <button onClick={() => scrollToSection('gallery')} className='hover:scale-110 duration-300'>Gallery</button>
          <button onClick={() => scrollToSection('about')} className='hover:scale-110 duration-300'>About</button>
          <button onClick={() => scrollToSection('contact')} className='hover:scale-110 duration-300'>Contact</button>
        </div>
      )}
    </header>
  );
};

export default Header;
