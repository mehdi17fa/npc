import React from "react";
import { CubeIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

// Parent container animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // delay between children
    },
  },
};

// Each reference animation
const itemVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 50, damping: 20 },
  },
};

const ReferencesSection = () => {
  return (
    <section className="py-16 px-4 bg-[#FFD500] text-center">
      <h2 className="text-2xl font-bold mb-12 text-black">Nos Références</h2>

      <motion.div
        className="flex justify-center items-center gap-12 flex-wrap"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // triggers only once when visible
      >
        {/* Sponsor 1 */}
        <motion.div
          className="flex flex-col items-center"
          variants={itemVariants}
        >
          <CubeIcon className="w-16 h-16 text-gray-700" />
          <span className="mt-2 text-sm text-gray-600 font-medium">
            Groupe Antolin
          </span>
        </motion.div>

        {/* Sponsor 2 */}
        <motion.div
          className="flex flex-col items-center"
          variants={itemVariants}
        >
          <ShieldCheckIcon className="w-16 h-16 text-gray-700" />
          <span className="mt-2 text-sm text-gray-600 font-medium">
            Lear Corp.
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ReferencesSection;
