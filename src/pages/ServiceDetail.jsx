import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const servicesInfo = {
  "gros-oeuvre": {
    title: "Travaux de gros œuvre",
    description: `
      Les travaux de gros œuvre comprennent toutes les étapes essentielles à la construction d’un bâtiment :
      fondations, murs porteurs, planchers, charpentes, toitures.
      Ces travaux garantissent la solidité et la stabilité de la construction.
    `,
    images: [
      "/images/services/gros-oeuvre1.jpg",
      "/images/services/gros-oeuvre2.jpg",
    ],
  },
  "petits-oeuvre": {
    title: "Travaux de petits œuvre",
    description: `
      Les travaux de petits œuvre englobent les finitions et éléments non-structuraux :
      cloisons, revêtements, peinture, plomberie, électricité.
      Ils permettent de personnaliser et d’aménager les espaces intérieurs.
    `,
    images: [
      "/images/services/petits-oeuvre1.jpg",
      "/images/services/petits-oeuvre2.jpg",
    ],
  },
  renovation: {
    title: "Rénovation de bâtiments",
    description: `
      La rénovation de bâtiments consiste à remettre à neuf ou à moderniser des constructions existantes :
      amélioration thermique, réparation de structures, modernisation des installations,
      adaptation aux normes en vigueur.
    `,
    images: [
      "/images/services/renovation1.jpg",
      "/images/services/renovation2.jpg",
    ],
  },
  amenagement: {
    title: "Aménagement intérieur / extérieur",
    description: `
      L’aménagement intérieur et extérieur vise à optimiser et embellir les espaces :
      création de jardins, terrasses, agencement de pièces, décoration,
      installation de mobilier sur mesure.
    `,
    images: [
      "/images/services/amenagement1.jpg",
      "/images/services/amenagement2.jpg",
    ],
  },
  maintenance: {
    title: "Petits travaux et maintenance",
    description: `
      Les petits travaux et la maintenance assurent la pérennité des bâtiments :
      réparations courantes, entretien des équipements, nettoyage,
      interventions rapides pour garantir sécurité et confort.
    `,
    images: [
      "/images/services/maintenance1.jpg",
      "/images/services/maintenance2.jpg",
    ],
  },
};

const ServiceDetail = () => {
  const { serviceSlug } = useParams();
  const navigate = useNavigate();
  const service = servicesInfo[serviceSlug];

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Service non trouvé</h1>
        <p>Désolé, le service demandé n'existe pas.</p>
      </div>
    );
  }

  return (
    <div className="container max-w-full">
        <Header />
      <h1 className="text-4xl font-bold mb-6 text-yellow-600">{service.title}</h1>

      {/* Images gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {service.images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`${service.title} image ${idx + 1}`}
            className="rounded-lg shadow-md object-cover w-full h-64"
            loading="lazy"
          />
        ))}
      </div>

      <p className="whitespace-pre-line text-gray-700 mb-8">{service.description.trim()}</p>

      {/* Obtenir un devis button */}
      <button
        onClick={() => navigate("/#contact")} // or navigate to a dedicated contact/devis page
        className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-400 transition-colors duration-300"
      >
        Obtenir un devis
      </button>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
