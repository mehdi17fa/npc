import React from "react";
import heroBackground from "../assets/heroimage.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative py-20 px-4 text-left bg-cover bg-center bg-no-repeat min-h-[600px] flex items-center"
      style={{
        backgroundImage: `url(${heroBackground})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl ml-0 md:ml-40">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
          Génie civil et modularité,<br />
          notre métier : bâtir
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl">
          Des solutions modulaires pour des besoins uniques.
        </p>

        <button className="bg-[#FFD500] text-black px-6 py-3 rounded font-semibold hover:bg-yellow-400 transition-colors duration-300">
          Contactez-nous
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
