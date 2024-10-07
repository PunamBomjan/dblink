import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';

const Background: React.FC = () => {
  const [darken, setDarken] = useState(false);
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(0); // Initialize opacity state

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Change the darken state based on scroll position
      setDarken(scrollY > 50);

      // Adjust text scale based on scroll position
      const newScale = Math.max(1 - scrollY / 500, 0.8); // Zoom out effect for text
      setScale(newScale);

      // Change text opacity based on scroll position
      const newOpacity = Math.min(scrollY / 300, 1); // Adjust the divisor for opacity transition speed
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Initialize ScrollReveal for the welcome message (optional)
    ScrollReveal().reveal('.welcome-message', {
      duration: 1000,
      distance: '50px',
      origin: 'bottom',
      opacity: 0,
      scale: 0.9,
    });
  }, []);

  return (
    <div
      className={`min-h-screen bg-cover bg-center transition duration-300`}
      style={{ backgroundImage: `url('/ticket.jpg')` }}
    >
      {/* Overlay for darkening/lightening effect */}
      <div
        className={`absolute inset-0 transition-opacity duration-300`}
        style={{
          backgroundColor: darken ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.2)', // Change opacity based on scroll position
        }}
      />
      <div className="flex items-center justify-center min-h-screen relative z-10"> {/* Ensure text is above overlay */}
        <h1
          className="welcome-message text-white text-6xl md:text-7xl font-bold text-center transition-transform duration-500"
          style={{
            transform: `scale(${scale})`, // Apply the scale transformation to the text
            opacity: opacity, // Apply the opacity transformation to the text
            transition: 'opacity 0.4s ease', // Smooth transition for opacity change
          }}
        >
          Welcome to NFT Ticket Selling Platform
        </h1>
      </div>
    </div>
  );
}

export default Background;
