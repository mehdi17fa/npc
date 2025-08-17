import React, { useRef } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/project1.jpg";
import img2 from "../assets/project2.jpg";

// Heroicons SVG components
const ChevronLeftIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const projects = [
  {
    image: img1,
    title: "Travaux hangars",
    description:
      "Construction des fondations, des murs et de la structure principale du bâtiment.",
  },
  {
    image: img2,
    title: "Travaux hangars",
    description:
      "Construction des fondations, des murs et de la structure principale du bâtiment.",
  },
];

const ProjectsSection = ({ onNavigateToProjects }) => {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    const { current } = containerRef;
    if (current) {
      const scrollAmount = current.offsetWidth / 1.2;
      current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  const handleViewMore = () => {
    if (onNavigateToProjects) {
      onNavigateToProjects();
    } else {
      window.location.href = '/projects';
    }
  };

  return (
    <section id="projects" className="bg-white py-16 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Nos Projets</h2>
        <div className="relative">
          {/* Chevron Left */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow"
          >
            <ChevronLeftIcon />
          </button>

          {/* Project Cards */}
          <div
            ref={containerRef}
            className="overflow-x-auto overflow-y-hidden flex justify-center items-center space-x-6 scrollbar-hide px-16"
          >
            {projects.map((project, i) => (
              <motion.div
                key={i}
                className="min-w-[300px] max-w-sm bg-white rounded-lg shadow-md p-4 flex-shrink-0
                          transform transition duration-300 hover:scale-105 hover:shadow-xl"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut" }} // smoother & simultaneous
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{project.description}</p>
              </motion.div>
            ))}

          </div>

          {/* Chevron Right */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow"
          >
            <ChevronRightIcon />
          </button>
        </div>

        {/* Voir Plus Button */}
        <div className="mt-10">
          <button 
            onClick={handleViewMore}
            className="bg-[#FFD500] text-black font-semibold px-6 py-3 rounded text-base hover:bg-yellow-400 transition-colors duration-300"
          >
            Voir plus
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
