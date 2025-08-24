import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { contenuservices as servicesData } from "./ContenuServices";

export default function ServicePage() {
  const { serviceSlug } = useParams();
  const navigate = useNavigate();
  const service = servicesData[serviceSlug];

  if (!service) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Service introuvable</h1>
        <button
          onClick={() => navigate("/")}
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
        >
          Retour à l'accueil
        </button>
      </div>
    );
  }

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{service.title}</h1>
      <p className="mb-4">{service.description}</p>
      <ul className="list-disc pl-5 space-y-2">
        {service.details.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
