
import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-blue-50 to-cyan-50 pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium text-gray-700">Available for opportunities</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="block mb-2">Hello, I'm</span>
            <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Yashaswi
            </span>
          </h1>

          {/* Subtitle */}
          <div className="text-2xl lg:text-3xl text-gray-700 mb-6 font-light">
            AI Engineer | ML | NLP | Gen AI
          </div>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Building intelligent systems with impact. Passionate about creating AI solutions that make a difference in the world.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300 flex items-center gap-2 bg-white"
            >
              <Mail size={20} />
              Let's Connect
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/yashaswip"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 text-gray-700 hover:text-emerald-600"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/yashaswi-patki"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 text-gray-700 hover:text-blue-600"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:ypatki@mail.yu.edu"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 text-gray-700 hover:text-emerald-600"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
