import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      
      <div className="max-w-7xl mx-auto px-6 py-14">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Logo & About */}
          <div>
            {/* <img
              src="https://sample.realhomes.io/single-property-02/wp-content/uploads/sites/3/2021/09/logo-1.png"
              alt="Patil Properties"
              className="w-40 mb-4"
            /> */}
            <p className="text-sm leading-relaxed text-gray-400">
              Simply #1 Real Estate Theme. We provide premium properties
              and trusted real estate solutions tailored to your needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Properties</li>
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Property Types
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Apartments</li>
              <li className="hover:text-white cursor-pointer">Villas</li>
              <li className="hover:text-white cursor-pointer">Commercial</li>
              <li className="hover:text-white cursor-pointer">Luxury Homes</li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <p className="text-sm text-gray-400">
              123 Main Road, Nagpur, India
            </p>
            <p className="text-sm text-gray-400 mt-2">
              +91 98765 43210
            </p>
            <p className="text-sm text-gray-400 mt-2">
              info@patilproperties.com
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <Facebook className="hover:text-white cursor-pointer" />
              <Instagram className="hover:text-white cursor-pointer" />
              <Twitter className="hover:text-white cursor-pointer" />
              <Linkedin className="hover:text-white cursor-pointer" />
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
          © 2024 Patil Properties. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
