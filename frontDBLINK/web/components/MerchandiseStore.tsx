"use client"; // Ensure this is present for Next.js

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ScrollReveal from 'scrollreveal';

interface MerchandiseItem {
  id: number;
  title: string;
  description: string;
  image: string;
  
}

const merchandiseData: MerchandiseItem[] = [
  {
    id: 1,
    title: 'Singer T-Shirt',
    description: 'High-quality cotton t-shirt featuring your favourite artist printout. Buy now and make your collections.',
    image: '/tshirt.jpg', // Add your image path
    
  },
  {
    id: 2,
    title: 'Posters',
    description: 'A stunning poster of the actor in their latest movies.',
    image: '/op.jpg', // Add your image path
    
  },
  {
    id: 3,
    title: 'Branded Shoes',
    description: 'Stylish and comfortable shoes perfect for any occasion.Style yourself with this brand shoes like your idols.',
    image: '/shoes.png', // Add your image path
   
  },
  {
    id: 4,
    title: 'Hoodies',
    description: 'Comfortable hoodie with different brands.Style yourself with stylish hoodie with comfort.',
    image: '/dance.jpg', // Add your image path
   
  },
];

const MerchandiseStore: React.FC = () => {
  const [bgColor, setBgColor] = useState('#000000'); // Initial background color
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const eventRefs = useRef<(HTMLDivElement | null)[]>(new Array(merchandiseData.length).fill(null));
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '30px',
      duration: 800, // Duration for each card animation
      easing: 'ease-in-out',
      reset: true,
    });

    // Reveal each merchandise item with increasing delay
    eventRefs.current.forEach((ref, index) => {
      if (ref) {
        sr.reveal(ref, { delay: (index + 1) * 300 }); // Increasing delay for each card
      }
    });

    // Animate heading and description
    if (headingRef.current) {
      sr.reveal(headingRef.current, { delay: 300, duration: 800 });
    }
    if (descriptionRef.current) {
      sr.reveal(descriptionRef.current, { delay: 500, duration: 800 });
    }
    if (buttonRef.current) {
      sr.reveal(buttonRef.current, { delay: 800, duration: 800 });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = scrollY / maxScroll;

      // Change background color based on scroll position (linear gradient)
      const newColor = `linear-gradient(rgba(104, 100, 100, 1), rgba(240, 240, 240, 1))`;
      setBgColor(newColor);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleViewClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div style={{ background: bgColor }} className="min-h-screen text-yellow-500 p-10 flex flex-col items-center">
      <h1
        ref={headingRef}
        className="text-5xl font-bold mb-4 text-center transition-all duration-160"
      >
        Merchandise Store
      </h1>
      <p
        ref={descriptionRef} // Attach ref to the description
        className="text-xl mb-14 text-center lg:w-5/6 text-yellow-500"
      >
        Explore exclusive merchandise from your favorite artist! Find unique items that celebrate their artistry and talent.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {merchandiseData.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => {
              eventRefs.current[index] = el;
            }} // Corrected ref callback
            className="bg-gray-900 text-yellow rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 max-w-xs mx-auto"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={300}
              className="rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p>{item.description}</p>
              
              <button
                className="mt-4 w-full bg-yellow-500 text-black px-4 py-2 rounded-md hover:bg-yellow-400 transition"
                onClick={() => handleViewClick(item.image)}
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 px-4 py-4">
          <div className="relative bg-white p-4 rounded-lg max-w-lg w-full">
            <button
              className="absolute top-2 right-2 text-yellow-500"
              onClick={handleCloseModal}
            >
              ✖
            </button>
            <Image
              src={selectedImage}
              alt="Enlarged view"
              width={800}
              height={600}
              className="rounded-lg  "
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MerchandiseStore;
