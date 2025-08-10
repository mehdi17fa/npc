import React from "react";
import { CubeIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";

const ReferencesSection = () => {
  return (
    <section className="py-16 px-4 bg-white text-center">
      <h2 className="text-2xl font-bold mb-12 text-black">Nos Références</h2>

      <div className="flex justify-center items-center gap-12 flex-wrap">
        {/* Sponsor 1 */}
        <div className="flex flex-col items-center">
          <CubeIcon className="w-16 h-16 text-gray-700" />
          <span className="mt-2 text-sm text-gray-600 font-medium">Groupe Antolin</span>
        </div>

        {/* Sponsor 2 */}
        <div className="flex flex-col items-center">
          <ShieldCheckIcon className="w-16 h-16 text-gray-700" />
          <span className="mt-2 text-sm text-gray-600 font-medium">Lear Corp.</span>
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
