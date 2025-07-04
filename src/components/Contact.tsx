
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
              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, collaborations, or just having a chat about AI and technology. 
                Feel free to reach out if you'd like to connect!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-emerald-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                <a href="mailto:ypatki@mail.yu.edu" className="text-emerald-600 hover:text-emerald-700 text-lg">
                  ypatki@mail.yu.edu
                </a>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-purple-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                <p className="text-gray-600 text-lg">New York, NY</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center">
              <h4 className="font-semibold text-gray-900 mb-6 text-xl">Connect on Social</h4>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://linkedin.com/in/yashaswi-patki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/yashaswip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-200 transform hover:scale-105"
                >
                  <Github size={24} />
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
