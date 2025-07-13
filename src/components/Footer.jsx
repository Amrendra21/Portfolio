import React from "react";
import { Heart, Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Amrendra Singh</h3>
            <p className="text-gray-300">
              BTech CSE-AI Student passionate about technology and innovation.
              Building the future with code and artificial intelligence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Skills", "Education", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="block text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Me</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Amrendra21"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/amrendra21"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com/_amrendra21"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-pink-600 transition-colors duration-200"
              >
                <Instagram size={20} />
              </a>
            </div>
            <p className="text-gray-300 text-sm">
              Follow me for updates on my projects and tech journey
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} Amrendra Singh. All rights reserved.
            </p>
            <p className="text-gray-300 text-sm flex items-center gap-1 mt-2 md:mt-0">
              Made with <Heart className="text-red-500" size={16} /> using React
              & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
