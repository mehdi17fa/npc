import React from "react";
import { motion } from "framer-motion";

const RetoursSection = () => {
  return (
    <section id="contact" className="bg-[#FFD500] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">Contactez-nous!</h2>
            <p className="mb-2">Horraires :</p>
            <p className="mb-2">+234 915 768 7896</p>
            <p className="mb-2">goodllucksconstruction@gmail.com</p>

            {/* Localisation Block */}
            <h3 className="text-2xl font-bold mb-4 mt-8">Localisation</h3>
            <div className="w-full h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110098.45733841938!2d-9.577744599999999!3d30.419747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b6e9daad1cc9%3A0xbcf8d0b78bf48474!2sAgadir%2080000!5e0!3m2!1sen!2sma!4v1755180205740!5m2!1sen!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="bg-white p-6 rounded shadow space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              placeholder="Name"
              className="w-full border px-4 py-2 rounded"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border px-4 py-2 rounded"
            />
            <textarea
              rows="4"
              placeholder="Messages"
              className="w-full border px-4 py-2 rounded"
            ></textarea>
            <button className="bg-[#FFD500] text-black font-semibold px-6 py-2 rounded hover:opacity-90">
              Send Now
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default RetoursSection;
