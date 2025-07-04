
import React from 'react';
import { Github, Linkedin, Mail, Download, Sparkles, Zap, Code } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-blue-50 to-cyan-50 pt-20 relative overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Main Content */}
            <div className="text-left lg:pr-8">
              {/* Animated Badge */}
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg animate-fade-in">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Available for opportunities</span>
              </div>

              {/* Main Title */}
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="block mb-2">Hello, I'm</span>
                <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
                  Yashaswi
                </span>
              </h1>

              {/* Subtitle with typing effect */}
              <div className="text-2xl lg:text-3xl text-gray-700 mb-6 font-light">
                <span className="inline-flex items-center gap-2">
                  <Sparkles className="text-emerald-500 animate-bounce" size={28} />
                  AI Engineer | ML | NLP | Gen AI
                </span>
              </div>

              {/* Description */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                Building intelligent systems with impact. Passionate about creating AI solutions that make a difference in the world.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">3+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">10+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">4</div>
                  <div className="text-sm text-gray-600">Certifications</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <button className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 hover:from-emerald-700 hover:to-blue-700">
                  <Download size={20} />
                  Download Resume
                </button>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300 flex items-center gap-2 backdrop-blur-sm bg-white/50"
                >
                  <Mail size={20} />
                  Let's Connect
                </button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="https://github.com/yashaswip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-700 hover:text-emerald-600 border border-gray-200"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/yashaswi-patki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-700 hover:text-blue-600 border border-gray-200"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:ypatki@mail.yu.edu"
                  className="w-14 h-14 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-700 hover:text-emerald-600 border border-gray-200"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>

            {/* Right Side - Robot Image with Effects */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main Robot Image */}
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl bg-gradient-to-br from-emerald-400 via-blue-500 to-purple-500 p-2 shadow-2xl transform hover:scale-105 transition-all duration-500">
                  <div className="w-full h-full rounded-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                      alt="AI Robot" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Floating Icons */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-bounce">
                  <Code className="text-emerald-600" size={24} />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-bounce delay-75">
                  <Zap className="text-blue-600" size={24} />
                </div>
                <div className="absolute top-1/2 -right-8 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center animate-bounce delay-150">
                  <Sparkles className="text-purple-600" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-emerald-200 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-blue-200 rounded-full opacity-30 animate-bounce delay-75"></div>
      <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-cyan-200 rounded-full opacity-30 animate-bounce delay-150"></div>
      <div className="absolute bottom-1/3 right-1/4 w-14 h-14 bg-purple-200 rounded-full opacity-30 animate-bounce delay-300"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-emerald-300 to-blue-300 rounded-full opacity-20 blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full opacity-20 blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;
