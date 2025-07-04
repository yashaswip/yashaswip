import React from 'react';
import { GraduationCap, Briefcase, Award, Quote } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Main Content - Full Width */}
          <div className="mb-16">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-3 animate-pulse"></div>
                  Who I Am
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  I'm <span className="font-semibold text-blue-600">Yashaswi Rajesh Patki</span>, an AI Engineer with a passion for building intelligent, real-world systems. 
                  Completed graduation with Master's in Artificial Intelligence at Yeshiva University, NY.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="w-3 h-3 bg-purple-600 rounded-full mr-3 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  What I Do
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  I bring experience in <span className="font-semibold text-purple-600">ML, NLP, and Gen AI</span> with a practical background in deploying solutions 
                  at scale. My work focuses on creating AI systems that make a meaningful impact in healthcare, automation, and data analysis.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{animationDelay: '0.4s'}}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="w-3 h-3 bg-cyan-600 rounded-full mr-3 animate-pulse" style={{animationDelay: '1s'}}></div>
                  My Expertise
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Strong foundation in <span className="font-semibold text-cyan-600">machine learning algorithms, deep learning frameworks</span> like PyTorch 
                  and TensorFlow, with hands-on experience in computer vision and natural language processing.
                </p>
              </div>
            </div>
          </div>

          {/* Motivational Quote */}
          <div className="mb-16 animate-fade-in" style={{animationDelay: '0.5s'}}>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105 transform">
              <div className="flex items-center justify-center mb-4">
                <Quote className="text-blue-600 mr-3" size={32} />
                <Quote className="text-purple-600 transform rotate-180" size={32} />
              </div>
              <blockquote className="text-center">
                <p className="text-2xl font-medium text-gray-800 italic mb-4 leading-relaxed">
                  "Be like a postage stamp, stick to one thing until you get there"
                </p>
                <footer className="text-lg text-gray-600 font-semibold">
                  — Josh Billings
                </footer>
              </blockquote>
            </div>
          </div>

          {/* Animated Timeline */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
              My Journey
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6 p-6 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-all duration-300 hover:scale-105 transform">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center hover:animate-pulse">
                  <GraduationCap className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900">Master's in Artificial Intelligence</h4>
                  <p className="text-blue-600 font-semibold text-lg">Yeshiva University, NY</p>
                  <p className="text-gray-500 font-medium">Aug 2023 – May 2025</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-6 bg-purple-50 rounded-2xl hover:bg-purple-100 transition-all duration-300 hover:scale-105 transform">
                <div className="flex-shrink-0 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center hover:animate-pulse">
                  <Briefcase className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900">System Engineer</h4>
                  <p className="text-purple-600 font-semibold text-lg">Tata Consultancy Services</p>
                  <p className="text-gray-500 font-medium">Jan 2021 – Aug 2023</p>
                  <p className="text-gray-600 mt-2">Automated workflows, integrated data sources, improved system efficiency</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-6 bg-cyan-50 rounded-2xl hover:bg-cyan-100 transition-all duration-300 hover:scale-105 transform">
                <div className="flex-shrink-0 w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center hover:animate-pulse">
                  <Award className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900">On-the-Spot Award</h4>
                  <p className="text-cyan-600 font-semibold text-lg">Tata Consultancy Services</p>
                  <p className="text-gray-500 font-medium">April 2023</p>
                  <p className="text-gray-600 mt-2">Recognized for exceptional performance and innovation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Call to Action */}
          <div className="text-center mt-16 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 transform">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Ready to Collaborate?</h3>
              <p className="text-lg mb-6 text-gray-600">
                I'm actively looking for full-time opportunities in AI/ML where I can contribute to innovative projects and continue growing as a technologist.
              </p>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 transform hover:shadow-lg"
              >
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
