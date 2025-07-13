import React from "react";
import { ChevronDown, Download } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Amrendra Singh
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              BTech CSE-AI Student passionate about technology and artificial
              intelligence
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Currently pursuing Computer Science with AI specialization at KIET
              Group of Institutions, Ghaziabad. Building innovative solutions
              with modern web technologies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToAbout}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              Learn More About Me
              <ChevronDown size={20} />
            </button>
            <a
              href="mailto:singhamrendra1299@gmail.com"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToAbout}
          className="animate-bounce text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          <ChevronDown size={32} />
        </button>
      </div>

      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-indigo-200 rounded-full opacity-60 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-purple-200 rounded-full opacity-60 animate-pulse delay-500"></div>
    </section>
  );
};

export default Hero;
