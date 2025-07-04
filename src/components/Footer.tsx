
import React from 'react';
import { Github, Linkedin, Mail, Heart, Award } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div>
              <div className="text-4xl font-extrabold mb-2">
                <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Yashaswi Rajesh Patki
                </span>
              </div>
              <div className="text-lg font-medium text-emerald-400 mb-4">
                AI Engineer & System Architect
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Passionate about building intelligent systems that make a difference through innovative technology solutions.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/yashaswip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 hover:scale-110 transform"
                >
                  <Github size={28} />
                </a>
                <a
                  href="https://linkedin.com/in/yashaswi-patki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform"
                >
                  <Linkedin size={28} />
                </a>
                <a
                  href="mailto:ypatki@mail.yu.edu"
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 hover:scale-110 transform"
                >
                  <Mail size={28} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <a
                    href="https://www.credly.com/users/yashaswi-patki"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center hover:translate-x-1 transform"
                  >
                    <Award size={18} className="mr-2" />
                    Credly Profile
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Get In Touch</h3>
              <div className="space-y-3">
                <p className="text-gray-400">
                  <a href="mailto:ypatki@mail.yu.edu" className="hover:text-emerald-400 transition-colors duration-200 font-medium">
                    ypatki@mail.yu.edu
                  </a>
                </p>
                <p className="text-gray-400">
                  <a href="tel:+15513442977" className="hover:text-emerald-400 transition-colors duration-200 font-medium">
                    +1 551-344-2977
                  </a>
                </p>
                <p className="text-gray-400 font-medium">New York, NY</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0 font-medium">
              © {currentYear} Yashaswi Rajesh Patki. All rights reserved.
            </p>
            <p className="text-gray-400 flex items-center font-medium">
              Built with <Heart className="text-red-500 mx-2 animate-pulse" size={18} /> using React.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
