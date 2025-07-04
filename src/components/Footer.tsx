
import React from 'react';
import { Github, Linkedin, Mail, Heart, BookOpen } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Brand Section */}
            <div>
              <div className="text-3xl font-bold mb-3">
                <span className="bg-gradient-to-r from-emerald-300 via-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-lg">
                  Yashaswi Patki
                </span>
              </div>
              <div className="text-lg font-semibold text-emerald-400 mb-4">
                AI & Systems Engineer
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                Specialized in enterprise automation, AI integration, and scalable system architecture.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Get In Touch</h3>
              <div className="space-y-3 mb-6">
                <p className="text-gray-400">
                  <a href="mailto:ypatki@mail.yu.edu" className="hover:text-emerald-400 transition-colors duration-200 font-medium">
                    ypatki@mail.yu.edu
                  </a>
                </p>
                <p className="text-gray-400 font-medium">New York, NY</p>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/yashaswip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:scale-125 transform"
                >
                  <Github size={28} />
                </a>
                <a
                  href="https://linkedin.com/in/yashaswi-patki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-125 transform"
                >
                  <Linkedin size={28} />
                </a>
                <a
                  href="https://www.researchgate.net/profile/Yashaswi-Patki?ev=hdr_xprf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-all duration-300 hover:scale-125 transform"
                >
                  <BookOpen size={28} />
                </a>
                <a
                  href="mailto:ypatki@mail.yu.edu"
                  className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:scale-125 transform"
                >
                  <Mail size={28} />
                </a>
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
