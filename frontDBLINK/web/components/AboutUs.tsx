"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import ScrollReveal from "scrollreveal";

const aboutUsData = [
  {
    title: "Create Blink Account",
    description:
      "Our platform allows users to create a Blink account effortlessly, giving them access to a world of NFT transactions and event management.",
    image: "/Blinkform.jpg",
    bgColor: "bg-gradient-to-l to-purple-200 from-gray-100",
  },
  {
    title: "NFT Transactions",
    description:
      "Seamlessly perform NFT transactions with our user-friendly interface designed to cater to both beginners and experts in the NFT space.",
    image: "/NFT.jpg",
    bgColor: "bg-gradient-to-l from-purple-300 to-gray-200",
  },
  {
    title: "Upload Upcoming Events",
    description:
      "Upload and manage your upcoming events with ease. Our platform provides tools to help you promote and handle events efficiently.",
    image: "/upcommingshow.jpg",
    bgColor: "bg-gradient-to-l from-gray-300 to-purple-500",
  },
  {
    title: "Join the Community",
    description:
      "Be a part of our growing community. Connect, interact, and grow with other members who share similar interests in the NFT and event management space.",
    image: "/group.jpg",
    bgColor: "bg-gradient-to-l to-gray-400 from-purple-600",
  },
];

const AboutUs = () => {
  const [bgColor, setBgColor] = useState(aboutUsData[0].bgColor);
  const refs = useRef<(HTMLDivElement | null)[]>(new Array(aboutUsData.length).fill(null));

  // Callback for setting refs
  const setRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    refs.current[index] = el;
  }, []);

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "left",
      distance: "50px",
      duration: 1500,
      easing: "ease-in-out",
      reset: true,
      viewFactor: 0.2,
    });

    sr.reveal(".reveal-left", { origin: "left" });
    sr.reveal(".reveal-right", { origin: "right" });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setBgColor(aboutUsData[index].bgColor);
          }
        });
      },
      {
        threshold: 1,
      }
    );

    // Observe each ref element
    refs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Check if window is defined to run any browser-specific code
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("Window is defined. This code runs only on the client side.");
    }
  }, []);

  return (
    <div className={`container mx-auto py-14 px-6 text-yellow-500 ${bgColor}`}>
      <h1 className="lg:text-6xl text-4xl font-bold text-center mb-6">Learn About Us</h1>
      <p className="text-center mb-14 text-xl lg:text-2xl max-w-6xl mx-auto">
        Welcome to our platform where we empower users to create Blink accounts, engage in NFT transactions, and upload their upcoming events with ease.
      </p>
      {aboutUsData.map((section, index) => (
        <div
          key={index}
          ref={setRef(index)} // Use the callback to set the ref
          data-index={index}
          className={`flex flex-col mb-0 md:flex-row items-center transition-all duration-1000 ease-in-out p-6`}
        >
          <div
            className={`w-full md:w-1/2 mb-6 md:mb-0 reveal-left ${index % 2 !== 0 ? "md:order-2" : ""}`}
          >
            <Image
              src={section.image}
              alt={section.title}
              width={400}
              height={400}
              className="rounded-full mx-auto"
            />
          </div>
          <div
            className={`w-full md:w-2/3 text-center md:text-left reveal-right ${index % 2 !== 0 ? "md:order-1" : ""}`}
          >
            <h2 className="lg:text-5xl text-3xl font-bold mb-4">{section.title}</h2>
            <p className="w-3/4 text-lg">{section.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
