import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Comparison: React.FC = () => {
  useEffect(() => {
    // Initialize ScrollReveal
    const sr = ScrollReveal({
      distance: '50px',
      duration: 800,
      easing: 'ease-in-out',
      reset: true,
    });

    // Reveal elements
    sr.reveal('.reveal', { origin: 'bottom', interval: 200 });

    // Change background color on scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const backgroundColor = scrollPosition > 50 ? '#f0f4f8' : '#f9fafb'; // Light colors for contrast
      document.body.style.backgroundColor = backgroundColor;
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col items-center py-10">
      <h1 className="text-5xl font-bold mb-6 text-center text-gray-300 reveal">Comparison of NFT Ticket Creation</h1>
      <h2 className="text-2xl font-semibold mb-10 text-center text-gray-500 reveal">With vs. Without Solana Blink</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-gradient-to-r from-yellow-300 to-yellow-500 shadow-lg rounded-lg p-8 transform transition duration-300 hover:scale-105 reveal">
          <h3 className="text-2xl font-bold mb-6 text-center">Using Solana Blink</h3>
          <ul className="space-y-6">
            <li className="flex items-center">
              <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-white rounded-full shadow-md">
                <svg className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.656 0 3-1.344 3-3s-1.344-3-3-3-3 1.344-3 3 1.344 3 3 3zm0 6c-1.656 0-3 1.344-3 3s1.344 3 3 3 3-1.344 3-3-1.344-3-3-3zM6 20h12" />
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium">Setup Time</h4>
                <p className="text-gray-600">Quick and easy setup with predefined templates</p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-white rounded-full shadow-md">
                <svg className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m4 0h-1v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2h1v4h-1m4 0h-1v4h1m-4 0h1m-4-4v-4h1v4h-1zm0 0h1m0-4V9a1 1 0 112 0v1m-2 0h2m-1 1h1" />
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium">Transaction Speed</h4>
                <p className="text-gray-600">High-speed transactions optimized for NFTs</p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-white rounded-full shadow-md">
                <svg className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.656 0 3-1.344 3-3s-1.344-3-3-3-3 1.344-3 3 1.344 3 3 3zm0 6c-1.656 0-3 1.344-3 3s1.344 3 3 3 3-1.344 3-3-1.344-3-3-3zM6 20h12" />
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium">Costs</h4>
                <p className="text-gray-600">Lower gas fees due to optimized processes</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-red-300 to-red-500 shadow-lg rounded-lg p-8 transform transition duration-300 hover:scale-105 reveal">
          <h3 className="text-2xl font-bold mb-6 text-center">Without Solana Blink</h3>
          <ul className="space-y-6">
            <li className="flex items-center">
              <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-white rounded-full shadow-md">
                <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.656 0 3-1.344 3-3s-1.344-3-3-3-3 1.344-3 3 1.344 3 3 3zm0 6c-1.656 0-3 1.344-3 3s1.344 3 3 3 3-1.344 3-3-1.344-3-3-3zM6 20h12" />
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium">Setup Time</h4>
                <p className="text-gray-600">Requires extensive coding and configuration</p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-white rounded-full shadow-md">
                <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m4 0h-1v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2h1v4h-1m4 0h-1v4h1m-4 0h1m-4-4v-4h1v4h-1zm0 0h1m0-4V9a1 1 0 112 0v1m-2 0h2m-1 1h1" />
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium">Transaction Speed</h4>
                <p className="text-gray-600">Slower, depending on network congestion</p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-white rounded-full shadow-md">
                <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.656 0 3-1.344 3-3s-1.344-3-3-3-3 1.344-3 3 1.344 3 3 3zm0 6c-1.656 0-3 1.344-3 3s1.344 3 3 3 3-1.344 3-3-1.344-3-3-3zM6 20h12" />
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium">Costs</h4>
                <p className="text-gray-600">Higher gas fees due to network conditions</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
