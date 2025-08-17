import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import buildingImage from "../assets/aboutUs.jpg";

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
    { number: "20", label: "Années d'expérience", suffix: "+", description: "...", details: "..." },
    { number: "150", label: "Projets complétés", suffix: "+", description: "...", details: "..." },
    { number: "100", label: "Hommes d'expertise", suffix: "+", description: "...", details: "..." },
    { number: "98", label: "Satisfaction clients", suffix: "%", description: "...", details: "..." },
  ];

  const companyValues = [
    { title: "Excellence", description: "..." },
    { title: "Innovation", description: "..." },
    { title: "Durabilité", description: "..." },
    { title: "Partenariat", description: "..." },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Company Story */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src={buildingImage}
              alt="Nassimi Pro Construction - Notre histoire"
              className="w-full h-96 rounded-lg shadow-xl object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Notre Histoire
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>Fondée avec une vision claire ...</p>
              <p>Au fil des années, nous avons grandi ...</p>
              <p>Aujourd'hui, nous continuons d'évoluer ...</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
          >
            Nos Chiffres Clés
          </motion.h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center transform hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-[#FFD500] mb-2">
                  <AnimatedCounter targetNumber={stat.number} suffix={stat.suffix} duration={2000 + index * 100} />
                </h3>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl font-bold text-[#FFD500] mr-3">
                    {stat.number}{stat.suffix}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900">{stat.label}</h3>
                </div>
                <p className="text-gray-700 mb-3 leading-relaxed">{stat.description}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{stat.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Nos Valeurs
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-xl font-semibold mb-4 text-[#FFD500]">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-16 px-4 bg-[#FFD500]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            Prêt à Démarrer Votre Projet ?
          </h2>
          <p className="text-xl text-gray-800 mb-8">
            Contactez-nous dès aujourd'hui ...
          </p>
          <button className="bg-slate-800 text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-slate-700 transition-colors duration-300">
            Demander un Devis Gratuit
          </button>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default AboutPage;
