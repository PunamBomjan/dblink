"use client"; // Ensure this is present for Next.js

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ScrollReveal from 'scrollreveal';

const ExploreEvent: React.FC = () => {
  const events = [
    {
      id: 1,
      image: '/cameragirl.jpg',
      title: 'Fandom',
      description: 'Capture the moment of your favourite artist.',
    },
    {
      id: 2,
      image: '/concertMan.jpg',
      title: 'Concert',
      description: 'Experience live music and vibrant performances.',
    },
    {
      id: 3,
      image: '/standingWoman.jpg',
      title: 'Lady Singer',
      description: 'Empowerment events celebrating women in our community.',
    },
    {
      id: 4,
      image: '/guitarman.jpg',
      title: 'Guitar Man',
      description: 'Enjoyy acoustic sessions and soulful tunes. Having a blissful night is what we want to provide.',
    },
  ];

  const eventRefs = useRef<(HTMLDivElement | null)[]>(new Array(events.length).fill(null));
  const [bgColor, setBgColor] = useState('#000000'); // Initial background color
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null); // Ref for the button
  const discoverRef = useRef<HTMLParagraphElement | null>(null); // Ref for the "Discover" paragraph

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '30px',
      duration: 800, // Duration for each card animation
      easing: 'ease-in-out',
      reset: true,
    });

    // Reveal each event with increasing delay
    eventRefs.current.forEach((ref, index) => {
      if (ref) {
        sr.reveal(ref, { delay: (index + 1) * 300 }); // Increasing delay for each card
      }
    });

    // Animate heading, description, discover text, and button
    if (headingRef.current) {
      sr.reveal(headingRef.current, { delay: 500, duration: 1000 });
    }
    if (descriptionRef.current) {
      sr.reveal(descriptionRef.current, { delay: 700, duration: 1000 });
    }
    if (discoverRef.current) {
      sr.reveal(discoverRef.current, { delay: 1000, duration: 1000 }); // Animate discover paragraph
    }
    if (buttonRef.current) {
      sr.reveal(buttonRef.current, { delay: 1300, duration: 1000 }); // Animate button
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = scrollY / maxScroll;

      // Change background color based on scroll position (linear gradient)
      const newColor = `linear-gradient(rgba(19, 19, 19, ${1 - scrollFraction}), rgba(104, 100, 100, 1))`;
      setBgColor(newColor);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ background: bgColor }} className="min-h-screen text-yellow-300 p-10 flex flex-col items-center">
      <h1 
        ref={headingRef} 
        className="text-5xl font-bold mb-6 text-center transition-all duration-160"
      >
        Explore Event
      </h1>
      <p 
        ref={descriptionRef} // Attach ref to the description
        className="text-lg mb-2 text-center lg:w-5/6 text-yellow-500"
      >
        The Explore Event is a vibrant celebration of culture, music, and creativity that brings people together from all walks of life. This unique gathering features a variety of activities,
        including live performances, art exhibitions, and interactive workshops that engage attendees.
      </p>
      <p 
        ref={discoverRef} // Attach ref to the discover paragraph
        className='lg:text-2xl text-xl text-yellow-500 mb-6'
      >
        Discover a variety of events that celebrate culture, music, and art. Join us for unforgettable experiences!
      </p>
      <button 
        ref={buttonRef} // Attach ref to the button
        className='bg-yellow-500 py-2 px-4 rounded text-black font-semibold mb-14 transition-transform duration-300 hover:scale-105'
      >
        Get Started
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {events.map((event, index) => (
          <div
            key={event.id}
            ref={(el) => { eventRefs.current[index] = el; }} // Assign the ref to each event
            className="bg-gray-900 text-yellow rounded-lg shadow-lg transition-transform duration-500 hover:scale-120 max-w-xs mx-auto"
          >
            <Image
              src={event.image}
              alt={event.title}
              width={400}
              height={300}
              className="rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold underline">{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreEvent;
