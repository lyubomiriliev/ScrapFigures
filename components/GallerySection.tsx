"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export const IMAGES_URL = [
  '/robot1.jpg',
  '/robot2.jpg',
  '/robot3.jpg',
  '/robot4.jpg',
];

const GallerySection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to open the modal
  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to navigate to the next image
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGES_URL.length);
  };

  // Function to navigate to the previous image
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? IMAGES_URL.length - 1 : prevIndex - 1
    );
  };

  // Handle keyboard events for navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isModalOpen) return;

      if (event.key === 'ArrowRight') {
        handleNext();
      } else if (event.key === 'ArrowLeft') {
        handlePrev();
      } else if (event.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <section className="py-20 w-full flex flex-col justify-center items-center z-20 px-4">
      <div className="w-full flex flex-col justify-center items-center">
        <h2 className="text-4xl md:text-5xl font-vintage uppercase mb-10">Gallery</h2>
        <p className="w-full md:w-2/3 text-center mx-auto justify-center items-center mb-10 px-4">
        Explore our collection of one-of-a-kind sculptures, each forged from reclaimed car parts. From gears to chains, nuts to bearings – these discarded elements are transformed into stunning pieces of art. Every sculpture tells a story of reinvention and showcases the ingenuity of our craftsmanship.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {IMAGES_URL.map((img, index) => (
          <Image
            key={index}
            src={img}
            width={300}
            height={300}
            alt={`Image ${index + 1}`}
            className="w-full h-64 md:w-72 md:h-72 object-cover cursor-pointer"
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-full max-h-full overflow-hidden">
            <Image
              src={IMAGES_URL[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              width={800}
              height={800}
              className="w-auto h-[80vh] object-contain"
            />
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl font-bold"
            >
              &times;
            </button>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 text-white text-5xl"
          >
            &#8592;
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 text-white text-5xl"
          >
            &#8594;
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
