
import React from 'react';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Header Navigation */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="text-lg font-medium text-gray-900">
                Yashaswi Rajesh Patki
              </div>
              <div className="h-px w-12 bg-gray-300"></div>
              <div className="text-sm text-gray-600">
                A year spent in AI is enough to make one believe in God
              </div>
            </div>
            
            <div className="flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('#about')}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('#projects')}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="text-sm text-gray-900 border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-50 transition-colors"
              >
                Let's chat →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-8 text-center max-w-4xl">
        <div className="mb-8">
          <p className="text-lg text-gray-600 mb-2">Hello! I'm Yashaswi.</p>
        </div>
        
        <h1 className="text-6xl lg:text-7xl font-light text-gray-900 leading-tight mb-16 max-w-4xl mx-auto">
          Unleashing the power of code and algorithms, I engineer a future where{' '}
          <span className="font-medium">Artificial Intelligence</span>{' '}
          reigns supreme.
        </h1>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-6 mb-16">
          <button className="bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors flex items-center gap-2">
            <Download size={16} />
            Download Resume
          </button>
          <button
            onClick={() => scrollToSection('#contact')}
            className="border border-gray-300 text-gray-900 px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-2"
          >
            Let's Connect
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/yashaswip"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/yashaswi-patki"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:ypatki@mail.yu.edu"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-16 bg-gray-300"></div>
      </div>
    </section>
  );
};

export default Hero;
