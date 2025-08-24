import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BuildingOffice2Icon,
  WrenchScrewdriverIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    icon: <BuildingOffice2Icon className="w-10 h-10 mx-auto mb-4" />,
    title: "Génie civil",
    description:
      "• Construction de bâtiments résidentiels, administratifs et industriels\n• Infrastructures : routes, ponts, ouvrages hydrauliques\n• Travaux de gros œuvre et fondations",
    path: "/services/genie-civil",
  },
  {
    icon: <Cog6ToothIcon className="w-10 h-10 mx-auto mb-4" />,
    title: "Construction métallique",
    description:
      "• Charpentes métalliques et hangars\n• Structures modulaires et préfabriquées\n• Passerelles, escaliers et éléments sur mesure",
    path: "/services/construction-metallique",
  },
  {
    icon: <WrenchScrewdriverIcon className="w-10 h-10 mx-auto mb-4" />,
    title: "Travaux divers",
    description:
      "• Rénovation et aménagement\n• Finitions et second œuvre\n• Aménagements urbains",
    path: "/services/travaux-divers",
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
          Nos Services
        </motion.h2>
        <motion.p
          className="text-gray-800 mb-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Expertise complète pour vos projets de construction, métallurgie et aménagement.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          {services.map((service, i) => (
            <div
              key={i}
              onClick={() => navigate(service.path)}
              className="text-center bg-[#FFD500] p-6 rounded cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:bg-yellow-300"
            >
              {service.icon}
              <h3 className="text-lg font-semibold text-black mb-2">{service.title}</h3>
              <p className="text-gray-800 text-sm whitespace-pre-line">
                {service.description}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.button
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.1 }}
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
