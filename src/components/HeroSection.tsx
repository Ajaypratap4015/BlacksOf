import React from 'react';
import backgroundImage from '../assets/planet-earth-from-space 1.png'; // Adjust the path if necessary

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold">
          Bringing A New Perspective to Smart Lights And The Cities Of Tomorrow
        </h1>
        <p className="mt-4 text-lg">
          Leading the way with innovative solutions for the smart cities of the future.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
