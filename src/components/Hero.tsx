
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
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-6xl font-bold text-gray-600">
                YRP
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Yashaswi Rajesh Patki
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6 font-light">
              AI Engineer | ML | NLP | Computer Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Building intelligent systems with impact. Passionate about creating AI solutions that make a difference.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <Mail size={20} />
              Let's Connect
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/yashaswip"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-700 hover:text-emerald-600"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yashaswi-patki"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-700 hover:text-blue-600"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:ypatki@mail.yu.edu"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-700 hover:text-emerald-600"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-emerald-200 rounded-full opacity-50 animate-bounce"></div>
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-blue-200 rounded-full opacity-50 animate-bounce delay-75"></div>
      <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-cyan-200 rounded-full opacity-50 animate-bounce delay-150"></div>
    </section>
  );
};

export default Hero;
