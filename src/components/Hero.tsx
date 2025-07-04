
import React from 'react';
import { Github, Linkedin, Mail, Download, ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/3 to-purple-500/3 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Grid Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236B7280' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 mb-8 shadow-sm animate-fade-in">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Open to opportunities</span>
          </div>

          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-6xl lg:text-7xl font-bold mb-4 leading-tight animate-fade-in">
              <span className="text-gray-900 block mb-2">Hi, I'm</span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Yashaswi
              </span>
            </h1>
            <div className="flex items-center justify-center gap-4 text-xl lg:text-2xl text-gray-600 font-light">
              <span className="opacity-0 animate-[fade-in_0.8s_ease-out_0.5s_forwards] hover:scale-110 hover:text-blue-600 transition-all duration-300 cursor-default">
                AI Engineer
              </span>
              <div className="w-1 h-6 bg-purple-500 rounded-full opacity-0 animate-[fade-in_0.6s_ease-out_0.7s_forwards] animate-pulse"></div>
              <span className="opacity-0 animate-[slide-in-right_0.8s_ease-out_0.9s_forwards] hover:scale-110 hover:text-emerald-600 transition-all duration-300 cursor-default">
                ML Specialist
              </span>
              <div className="w-1 h-6 bg-blue-500 rounded-full opacity-0 animate-[fade-in_0.6s_ease-out_1.1s_forwards] animate-pulse"></div>
              <span className="opacity-0 animate-[scale-in_0.8s_ease-out_1.3s_forwards] hover:scale-110 hover:text-purple-600 transition-all duration-300 cursor-default">
                NLP Expert
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Crafting intelligent systems that bridge the gap between complex algorithms and real-world impact. 
            Passionate about pushing the boundaries of artificial intelligence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transform hover:-translate-y-1">
              <Download size={20} />
              <span>Download Resume</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="group bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Mail size={20} />
              <span>Let's Connect</span>
              <Sparkles size={16} className="group-hover:rotate-12 transition-transform" />
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/yashaswip"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 rounded-full flex items-center justify-center transition-all duration-300 text-gray-600 hover:text-gray-900 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/yashaswi-patki"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 rounded-full flex items-center justify-center transition-all duration-300 text-gray-600 hover:text-blue-600 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:ypatki@mail.yu.edu"
              className="w-14 h-14 bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 rounded-full flex items-center justify-center transition-all duration-300 text-gray-600 hover:text-purple-600 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
