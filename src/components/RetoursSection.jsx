import React from "react";

const RetoursSection = () => {
  return (
    <section id="contact" className="bg-[#FFD500] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Contactez-nous!</h2>
            <p className="mb-2">Horraires :</p>
            <p className="mb-2">+234 915 768 7896</p>
            <p className="mb-2">goodllucksconstruction@gmail.com</p>

            {/* Localisation Block */}
            
              <h3 className="text-2xl font-bold mb-4 mt-8">Localisation</h3>
              <div className="w-full h-64 ">
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

          {/* Contact Form */}
          <form className="bg-white p-6 rounded shadow space-y-4">
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
          </form>
        </div>
      </div>
    </section>
  );
};

export default RetoursSection;
