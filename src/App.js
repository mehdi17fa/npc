import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage';
import AboutSection from './pages/AboutPage';
import ProjectsPage from "./pages/ProjectsPage";
// import ServiceDetail from "./pages/ServiceDetail"; // import your new service detail page
import DevisPage from "./pages/DevisPage";
import ScrollToTop from "./components/ScrollToTop";
import ServicePage from "./pages/services/ServicePage";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans text-gray-900">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/services/:serviceSlug" element={<ServicePage />} />

          {/* Dynamic service detail route */}
          {/* <Route path="/services/:serviceSlug" element={<ServiceDetail />} /> */}
          <Route path="/devis" element={<DevisPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
