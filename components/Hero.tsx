import React from 'react';

const HERO_IMAGE = '/images/tb-10.jpg'; // must be in /public/images/

const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full h-[60vh] md:h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      aria-label="Hero banner"
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight drop-shadow-lg">
          Agent Banana
        </h1>
        <p className="mt-4 text-lg md:text-2xl font-light text-yellow-300 tracking-widest drop-shadow-md">
          Peel. Point. Prevail.
        </p>
      </div>
    </section>
  );
};

export default Hero;
