
import React from 'react';
import { GraduationCap, Briefcase, Award, Code, Brain, Zap, Bot, Cpu, CircuitBoard } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Side - Robot Visual */}
            <div className="relative">
              <div className="relative bg-white rounded-3xl p-8 border border-gray-200 shadow-xl">
                <div className="flex items-center justify-center h-80">
                  <div className="relative">
                    {/* Main Robot Body */}
                    <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-6 border-2 border-blue-200">
                      <div className="w-32 h-32 bg-white rounded-xl border border-gray-200 flex items-center justify-center mb-4 shadow-sm">
                        <Bot className="text-blue-600 animate-pulse" size={48} />
                      </div>
                      
                      {/* Robot Arms */}
                      <div className="absolute -left-4 top-8 w-8 h-16 bg-gradient-to-b from-blue-200 to-purple-200 rounded-full border border-blue-300"></div>
                      <div className="absolute -right-4 top-8 w-8 h-16 bg-gradient-to-b from-blue-200 to-purple-200 rounded-full border border-blue-300"></div>
                      
                      {/* Robot Legs */}
                      <div className="absolute -bottom-2 left-6 w-6 h-12 bg-gradient-to-b from-blue-200 to-purple-200 rounded-b-full border border-blue-300"></div>
                      <div className="absolute -bottom-2 right-6 w-6 h-12 bg-gradient-to-b from-blue-200 to-purple-200 rounded-b-full border border-blue-300"></div>
                    </div>
                    
                    {/* Floating Tech Elements */}
                    <div className="absolute -top-2 -left-2 w-8 h-8 bg-blue-500 rounded-full animate-bounce flex items-center justify-center">
                      <Code className="text-white" size={16} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500 rounded-full animate-pulse flex items-center justify-center">
                      <Brain className="text-white" size={16} />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-cyan-500 rounded-full animate-bounce flex items-center justify-center">
                      <Cpu className="text-white" size={16} />
                    </div>
                  </div>
                </div>
                
                {/* Floating Circuit Icons */}
                <div className="absolute top-4 left-4 p-2 bg-white border border-gray-200 rounded-full shadow-sm animate-float">
                  <CircuitBoard className="text-blue-600" size={20} />
                </div>
                <div className="absolute top-4 right-4 p-2 bg-white border border-gray-200 rounded-full shadow-sm animate-pulse">
                  <Zap className="text-purple-600" size={20} />
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div>
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                    Who I Am
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    I'm <span className="font-semibold text-blue-600">Yashaswi Rajesh Patki</span>, an AI Engineer with a passion for building intelligent, real-world systems. 
                    Completed my Master's in Artificial Intelligence at Yeshiva University, NY.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-3 h-3 bg-purple-600 rounded-full mr-3"></div>
                    What I Do
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    I bring experience in <span className="font-semibold text-purple-600">ML, NLP, and Gen AI</span> with a practical background in deploying solutions 
                    at scale. My work focuses on creating AI systems that make a meaningful impact in healthcare, automation, and data analysis.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-3 h-3 bg-cyan-600 rounded-full mr-3"></div>
                    My Expertise
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Strong foundation in <span className="font-semibold text-cyan-600">machine learning algorithms, deep learning frameworks</span> like PyTorch 
                    and TensorFlow, with hands-on experience in computer vision and natural language processing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl">
            <h3 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                My Journey
              </span>
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-gray-200">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <GraduationCap className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900">Master's in Artificial Intelligence</h4>
                  <p className="text-blue-600 font-semibold text-lg">Yeshiva University, NY</p>
                  <p className="text-gray-500 font-medium">Aug 2023 – May 2025</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-6 bg-gradient-to-r from-purple-50 to-cyan-50 rounded-2xl border border-gray-200">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                  <Briefcase className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900">System Engineer</h4>
                  <p className="text-purple-600 font-semibold text-lg">Tata Consultancy Services</p>
                  <p className="text-gray-500 font-medium">Jan 2021 – Aug 2023</p>
                  <p className="text-gray-600 mt-2">Automated workflows, integrated data sources, improved system efficiency</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-6 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl border border-gray-200">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
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

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-cyan-50 rounded-3xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Ready to Collaborate?</h3>
              <p className="text-lg mb-6 text-gray-600">
                I'm actively looking for full-time opportunities in AI/ML where I can contribute to innovative projects and continue growing as a technologist.
              </p>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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
