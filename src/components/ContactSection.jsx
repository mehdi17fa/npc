import React from "react";
import { motion } from "framer-motion";

// Icons
const EmailIcon = () => (
  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

export default function ContactSection() {
  const contactMethods = [
    {
      icon: EmailIcon,
      label: 'Email',
      action: () => window.open('mailto:nassimi.pro.construction@gmail.com', '_blank')
    },
    {
      icon: PhoneIcon,
      label: 'Call',
      action: () => window.open('tel:+212622255022', '_self')
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Contactez-nous!
        </h2>
        
        <div className="flex justify-center items-center gap-8 flex-wrap">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <motion.button
                key={index}
                onClick={method.action}
                className="group relative w-20 h-20 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-50"
                aria-label={method.label}
                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: index * 0.2 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent />
                
                {/* Tooltip */}
                <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  {method.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
