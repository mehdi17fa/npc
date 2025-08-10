import React from "react";
// Import your building image - adjust the path according to your assets folder structure
import buildingImage from "../assets/aboutUs.jpg"; // Update this path

const AboutSection = ({ onNavigateToAbout }) => {
  const handleLearnMore = () => {
    // If you're using React Router, replace this with: navigate('/about')
    // For now, using a prop function or window.location
    if (onNavigateToAbout) {
      onNavigateToAbout();
    } else {
      // Fallback navigation method
      window.location.href = '/about';
    }
  };

  return (
    <section id="about" className="py-12 sm:py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Mobile Layout - Stack: Title, Image, Text */}
        <div className="block lg:hidden text-center">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">
            Qui sommes-nous?
          </h2>
          
          {/* Image */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <img
                src={buildingImage}
                alt="Construction modulaire - Bâtiment préfabriqué"
                className="w-full h-64 sm:h-80 rounded-lg shadow-lg object-cover"
              />
              <div className="absolute inset-0 rounded-lg"></div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
            <p>
              Chez <strong>Nassimi Pro Construction</strong>, nous sommes passionnés par la transformation d'idées en réalité. 
              Avec des années d'expertise dans la conception architecturale, structurelle, électrique et mécanique, 
              nous nous spécialisons dans la livraison de solutions innovantes adaptées aux besoins uniques de nos clients.
            </p>
            
            <p>
              Notre mission est de construire un avenir défini par l'excellence, la précision et la durabilité. 
              Du concept à la réalisation, nous priorisons la qualité, l'efficacité et la satisfaction client 
              dans chaque projet que nous entreprenons.
            </p>
            
            <p>
              Qu'il s'agisse de concevoir des structures de pointe, d'assurer des systèmes électriques fiables, 
              ou de créer des solutions mécaniques efficaces, <strong>Nassimi Pro Construction</strong> est votre 
              partenaire de confiance en construction et conception modulaire.
            </p>
          </div>

          <div className="mt-6 sm:mt-8">
            <button 
              onClick={handleLearnMore}
              className="bg-[#FFD500] text-black font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded text-sm sm:text-base hover:bg-yellow-400 transition-colors duration-300"
            >
              En savoir plus
            </button>
          </div>
        </div>

        {/* Desktop Layout - Side by Side with Image on Left */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
          {/* Image Section */}
          <div>
            <div className="relative">
              <img
                src={buildingImage}
                alt="Construction modulaire - Bâtiment préfabriqué"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
              <div className="absolute inset-0 rounded-lg "></div>
            </div>
          </div>

          {/* Text Content Section */}
          <div className="text-left">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Qui sommes-nous?
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed text-base">
              <p>
                Chez <strong>Nassimi Pro Construction</strong>, nous sommes passionnés par la transformation d'idées en réalité. 
                Avec des années d'expertise dans la conception architecturale, structurelle, électrique et mécanique, 
                nous nous spécialisons dans la livraison de solutions innovantes adaptées aux besoins uniques de nos clients.
              </p>
              
              <p>
                Notre mission est de construire un avenir défini par l'excellence, la précision et la durabilité. 
                Du concept à la réalisation, nous priorisons la qualité, l'efficacité et la satisfaction client 
                dans chaque projet que nous entreprenons.
              </p>
              
              <p>
                Qu'il s'agisse de concevoir des structures de pointe, d'assurer des systèmes électriques fiables, 
                ou de créer des solutions mécaniques efficaces, <strong>Nassimi Pro Construction</strong> est votre 
                partenaire de confiance en construction et conception modulaire.
              </p>
            </div>

            <div className="mt-8">
              <button 
                onClick={handleLearnMore}
                className="bg-[#FFD500] text-black px-6 py-3 rounded font-semibold hover:bg-yellow-400 transition-colors duration-300"
              >
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;