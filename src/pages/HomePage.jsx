import logo from '../logo.svg';
import '../App.css';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import StatsSection from '../components/StatsSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ProjectsSection from '../components/ProjectsSection';
import ReferencesSection from '../components/ReferencesSection';
import ContactSection from '../components/ContactSection';
import RetoursSection from '../components/RetoursSection';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div className="font-sans text-gray-900">
      <Header />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ReferencesSection />
      <ContactSection />
      <RetoursSection />
      <Footer />
    </div>

  );
}

export default HomePage;
