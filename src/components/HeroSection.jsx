import React from "react";
import { motion } from "framer-motion";
import heroBackground from "../assets/heroimage.jpg";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section 
      className="relative py-20 px-4 text-left bg-cover bg-center bg-no-repeat min-h-[600px] flex items-center"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl ml-0 md:ml-40"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-4xl font-bold leading-tight text-white mb-6">
         Bienvenue chez NASSIMI PRO CONSTRUCTION<br />
        </h1>
        <h2 className="text-4xl md:text-4xl font-bold leading-tight text-white mb-6">
         Construire aujourd’hui les fondations solides de demain<br />
        </h2>
        <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl">
          Spécialistes en construction et travaux divers, nous mettons à votre service notre expertise en génie civil et en construction métallique.
        </p>

        <button
      onClick={() => navigate("/devis")}
      className="bg-[#FFD500] text-black px-6 py-3 rounded font-semibold 
                 hover:bg-yellow-400 hover:scale-105 
                 transition-transform transition-colors duration-300"
    >
      Obtenir un devis
    </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
