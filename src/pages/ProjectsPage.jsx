import React, { useState, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import img1 from "../assets/project1.jpg";
import img2 from "../assets/project2.jpg";

// Heroicons SVG components
const CalendarIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const LocationIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const containerRef = useRef(null);

  const allProjects = [
    {
      id: 1,
      image: img1,
      title: "Travaux hangars industriels",
      description: "Construction complète de hangars modulaires pour l'industrie automobile...",
      category: "industriel",
      location: "Casablanca, Maroc",
      date: "2024",
      duration: "8 mois",
      client: "AutoTech Industries",
      surface: "2,500 m²",
      details: "Ce projet comprenait la construction de trois hangars..."
    },
    {
      id: 2,
      image: img2,
      title: "Centre logistique modulaire",
      description: "Développement d'un centre de distribution...",
      category: "logistique",
      location: "Tanger, Maroc",
      date: "2023",
      duration: "6 mois",
      client: "LogiFlow Solutions",
      surface: "3,200 m²",
      details: "Construction d'un centre logistique moderne avec..."
    },
    // ... (rest of projects)
  ];

  const categories = [
    { id: "all", name: "Tous les projets" },
    { id: "industriel", name: "Industriel" },
    { id: "bureaux", name: "Bureaux" },
    { id: "logistique", name: "Logistique" },
    { id: "medical", name: "Médical" },
    { id: "commercial", name: "Commercial" }
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? allProjects
      : allProjects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Categories */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-[#FFD500] text-black"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </section>

      {/* Project Cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <CalendarIcon />
                    <span>{project.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <LocationIcon />
                    <span>{project.location}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Client:</span>
                    <span className="font-medium">{project.client}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Surface:</span>
                    <span className="font-medium">{project.surface}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Durée:</span>
                    <span className="font-medium">{project.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed View */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Détails de Nos Projets</h2>
          <div className="space-y-12">
            {filteredProjects.slice(0, 3).map((project, index) => (
              <div
                key={project.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img src={project.image} alt={project.title} className="w-full h-80 rounded-lg shadow-lg object-cover" />
                </div>
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{project.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{project.details}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-gray-500 mb-1">Localisation</div>
                      <div className="font-semibold">{project.location}</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-gray-500 mb-1">Année</div>
                      <div className="font-semibold">{project.date}</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-gray-500 mb-1">Surface</div>
                      <div className="font-semibold">{project.surface}</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-gray-500 mb-1">Durée</div>
                      <div className="font-semibold">{project.duration}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-[#FFD500]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Votre Projet, Notre Expertise</h2>
          <p className="text-xl text-gray-800 mb-8">
            Chaque projet est unique. Discutons de vos besoins spécifiques et créons ensemble la solution modulaire parfaite pour votre entreprise.
          </p>
          <button className="bg-slate-800 text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-slate-700 transition-colors duration-300">
            Démarrer Mon Projet
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
