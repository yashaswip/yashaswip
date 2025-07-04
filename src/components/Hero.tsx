
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
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-4 py-2 mb-8 shadow-lg">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-slate-300">Open to opportunities</span>
          </div>

          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="text-white block mb-2">Hi, I'm</span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Yashaswi
              </span>
            </h1>
            <div className="flex items-center justify-center gap-4 text-xl lg:text-2xl text-slate-300 font-light">
              <span>AI Engineer</span>
              <div className="w-1 h-6 bg-purple-400 rounded-full"></div>
              <span>ML Specialist</span>
              <div className="w-1 h-6 bg-blue-400 rounded-full"></div>
              <span>NLP Expert</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-3xl mx-auto">
            Crafting intelligent systems that bridge the gap between complex algorithms and real-world impact. 
            Passionate about pushing the boundaries of artificial intelligence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transform hover:-translate-y-1">
              <Download size={20} />
              <span>Download Resume</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="group bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 hover:border-slate-500/50 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-3 hover:shadow-lg transform hover:-translate-y-1"
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
              className="w-14 h-14 bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 rounded-full flex items-center justify-center transition-all duration-300 text-slate-300 hover:text-white hover:shadow-lg transform hover:-translate-y-1"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/yashaswi-patki"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 rounded-full flex items-center justify-center transition-all duration-300 text-slate-300 hover:text-blue-400 hover:shadow-lg transform hover:-translate-y-1"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:ypatki@mail.yu.edu"
              className="w-14 h-14 bg-slate-800/50 hover:bg-slate-700/50 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 rounded-full flex items-center justify-center transition-all duration-300 text-slate-300 hover:text-purple-400 hover:shadow-lg transform hover:-translate-y-1"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
