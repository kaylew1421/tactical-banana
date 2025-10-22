import React, { useState, useEffect } from 'react';

const heroImages = [
  '/images/tb-01.jpg',
  '/images/tb-05.jpg',
  '/images/tb-04.jpg',
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    // Show text on initial load
    const initialLoadTimer = setTimeout(() => setTextVisible(true), 100);

    const interval = setInterval(() => {
      setTextVisible(false); // Start fade out

      // After fade out duration, change image and start fade in
      const changeImageTimer = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        setTextVisible(true);
      }, 700); // Wait for fade-out to finish

      return () => clearTimeout(changeImageTimer);
    }, 5000); // Change image every 5 seconds

    return () => {
        clearTimeout(initialLoadTimer);
        clearInterval(interval);
    }
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {heroImages.map((src, index) => (
        <div
          key={src}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url('${src}')`,
            opacity: index === currentIndex ? 1 : 0,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      ))}
      <div className="relative z-10 p-4">
        <h1 
          className={`
            text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter drop-shadow-lg 
            transform transition-all duration-500 ease-out
            ${textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
          `}
          style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8)'}}
        >
          Agent Banana
        </h1>
        <p 
          className={`
            mt-4 text-lg md:text-2xl font-light text-yellow-300 tracking-widest drop-shadow-md
            transform transition-all duration-500 ease-out
            ${textVisible ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-5'}
          `}
          style={{textShadow: '1px 1px 4px rgba(0,0,0,0.8)'}}
        >
          Peel. Point. Prevail.
        </p>
      </div>
    </section>
  );
};

export default Hero;
