
import React from 'react';
import { GraduationCap, Briefcase, Award, Code, Brain, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Side - Image/Visual */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-blue-100 via-purple-100 to-cyan-100 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center justify-center h-80">
                  <div className="relative">
                    <div className="text-8xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                      AI
                    </div>
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-500 rounded-full animate-bounce"></div>
                  </div>
                </div>
                
                {/* Floating Icons */}
                <div className="absolute top-4 left-4 p-2 bg-white rounded-full shadow-lg">
                  <Code className="text-blue-500" size={20} />
                </div>
                <div className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg">
                  <Brain className="text-purple-500" size={20} />
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 p-2 bg-white rounded-full shadow-lg">
                  <Zap className="text-cyan-500" size={20} />
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div>
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    Who I Am
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    I'm <span className="font-semibold text-blue-600">Yashaswi Rajesh Patki</span>, an AI Engineer with a passion for building intelligent, real-world systems. 
                    Currently pursuing my Master's in Artificial Intelligence at Yeshiva University, NY.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                    What I Do
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    I bring experience in <span className="font-semibold text-purple-600">ML, NLP, and Gen AI</span> with a practical background in deploying solutions 
                    at scale. My work focuses on creating AI systems that make a meaningful impact in healthcare, automation, and data analysis.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full mr-3"></div>
                    My Expertise
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Strong foundation in <span className="font-semibold text-cyan-600">machine learning algorithms, deep learning frameworks</span> like PyTorch 
                    and TensorFlow, with hands-on experience in computer vision and natural language processing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">2+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl font-bold text-purple-600 mb-2">5+</div>
              <div className="text-gray-600">AI Projects</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl font-bold text-cyan-600 mb-2">4</div>
              <div className="text-gray-600">Certifications</div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                My Journey
              </span>
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                  <GraduationCap className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900">Master's in Artificial Intelligence</h4>
                  <p className="text-blue-600 font-semibold text-lg">Yeshiva University, NY</p>
                  <p className="text-gray-600 font-medium">Aug 2023 – May 2025</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-6 bg-gradient-to-r from-purple-50 to-cyan-50 rounded-2xl">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                  <Briefcase className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900">System Engineer</h4>
                  <p className="text-purple-600 font-semibold text-lg">Tata Consultancy Services</p>
                  <p className="text-gray-600 font-medium">Jan 2021 – Aug 2023</p>
                  <p className="text-gray-700 mt-2">Automated workflows, integrated data sources, improved system efficiency</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <Award className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900">On-the-Spot Award</h4>
                  <p className="text-cyan-600 font-semibold text-lg">Tata Consultancy Services</p>
                  <p className="text-gray-600 font-medium">April 2023</p>
                  <p className="text-gray-700 mt-2">Recognized for exceptional performance and innovation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Collaborate?</h3>
              <p className="text-lg mb-6 text-blue-100">
                I'm actively looking for full-time opportunities in AI/ML where I can contribute to innovative projects and continue growing as a technologist.
              </p>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
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
