import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import { motion } from 'framer-motion';

const DevisPage = () => {
    const [formData, setFormData] = useState({
      name: '',
      prenom: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });

    const [errors, setErrors] = useState({});
    const services = [
      'Travaux de gros œuvre',
      'Travaux de petits œuvre',
      'Rénovation de bâtiments',
      'Aménagement intérieur/extérieur',
      'Peinture et maintenance'
    ];

    const handleChange = (e) => {
      const { name, value } = e.target;
      let sanitizedValue = value.replace(/[<>{}()]/g, '');
      if (name === 'email') sanitizedValue = sanitizedValue.replace(/\s/g, '');
      setFormData((prev) => ({ ...prev, [name]: sanitizedValue }));
      validateField(name, sanitizedValue);
    };

    const validateField = (name, value) => {
      let newErrors = { ...errors };
      if (name === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) newErrors.email = 'Veuillez entrer un email valide.';
        else delete newErrors.email;
      }
      setErrors(newErrors);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (Object.keys(errors).length === 0) {
        try {
          const res = await axios.post('http://localhost:5000/api/devis', formData);
          if (res.status === 201) {
            alert('Demande envoyée avec succès!');
            setFormData({ name: '', prenom: '', email: '', phone: '', service: '', message: '' });
          }
        } catch (err) {
          console.error(err.response || err);
          alert('Erreur lors de l’envoi du devis.');
        }
      } else alert('Veuillez corriger les erreurs dans le formulaire.');
    };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col md:flex-row p-6 max-w-7xl mx-auto gap-6">
        
        {/* Form Section */}
        <motion.div 
          className="md:w-2/3 w-full bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Demandez votre devis</h2>
          <p className="text-gray-600 mb-8">
            Vous souhaitez faire appel à nos services ? Utilisez le formulaire ci-dessous pour demander votre devis en ligne.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Nom"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <input
                type="text"
                name="prenom"
                placeholder="Prénom"
                value={formData.prenom}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <div className="md:col-span-2">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    required
                />
                {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
              </div>
            </div>

            <input
              type="tel"
              name="phone"
              placeholder="Téléphone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />

            <div className="relative">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full p-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 appearance-none"
                required
              >
                <option value="">Choisissez un service</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>{service}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            <textarea
              name="message"
              placeholder="Votre message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 h-40"
              required
            />

            <button
              type="submit"
              className="w-full bg-black text-white p-4 rounded-lg hover:bg-gray-800 transition duration-300 font-semibold transform hover:scale-105"
            >
              Envoyer
            </button>
            <input type="text" name="honeypot" style={{ display: 'none' }} />
          </form>
        </motion.div>

        {/* Sidebar */}
        <motion.div
          className="md:w-1/3 w-full bg-yellow-400 text-black p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-xl font-bold mb-6">Localisation</h3>
          <div className="w-full h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.835123456789!2d-7.616667!3d33.573333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd2c7c7c7c7c7%3A0x1234567890abcdef!2zRXNwYWNlIFN0ZWVs!5e0!3m2!1sen!2sma!4v1691280000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className='mt-8'>
            <h4 className="text-lg font-semibold">Horaires d'ouverture</h4>
            <p className="text-base">Lundi - Vendredi : 09h00 - 18h00</p>
            <p className="text-base">Samedi : 09h00 - 13h00</p>
            <p className="text-base">Dimanche : Fermé</p>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default DevisPage;
