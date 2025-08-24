import React from 'react';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  GlobeAltIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  CogIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-amber-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-700">
                  <p>123 Business Street</p>
                  <p>Suite 100</p>
                  <p>City, State 12345</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-amber-600 flex-shrink-0" />
                <span className="text-sm text-gray-700">+212 622-255-022</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-amber-600 flex-shrink-0" />
                <span className="text-sm text-gray-700">nassimi.pro.construction@gmail.com</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <GlobeAltIcon className="h-5 w-5 text-amber-600 flex-shrink-0" />
                <span className="text-sm text-gray-700">www.NassimiProConstuction.ma</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center space-x-2 text-sm text-gray-700 hover:text-amber-600 transition-colors">
                  <CogIcon className="h-4 w-4" />
                  <span>Génie civil</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 text-sm text-gray-700 hover:text-amber-600 transition-colors">
                  <BuildingOfficeIcon className="h-4 w-4" />
                  <span>Constructions métalliques</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 text-sm text-gray-700 hover:text-amber-600 transition-colors">
                  <UserGroupIcon className="h-4 w-4" />
                  <span>Travaux divers</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about" // your existing route path
                  className="text-sm text-gray-700 hover:text-amber-600 transition-colors"
                >
                  Qui sommes-nous
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-700 hover:text-amber-600 transition-colors">
                  Notre équipe
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-700 hover:text-amber-600 transition-colors">
                  Nos actualités
                </a>
              </li>  
            </ul>
          </div>

          {/* Resources Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-700 hover:text-amber-600 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-700 hover:text-amber-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-700 hover:text-amber-600 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-700 hover:text-amber-600 transition-colors">
                  Contact Support
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-700 hover:text-amber-600 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-amber-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              © 2024 Your Company Name. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-sm text-gray-600 hover:text-amber-600 transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-amber-600 transition-colors">
                Terms
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-amber-600 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;