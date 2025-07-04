
import React from 'react';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-emerald-50 via-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>

          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-200">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
                I'm always open to discussing new opportunities, collaborations, or just having a chat about AI and technology. 
                Feel free to reach out if you'd like to connect!
              </p>
              
              {/* Direct Contact Info */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-600">Email</p>
                    <a href="mailto:ypatki@mail.yu.edu" className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors duration-200">
                      ypatki@mail.yu.edu
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-600">Location</p>
                    <p className="text-purple-600 font-semibold">New York, NY</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center">
              <h4 className="text-2xl font-bold text-gray-900 mb-8">Connect on Social</h4>
              <div className="flex justify-center space-x-8">
                <a
                  href="https://linkedin.com/in/yashaswi-patki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center"
                >
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg group-hover:shadow-xl">
                    <Linkedin size={28} />
                  </div>
                  <span className="mt-3 text-gray-700 font-medium group-hover:text-blue-600 transition-colors duration-200">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/yashaswip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center"
                >
                  <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-300 transform hover:scale-110 shadow-lg group-hover:shadow-xl">
                    <Github size={28} />
                  </div>
                  <span className="mt-3 text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-200">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
