import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header"; // Import the Header component
import Footer from "../components/Footer";
import buildingImage from "../assets/aboutUs.jpg"; // Update this path

const AnimatedCounter = ({ targetNumber, suffix, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const target = parseInt(targetNumber);
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, targetNumber, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const AboutPage = () => {
  const stats = [
    { 
      number: "20", 
      label: "Années d'expérience", 
      suffix: "+",
      description: "Depuis plus de 20 ans, Nassimi Pro Construction accumule une expertise inégalée dans le domaine de la construction modulaire. Cette longue expérience nous a permis de perfectionner nos techniques, d'anticiper les défis et de développer des solutions innovantes pour chaque projet.",
      details: "Notre parcours nous a menés à travers diverses époques de la construction, nous permettant d'adapter constamment nos méthodes aux nouvelles technologies et aux exigences environnementales modernes."
    },
    { 
      number: "150", 
      label: "Projets complétés", 
      suffix: "+",
      description: "Avec plus de 150 projets menés à bien, nous avons démontré notre capacité à livrer des résultats exceptionnels dans des délais respectés. Chaque projet représente un défi unique que nous relevons avec passion et professionnalisme.",
      details: "De la construction de bureaux modulaires aux installations industrielles, en passant par les projets résidentiels, notre portfolio diversifié témoigne de notre polyvalence et de notre expertise technique."
    },
    { 
      number: "100", 
      label: "Hommes d'expertise", 
      suffix: "+",
      description: "Notre équipe de plus de 100 professionnels qualifiés constitue le cœur de notre succès. Architectes, ingénieurs, techniciens et ouvriers spécialisés travaillent ensemble pour concrétiser vos projets les plus ambitieux.",
      details: "Chaque membre de notre équipe apporte une expertise spécialisée, de la conception architecturale à l'installation finale, garantissant un service complet et de qualité supérieure."
    },
    { 
      number: "98", 
      label: "Satisfaction clients", 
      suffix: "%",
      description: "Un taux de satisfaction de 98% reflète notre engagement indéfectible envers l'excellence. Cette reconnaissance de nos clients est le fruit d'un travail rigoureux, d'une écoute attentive et d'un service après-vente exemplaire.",
      details: "Cette satisfaction élevée se traduit par de nombreuses recommandations et des partenariats durables avec nos clients, confirmant la confiance qu'ils nous accordent projet après projet."
    },
  ];

  const companyValues = [
    {
      title: "Excellence",
      description: "Nous nous efforçons d'atteindre la perfection dans chaque aspect de nos projets, de la conception initiale à la livraison finale."
    },
    {
      title: "Innovation",
      description: "Nous intégrons les dernières technologies et méthodes de construction pour offrir des solutions avant-gardistes et durables."
    },
    {
      title: "Durabilité",
      description: "Nos constructions modulaires respectent l'environnement et sont conçues pour perdurer dans le temps."
    },
    {
      title: "Partenariat",
      description: "Nous considérons chaque client comme un partenaire et travaillons ensemble pour réaliser sa vision."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Component */}
      <Header />
      

      {/* Company Story */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={buildingImage}
                alt="Nassimi Pro Construction - Notre histoire"
                className="w-full h-96 rounded-lg shadow-xl object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Notre Histoire
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Fondée avec une vision claire de révolutionner l'industrie de la construction modulaire, 
                  <strong> Nassimi Pro Construction</strong> a débuté comme une petite entreprise familiale 
                  animée par la passion de l'innovation et de l'excellence.
                </p>
                <p>
                  Au fil des années, nous avons grandi pour devenir un leader reconnu dans notre secteur, 
                  tout en conservant nos valeurs fondamentales : l'intégrité, la qualité et l'engagement 
                  envers nos clients.
                </p>
                <p>
                  Aujourd'hui, nous continuons d'évoluer, intégrant les dernières technologies et 
                  pratiques durables pour offrir des solutions de construction qui respectent 
                  l'environnement et répondent aux défis de demain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Nos Chiffres Clés
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-4xl md:text-5xl font-bold text-[#FFD500] mb-2">
                  <AnimatedCounter 
                    targetNumber={stat.number} 
                    suffix={stat.suffix}
                    duration={2000 + index * 100}
                  />
                </h3>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Detailed Stats Explanations */}
          <div className="grid md:grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <span className="text-3xl font-bold text-[#FFD500] mr-3">
                    {stat.number}{stat.suffix}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900">{stat.label}</h3>
                </div>
                <p className="text-gray-700 mb-3 leading-relaxed">{stat.description}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{stat.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nos Valeurs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-[#FFD500]">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-[#FFD500]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            Prêt à Démarrer Votre Projet ?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez comment 
            nous pouvons transformer votre vision en réalité.
          </p>
          <button className="bg-slate-800 text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-slate-700 transition-colors duration-300">
            Demander un Devis Gratuit
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;