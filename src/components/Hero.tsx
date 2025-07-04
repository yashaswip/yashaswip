
import React from 'react';
import { Github, Linkedin, Mail, Download, Code, Zap, Sparkles, Cpu, Brain, Rocket } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-blue-50 to-cyan-50 pt-20 relative overflow-hidden">
      {/* Floating Icons Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 animate-bounce delay-100">
          <Code className="text-emerald-400 opacity-60" size={24} />
        </div>
        <div className="absolute top-32 right-16 animate-pulse delay-300">
          <Brain className="text-blue-400 opacity-60" size={28} />
        </div>
        <div className="absolute bottom-32 left-20 animate-bounce delay-500">
          <Zap className="text-purple-400 opacity-60" size={20} />
        </div>
        <div className="absolute top-40 left-1/4 animate-pulse delay-700">
          <Sparkles className="text-pink-400 opacity-60" size={16} />
        </div>
        <div className="absolute bottom-40 right-1/4 animate-bounce delay-900">
          <Cpu className="text-cyan-400 opacity-60" size={24} />
        </div>
        <div className="absolute top-60 right-32 animate-pulse delay-1100">
          <Rocket className="text-orange-400 opacity-60" size={20} />
        </div>
      </div>

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-gradient-to-r from-emerald-200 to-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full opacity-30 animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Status Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-sm transform hover:scale-105 transition-transform duration-300">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Available for opportunities</span>
          </div>

          {/* Animated Main Title */}
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="block mb-2 animate-fade-in">Hello, I'm</span>
            <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in delay-300 inline-block transform hover:scale-105 transition-transform duration-300">
              Yashaswi
            </span>
          </h1>

          {/* Animated Subtitle with Typewriter Effect */}
          <div className="text-2xl lg:text-3xl text-gray-700 mb-6 font-light animate-fade-in delay-500">
            <span className="inline-block">AI Engineer</span>
            <span className="animate-pulse mx-2">|</span>
            <span className="inline-block">ML</span>
            <span className="animate-pulse mx-2">|</span>
            <span className="inline-block">NLP</span>
          </div>

          {/* Animated Description */}
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto animate-fade-in delay-700">
            Building intelligent systems with impact. Passionate about creating AI solutions that make a difference in the world.
          </p>

          {/* Animated CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in delay-900">
            <button className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 transform hover:scale-105 hover:-translate-y-1">
              <Download size={20} className="animate-bounce" />
              Download Resume
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300 flex items-center gap-2 bg-white transform hover:scale-105 hover:-translate-y-1"
            >
              <Mail size={20} />
              Let's Connect
            </button>
          </div>

          {/* Animated Social Links */}
          <div className="flex justify-center gap-4 animate-fade-in delay-1100">
            <a
              href="https://github.com/yashaswip"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 text-gray-700 hover:text-emerald-600 transform hover:scale-110 hover:-translate-y-1"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/yashaswi-patki"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 text-gray-700 hover:text-blue-600 transform hover:scale-110 hover:-translate-y-1"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:ypatki@mail.yu.edu"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 text-gray-700 hover:text-emerald-600 transform hover:scale-110 hover:-translate-y-1"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Animated Character Emojis */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 left-8 text-4xl animate-bounce delay-200">🤖</div>
            <div className="absolute top-1/2 right-8 text-3xl animate-pulse delay-400">⚡</div>
            <div className="absolute bottom-1/3 left-16 text-2xl animate-bounce delay-600">💡</div>
            <div className="absolute bottom-1/4 right-16 text-3xl animate-pulse delay-800">🚀</div>
            <div className="absolute top-20 right-1/4 text-2xl animate-bounce delay-1000">🎯</div>
            <div className="absolute bottom-20 left-1/3 text-2xl animate-pulse delay-1200">✨</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
