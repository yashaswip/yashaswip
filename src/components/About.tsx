
import React from 'react';
import { GraduationCap, Briefcase, Award, Code, Brain, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-slate-900"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Side - Visual */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
                <div className="flex items-center justify-center h-80">
                  <div className="relative">
                    <div className="text-8xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      AI
                    </div>
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-500 rounded-full animate-bounce"></div>
                  </div>
                </div>
                
                {/* Floating Icons */}
                <div className="absolute top-4 left-4 p-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full">
                  <Code className="text-blue-400" size={20} />
                </div>
                <div className="absolute top-4 right-4 p-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full">
                  <Brain className="text-purple-400" size={20} />
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 p-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full">
                  <Zap className="text-cyan-400" size={20} />
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div>
              <div className="space-y-6">
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                    Who I Am
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    I'm <span className="font-semibold text-blue-400">Yashaswi Rajesh Patki</span>, an AI Engineer with a passion for building intelligent, real-world systems. 
                    Currently pursuing my Master's in Artificial Intelligence at Yeshiva University, NY.
                  </p>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
                    What I Do
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    I bring experience in <span className="font-semibold text-purple-400">ML, NLP, and Gen AI</span> with a practical background in deploying solutions 
                    at scale. My work focuses on creating AI systems that make a meaningful impact in healthcare, automation, and data analysis.
                  </p>
                </div>

                <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full mr-3"></div>
                    My Expertise
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Strong foundation in <span className="font-semibold text-cyan-400">machine learning algorithms, deep learning frameworks</span> like PyTorch 
                    and TensorFlow, with hands-on experience in computer vision and natural language processing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
              <div className="text-4xl font-bold text-blue-400 mb-2">2+</div>
              <div className="text-slate-300">Years Experience</div>
            </div>
            <div className="text-center bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
              <div className="text-4xl font-bold text-purple-400 mb-2">5+</div>
              <div className="text-slate-300">AI Projects</div>
            </div>
            <div className="text-center bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
              <div className="text-4xl font-bold text-cyan-400 mb-2">4</div>
              <div className="text-slate-300">Certifications</div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 shadow-xl">
            <h3 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                My Journey
              </span>
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6 p-6 bg-slate-700/30 backdrop-blur-sm rounded-2xl border border-slate-600/50">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                  <GraduationCap className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white">Master's in Artificial Intelligence</h4>
                  <p className="text-blue-400 font-semibold text-lg">Yeshiva University, NY</p>
                  <p className="text-slate-400 font-medium">Aug 2023 – May 2025</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-6 bg-slate-700/30 backdrop-blur-sm rounded-2xl border border-slate-600/50">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                  <Briefcase className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white">System Engineer</h4>
                  <p className="text-purple-400 font-semibold text-lg">Tata Consultancy Services</p>
                  <p className="text-slate-400 font-medium">Jan 2021 – Aug 2023</p>
                  <p className="text-slate-300 mt-2">Automated workflows, integrated data sources, improved system efficiency</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-6 bg-slate-700/30 backdrop-blur-sm rounded-2xl border border-slate-600/50">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <Award className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white">On-the-Spot Award</h4>
                  <p className="text-cyan-400 font-semibold text-lg">Tata Consultancy Services</p>
                  <p className="text-slate-400 font-medium">April 2023</p>
                  <p className="text-slate-300 mt-2">Recognized for exceptional performance and innovation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold mb-4 text-white">Ready to Collaborate?</h3>
              <p className="text-lg mb-6 text-slate-300">
                I'm actively looking for full-time opportunities in AI/ML where I can contribute to innovative projects and continue growing as a technologist.
              </p>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
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
