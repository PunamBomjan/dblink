import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const row1 = [
  "/logos/etherum_logo.jpg",
  "/logos/polygon_logo.png",
  "/logos/solana_logo.jpg",
  "/logos/opensea_logo.jpg",
  "/logos/rarible_logo.png",
  "/logos/coinbase_commerce_logo.png",
];

const row2 = [
  "/logos/trust_wallet_logo.png",
  "/logos/alchemy_logo.png",
  "/logos/foundation_logo.png",
  "/logos/stripe_logo.png",
  "/logos/bitfinex_logo.png",
  "/logos/immutable_x_logo.png",
];

const PartnerLogo: React.FC = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '50px',
      duration: 500,
      reset: true,
      viewFactor: 0.4,
    });

    sr.reveal('.heading', { origin: 'top' });
    sr.reveal('.description', { origin: 'bottom' });

    // Cleanup the ScrollReveal instance on component unmount
    return () => sr.destroy();
  }, []);

  return (
    <div className="w-screen lg:h-screen md:h-[75vh] sm:h-[50vh] flex items-center justify-center overflow-x-hidden">
      <div className="flex flex-col items-center pt-8">
        <div className="lg:text-6xl text-4xl font-bold mb-2 text-white heading ">
          With Great Outcomes.
        </div>
        <div className="lg:text-xl font-light mb-10 text-[#acc0ce] description text-sm">
          Our customers have gotten offers from awesome companies.
        </div>
        <div className="flex overflow-hidden w-full">
          <div className="flex animate-scrollX">
            {row1.map((src, idx) => (
              <div
                key={idx}
                className="flex justify-center items-center w-[clamp(10rem,1rem+40vmin,30rem)] p-[calc(clamp(10rem,1rem+30vmin,30rem)/10)]"
              >
                <img
                  src={src}
                  className="object-contain w-full h-full rounded-md aspect-[16/9] p-1 shadow-[0_2px_8px_rgba(99,99,99,0.2)]"
                />
              </div>
            ))}
          </div>
          <div className="flex animate-scrollX">
            {row1.map((src, idx) => (
              <div
                key={idx}
                className="flex justify-center items-center w-[clamp(10rem,1rem+40vmin,30rem)] p-[calc(clamp(10rem,1rem+30vmin,30rem)/10)]"
              >
                <img
                  src={src}
                  className="object-contain w-full h-full rounded-md aspect-[16/9] p-1 shadow-[0_2px_8px_rgba(99,99,99,0.2)]"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex overflow-hidden w-full">
          <div className="flex animate-scrollXReverse">
            {row2.map((src, idx) => (
              <div
                key={idx}
                className="flex justify-center items-center w-[clamp(10rem,1rem+40vmin,30rem)] p-[calc(clamp(10rem,1rem+30vmin,30rem)/10)]"
              >
                <img
                  src={src}
                  className="object-contain w-full h-full rounded-md aspect-[16/9] p-1 shadow-[0_2px_8px_rgba(99,99,99,0.2)]"
                />
              </div>
            ))}
          </div>
          <div className="flex animate-scrollXReverse">
            {row2.map((src, idx) => (
              <div
                key={idx}
                className="flex justify-center items-center w-[clamp(10rem,1rem+40vmin,30rem)] p-[calc(clamp(10rem,1rem+30vmin,30rem)/10)]"
              >
                <img
                  src={src}
                  className="object-contain w-full h-full rounded-md aspect-[16/9] p-1 shadow-[0_2px_8px_rgba(99,99,99,0.2)]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerLogo;
