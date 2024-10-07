"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export const BANNERS = [
  "/robotBanner.jpg",
  "/robotBanner2.jpeg",
  "/robotBanner3.jpg",
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Handle moving to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === BANNERS.length - 1 ? 0 : prev + 1));
  };

  // Handle moving to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? BANNERS.length - 1 : prev - 1));
  };

  // Automatically scroll to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  // Handle touch events for swipe detection
  const handleTouchStart = (e: any) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: any) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    
    // Minimum distance for swipe to be detected
    const minSwipeDistance = 50;
    
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }

    // Reset touch positions
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Function to scroll to the gallery section
  const scrollToGallery = () => {
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="w-full bg-gray-300 flex flex-col justify-center items-center relative overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="w-full h-[500px] md:h-[720px] relative">
        {/* Slider Container */}
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[300vw] h-full flex transition-transform duration-700"
        >
          {BANNERS.map((banner, index) => (
            <div key={index} className="w-screen h-full flex-shrink-0">
              <Image
                src={banner}
                alt={`Banner ${index + 1}`}
                width={1920}
                height={720}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Semi-Transparent Overlay */}
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

        {/* Banner Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center z-20 px-4 text-center">
          <h2 className="text-white text-3xl md:text-6xl font-vintage uppercase drop-shadow-lg">
            Crafting Art from Scrap
          </h2>
          <span className="text-white text-lg md:text-2xl font-vintage uppercase drop-shadow-lg">
            Innovative Sculptures Built with Passion and Precision
          </span>
          <button 
            onClick={scrollToGallery} 
            className="text-white mt-8 md:mt-20 border-white border-[2px] px-4 py-2 md:px-6 md:py-3 hover:bg-white hover:text-black font-vintage text-lg md:text-xl drop-shadow-lg"
          >
            EXPLORE NOW
          </button>
        </div>

        {/* Arrow Icons */}
        <div className="absolute hidden md:flex w-full justify-between items-center text-3xl md:text-5xl px-4 md:px-6 text-white z-30 top-1/2 transform -translate-y-1/2">
          <div
            onClick={prevSlide}
            className="w-10 h-10 border-[1px] rounded-md flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <MdKeyboardArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-10 h-10 border-[1px] rounded-md flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <MdKeyboardArrowRight />
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="absolute w-full left-0 right-0 mx-auto flex justify-center gap-4 bottom-10 z-30">
          {BANNERS.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                currentSlide === index ? "bg-gray-100" : "bg-gray-300"
              } hover:cursor-pointer duration-300`}
              onClick={() => setCurrentSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
