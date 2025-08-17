import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BuildingOffice2Icon,
  PuzzlePieceIcon,
  PaintBrushIcon,
  HomeModernIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    icon: <BuildingOffice2Icon className="w-10 h-10 mx-auto mb-4" />,
    title: "Travaux de gros œuvre",
    description:
      "Construction des fondations, des murs et de la structure principale du bâtiment.",
    path: "/services/gros-oeuvre",
  },
  {
    icon: <PuzzlePieceIcon className="w-10 h-10 mx-auto mb-4" />,
    title: "Travaux de petits œuvre",
    description:
      "Travaux de finition et construction des éléments secondaires du bâtiment.",
    path: "/services/petits-oeuvre",
  },
  {
    icon: <PaintBrushIcon className="w-10 h-10 mx-auto mb-4" />,
    title: "Rénovation de bâtiments",
    description:
      "Remise à neuf ou modernisation de bâtiments anciens ou abîmés.",
    path: "/services/renovation",
  },
  {
    icon: <HomeModernIcon className="w-10 h-10 mx-auto mb-4" />,
    title: "Aménagement intérieur / extérieur",
    description:
      "Création ou réorganisation d'espaces intérieurs ou extérieurs selon vos besoins.",
    path: "/services/amenagement",
  },
  {
    icon: <WrenchScrewdriverIcon className="w-10 h-10 mx-auto mb-4" />,
    title: "Petits travaux et maintenance",
    description:
      "Réparations, dépannages ou améliorations pour particuliers et professionnels.",
    path: "/services/maintenance",
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="services" className="bg-[#FFD500] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Nos services
        </motion.h2>
        <motion.p
          className="text-gray-800 mb-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Des solutions sur mesure pour tous vos projets de construction.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          {services.slice(0, 3).map((service, i) => (
            <div
              key={i}
              onClick={() => navigate(service.path)}
              className="text-center bg-[#FFD500] p-6 rounded cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:bg-yellow-300"
            >
              {service.icon}
              <h3 className="text-lg font-semibold text-black mb-2">{service.title}</h3>
              <p className="text-gray-800 text-sm">{service.description}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 md:justify-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          {services.slice(3).map((service, i) => (
            <div
              key={i}
              onClick={() => navigate(service.path)}
              className="text-center bg-[#FFD500] p-6 rounded cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:bg-yellow-300"
            >
              {service.icon}
              <h3 className="text-lg font-semibold text-black mb-2">{service.title}</h3>
              <p className="text-gray-800 text-sm">{service.description}</p>
            </div>
          ))}
        </motion.div>

        <motion.button
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.1 }}  // ↑ makes it bigger on hover
          className="bg-black text-white font-semibold px-6 py-3 rounded transform hover:scale-110 hover:bg-gray-800 cursor-pointer"
          onClick={() => navigate("/devis")}
        >
          Obtenir un devis
        </motion.button>

      </div>
    </section>
  );
};

export default ServicesSection;
