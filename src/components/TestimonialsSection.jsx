import React from "react";

const TestimonialsSection = () => {
  return (
    <section className="py-16 px-4 text-center bg-gradient-to-r from-[#1e1e1e] to-[#e6e6e6] text-white">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        {/* Rôle */}
        <h2 className="text-xl font-bold text-[#FFD700] mb-4">Fondateur</h2>

        {/* Avatar */}
        <div className="w-28 h-28 rounded-full bg-gray-300 mb-4" />

        {/* Nom */}
        <p className="text-lg font-semibold text-[#FFD700] mb-4">Taha Nassimi</p>

        {/* Témoignage */}
        <blockquote className="text-sm text-gray-300 max-w-xl mb-6">
          Goodluck Construction Company Limited delivered exceptional structural and electrical designs for our commercial project.
          The team was efficient, knowledgeable, and always available to address our concerns.
          Their commitment to quality exceeded our expectations. We couldn't be happier with the results!"
        </blockquote>

        {/* Bouton */}
        <button className="bg-[#FFD700] text-black font-semibold px-5 py-2 rounded">
          Contacter
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
