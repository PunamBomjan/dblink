// ui/AppHero.tsx
'use client';

import Image from 'next/image';
import Artist from '../../public/Artist.png';
import React, { useState, useEffect } from 'react'; 
import RegisterModal from './RegisterModal';
import ScrollReveal from 'scrollreveal'; // Import ScrollReveal

interface AppHeroProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  children?: React.ReactNode;
}

export const AppHero = ({ title, subtitle, children }: AppHeroProps) => {
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [bgColor, setBgColor] = useState('#131313'); // Initial background color

  // Setup ScrollReveal on mount
  useEffect(() => {
    // Initialize ScrollReveal
    const sr = ScrollReveal();

    // Reveal elements
    sr.reveal('.animate-slide-in-left', {
      origin: 'left',
      distance: '50px',
      duration: 1000,
      delay: 400,
      easing: 'ease-in-out',
      opacity: 0,
      scale: 0.9,
      reset: true, // Enable reset to animate again on scroll back
    });

    sr.reveal('.animate-slide-in-right', {
      origin: 'right',
      distance: '50px',
      duration: 1000,
      delay: 300,
      easing: 'ease-in-out',
      opacity: 0,
      scale: 0.9,
      reset: true, // Enable reset to animate again on scroll back
    });
  }, []);

  // Handle scroll event to change background color
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = scrollY / maxScroll;

      // Change background color based on scroll position (linear gradient)
      const newColor = `linear-gradient(rgba(50, 50, 50, 1),rgba(19, 19, 19, ${1 - scrollFraction}))`;
      setBgColor(newColor);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app-hero" style={{ background: bgColor }}> {/* Apply dynamic background */}
      {/* Title and Subtitle */}
      <div className="animate-slide-in-left">
        <h1 className="title">{title}</h1>
        <h2 className="subtitle">{subtitle}</h2>
        {children}
      </div>

      {/* Background Image and Content */}
      <div className="relative min-h-[80vh] flex items-center justify-center">
        <div className={`absolute lg:bottom-0 lg:right-0 bottom-1 lg:w-3/5 lg:h-4/5 animate-slide-in-right`}>
          <Image src={Artist} alt="Artists" className="w-full h-full object-contain" />
        </div>
        <div className={`absolute lg:top-20 lg:left-20 top-4 m-4 text-left text-yellow-500 animate-slide-in-left`}>
          <p className="text-4xl lg:text-5xl font-bold mb-4">"Create Your First Blink as an Artist"</p>
          <h2 className="lg:text-4xl text-2xl font-bold mb-4 ml-4">Create, Mint and Sell your NFT Tickets</h2>
          <p className="lg:text-lg mb-6 font-semibold ml-4">Join Blink and stay updated.</p>
          <div className="flex space-x-4 ml-6">
            <button
              className="px-4 py-2 bg-purple-700 rounded text-white lg:text-lg font-bold hover:bg-purple-500"
              onClick={() => setRegisterModalOpen(true)}
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 transform -rotate-90 text-xs text-yellow-500 hidden md:block">
          &copy; Scroll down
        </div>
      </div>

 
      {/* Register Modal */}
      <RegisterModal isOpen={isRegisterModalOpen} onClose={() => setRegisterModalOpen(false)} />
    </div>
  );
};
