import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/npcLogo.png";

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const XIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Header = () => {
  const [open, setOpen] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { href: "#about", label: "Qui sommes-nous" },
    {
      href: "#services",
      label: "Nos services",
      dropdown: [
        { label: "Travaux de gros œuvre", slug: "gros-oeuvre" },
        { label: "Travaux de petits œuvre", slug: "petits-oeuvre" },
        { label: "Rénovation de bâtiments", slug: "renovation" },
        { label: "Aménagement intérieur / extérieur", slug: "amenagement" },
        { label: "Petits travaux et maintenance", slug: "maintenance" },
      ],
    },
    { href: "#projects", label: "Nos projets" },
    { href: "#contact", label: "Contacter-nous" },
  ];

  const handleNavClick = (href) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setOpen(false);
    setServiceDropdownOpen(false);
    setMobileServicesOpen(false);
  };

  const handleServiceClick = (slug) => {
    navigate(`/services/${slug}`);
    setOpen(false);
    setServiceDropdownOpen(false);
    setMobileServicesOpen(false);
  };

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      // Already on home → just scroll up
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to home then scroll
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
    setOpen(false);
    setServiceDropdownOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <>
      <header className="bg-white py-4 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={handleLogoClick}
          >
            <img
              src={logo}
              alt="Nassimi Pro Construction Logo"
              className="h-14 w-14 object-contain"
            />
            <h1 className="text-xl font-bold text-gray-800 hidden sm:block">
              NASSIMI PRO CONSTRUCTION
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <nav className="relative space-x-4 text-sm font-medium hidden sm:flex">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setServiceDropdownOpen(true)}
                    onMouseLeave={() => setServiceDropdownOpen(false)}
                  >
                    <button
                      className="hover:text-yellow-500 flex items-center gap-1"
                      onClick={(e) => e.preventDefault()}
                      aria-haspopup="true"
                      aria-expanded={serviceDropdownOpen}
                    >
                      {item.label}
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {serviceDropdownOpen && (
                      <div
                        className="absolute top-full left-0 bg-white border border-gray-200 shadow-lg rounded w-64 z-50"
                        onMouseEnter={() => setServiceDropdownOpen(true)}
                        onMouseLeave={() => setServiceDropdownOpen(false)}
                      >
                        <ul className="py-2">
                          {item.dropdown.map((service) => (
                            <li
                              key={service.slug}
                              className="px-4 py-2 text-sm text-gray-700 hover:text-yellow-500 cursor-pointer"
                              onClick={() => handleServiceClick(service.slug)}
                            >
                              {service.label}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    className="hover:text-yellow-500"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    {item.label}
                  </a>
                )
              )}
            </nav>

            {/* Desktop Quote Button */}
            <button
              onClick={() => {
                navigate("/devis");
                setOpen(false);
              }}
              className="bg-[#FFD500] text-black font-semibold px-4 py-2 rounded hover:opacity-90 hidden sm:block"
            >
              Obtenir un devis
            </button>

            {/* Mobile Quote Button */}
            <button
              onClick={() => {
                navigate("/devis");
                setOpen(false);
              }}
              className="bg-[#FFD500] text-black font-semibold px-3 py-2 rounded hover:opacity-90 text-sm sm:hidden"
            >
              Obtenir un devis
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="p-2 hover:bg-gray-100 rounded-md transition-colors sm:hidden"
              aria-label="Toggle menu"
            >
              {open ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Sidebar Navigation */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 sm:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={handleLogoClick}
            >
              <img
                src={logo}
                alt="Nassimi Pro Construction Logo"
                className="h-8 w-8 object-contain"
              />
              <h2 className="text-lg font-bold text-gray-800">Menu</h2>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Close menu"
            >
              <XIcon />
            </button>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col p-6 space-y-2">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="space-y-1">
                <button
                  className="flex justify-between items-center w-full text-gray-800 font-medium"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  aria-expanded={mobileServicesOpen}
                  aria-controls="mobile-services-submenu"
                >
                  {item.label}
                  <svg
                    className={`w-4 h-4 transform transition-transform ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileServicesOpen && (
                  <ul id="mobile-services-submenu" className="pl-4 space-y-1">
                    {item.dropdown.map((service) => (
                      <li
                        key={service.slug}
                        className="text-gray-600 text-sm hover:text-yellow-500 cursor-pointer"
                        onClick={() => handleServiceClick(service.slug)}
                      >
                        {service.label}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-left text-gray-800 hover:text-yellow-500 transition-colors duration-200"
              >
                {item.label}
              </button>
            )
          )}

          {/* Mobile Quote Button */}
          <button
            onClick={() => {
              navigate("/devis");
              setOpen(false);
            }}
            className="bg-[#FFD500] text-black font-semibold px-6 py-3 rounded hover:bg-yellow-400 transition-colors duration-300 mt-4"
          >
            Obtenir un devis
          </button>
        </nav>
      </div>
    </>
  );
};

export default Header;
