import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BuildingOffice2Icon,
  BuildingLibraryIcon,
  BuildingStorefrontIcon,
  HomeModernIcon,
  WrenchIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    icon: <BuildingOffice2Icon className="w-10 h-10 mx-auto mb-4" />,
    title: "Travaux de gros œuvre",
    description:
      "Construction des fondations, des murs et de la structure principale du bâtiment.",
    path: "/services/travaux-de-gros-oeuvre",
  },
  {
    icon: <BuildingLibraryIcon className="w-10 h-10 mx-auto mb-4" />,
    title: "Travaux de petits œuvre",
    description:
      "Construction des fondations, des murs et de la structure principale du bâtiment.",
    path: "/services/travaux-de-petits-oeuvre",
  },
  {
    icon: <BuildingStorefrontIcon className="w-10 h-10 mx-auto mb-4" />,
    title: "Rénovation de bâtiments",
    description:
      "Remise à neuf ou modernisation de bâtiments anciens ou abîmés.",
    path: "/services/renovation-batiments",
  },
  {
    icon: <HomeModernIcon className="w-10 h-10 mx-auto mb-4" />,
    title: "Aménagement intérieur / extérieur",
    description:
      "Création ou réorganisation d'espaces intérieurs ou extérieurs selon vos besoins.",
    path: "/services/amenagement",
  },
  {
    icon: <WrenchIcon className="w-10 h-10 mx-auto mb-4" />,
    title: "Petits travaux et maintenance",
    description:
      "Réparations, dépannages ou améliorations pour particuliers et professionnels.",
    path: "/services/maintenance",
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="bg-[#FFD500] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Nos services</h2>
        <p className="text-gray-800 mb-10">
          Des solutions sur mesure pour tous vos projets de construction.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {services.map((service, i) => (
            <div
              key={i}
              onClick={() => navigate(service.path)}
              className="text-center bg-[#FFD500] p-6 rounded shadow-none cursor-pointer hover:bg-yellow-300 transition"
            >
              {service.icon}
              <h3 className="text-lg font-semibold text-black mb-2">
                {service.title}
              </h3>
              <p className="text-gray-800 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        <button
          className="bg-black text-white font-semibold px-6 py-2 rounded hover:opacity-90"
          onClick={() => navigate("/devis")}
        >
          Obtenir un devis
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
