import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DevisPage = () => {
  const [formData, setFormData] = useState({
    name: '',
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
    if (name === 'email') {
      sanitizedValue = sanitizedValue.replace(/\s/g, '');
    }
    setFormData((prev) => ({ ...prev, [name]: sanitizedValue }));
    validateField(name, sanitizedValue);
  };

  const validateField = (name, value) => {
    let newErrors = { ...errors };
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        newErrors.email = 'Veuillez entrer un email valide.';
      } else {
        delete newErrors.email;
      }
    }
    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      console.log('Form submitted:', formData);
      alert('Demande envoyée avec succès!');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } else {
      alert('Veuillez corriger les erreurs dans le formulaire.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col md:flex-row p-6 max-w-7xl mx-auto">
        <div className="md:w-2/3 w-full bg-white p-8 rounded-lg shadow-lg mb-6 md:mb-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Demandez votre devis</h2>
          <p className="text-gray-600 mb-8">
            Vous souhaitez faire appel à nos services ? Distribuez nos produits ? Utilisez le formulaire
            ci-dessous dès maintenant pour demander votre devis en ligne. Nous vous répondrons le plus
            bref possible.
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
                value={formData.name}
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
              className="w-full bg-black text-white p-4 rounded-lg hover:bg-gray-800 transition duration-300 font-semibold"
            >
              Envoyer
            </button>

            <input type="text" name="honeypot" style={{ display: 'none' }} />
          </form>
        </div>
        <div className="md:w-1/3 w-full bg-yellow-400 text-black p-8 rounded-lg shadow-lg mt-6 md:mt-0 md:ml-6">
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DevisPage;
