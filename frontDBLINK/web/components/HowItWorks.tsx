// components/HowItWorks.tsx
import { useEffect, useRef, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import { Wallet, User, Ticket, Share2, ChartPie, Calendar } from 'lucide-react';
import React from 'react';

const HowItWorks = () => {
  const [showMore, setShowMore] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null); // Reference to the section
  const buttonRef = useRef<HTMLButtonElement | null>(null); // Reference to the button

  // Function to toggle the visibility of additional steps
  const handleReadMore = () => {
    setShowMore(!showMore);
  };

  // Effect to trigger ScrollReveal animations
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '50px',
      duration: 600,
      delay: 200,
      easing: 'ease-in-out',
      opacity: 0,
      scale: 0.9,
    });

    // Reveal all elements in the section
    if (sectionRef.current) {
      sr.reveal(sectionRef.current.querySelectorAll('.reveal'), { interval: 200 });
    }

    // Reveal the button
    if (buttonRef.current) {
      sr.reveal(buttonRef.current, { interval: 100 });
    }
  }, [showMore]); // Re-trigger animations when showMore state changes

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-br from-yellow-300 to-purple-600 text-black p-8"
    >
      <h2 className="text-5xl font-bold text-center mb-6 text-white reveal">
        HOW IT WORKS FOR ARTISTS
      </h2>
      <p className="text-center mb-14 text-white reveal text-xl">
        Welcome to the NFT Ticketing Platform! Here's a step-by-step guide to help you get started with creating and selling NFT tickets for your event.
      </p>
      <div className="flex flex-wrap justify-around">
        {/* Step 1 */}
        <div className="text-center w-full sm:w-1/3 mb-6 reveal">
          <Wallet className="w-16 h-16 mx-auto text-purple-600" />
          <h3 className="text-2xl font-semibold mt-4 text-white">STEP 1: SETUP YOUR WALLET</h3>
          <ul className="mt-2 text-center text-white text-lg">
            <li>• Choose a Solana wallet</li>
            <li>• Create or connect your wallet</li>
            <li>• Fund your wallet</li>
          </ul>
        </div>
        {/* Step 2 */}
        <div className="text-center w-full sm:w-1/3 mb-6 reveal">
          <User className="w-16 h-16 mx-auto text-yellow-500" />
          <h3 className="text-2xl font-semibold mt-4 text-white">STEP 2: CREATE YOUR PROFILE</h3>
          <ul className="mt-2 text-center text-white text-lg">
            <li>• Sign up or login</li>
            <li>• Complete your profile</li>
          </ul>
        </div>
        {/* Step 3 */}
        <div className="text-center w-full sm:w-1/3 mb-6 reveal">
          <Ticket className="w-16 h-16 mx-auto text-yellow-500" />
          <h3 className="text-2xl font-semibold mt-4 text-white">STEP 3: CREATE AND MINT TICKETS</h3>
          <ul className="mt-2 text-center text-white text-lg">
            <li>• Navigate to Create Ticket</li>
            <li>• Fill event details</li>
          </ul>
        </div>

        {/* Conditional rendering of additional steps */}
        {showMore && (
          <>
            {/* Step 4 */}
            <div className="text-center w-full sm:w-1/3 mb-6 reveal">
              <Share2 className="w-16 h-16 mx-auto text-purple-600" />
              <h3 className="text-xl font-semibold mt-4 text-white">STEP 4: PROMOTE YOUR EVENT</h3>
              <ul className="mt-2 text-center text-white">
                <li>• Share on social media</li>
                <li>• Use email marketing</li>
                <li>• Collaborate with influencers</li>
              </ul>
            </div>
            {/* Step 5 */}
            <div className="text-center w-full sm:w-1/3 mb-6 reveal">
              <ChartPie className="w-16 h-16 mx-auto text-yellow-500" />
              <h3 className="text-xl font-semibold mt-4 text-white">STEP 5: MANAGE TICKET SALES</h3>
              <ul className="mt-2 text-center text-white">
                <li>• Track sales and analytics</li>
                <li>• Communicate with buyers</li>
                <li>• Handle refunds if necessary</li>
              </ul>
            </div>
            {/* Step 6 */}
            <div className="text-center w-full sm:w-1/3 mb-6 reveal">
              <Calendar className="w-16 h-16 mx-auto text-yellow-500" />
              <h3 className="text-xl font-semibold mt-4 text-white">STEP 6: HOST YOUR EVENT</h3>
              <ul className="mt-2 text-center text-white">
                <li>• Prepare for the event day</li>
                <li>• Ensure a smooth check-in process</li>
                <li>• Engage with your audience</li>
              </ul>
            </div>
          </>
        )}
      </div>

      <div className="text-center mt-8">
        <button 
          ref={buttonRef} // Reference to the button for ScrollReveal
          className="bg-yellow-500 text-black font-bold py-2 px-4 rounded reveal" 
          onClick={handleReadMore}
        >
          {showMore ? 'SHOW LESS' : 'READ MORE'}
        </button>
      </div>
    </section>
  );
};

export default HowItWorks;
