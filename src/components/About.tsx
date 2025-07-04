
import React from 'react';
import { GraduationCap, Briefcase, Award, Brain, Code, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Introduction */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <Brain className="text-blue-600 mr-3" size={32} />
                <h3 className="text-2xl font-bold text-gray-900">AI Engineer & Innovator</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                I'm <span className="font-semibold text-blue-600">Yashaswi Rajesh Patki</span>, an AI Engineer with a passion for building intelligent, real-world systems. 
                With a Master's in Artificial Intelligence from Yeshiva University, NY, I bring comprehensive experience in <span className="font-semibold text-purple-600">ML, NLP, and Gen AI</span> with a practical background in deploying solutions at scale.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My work focuses on creating AI systems that make meaningful impact in healthcare, automation, and data analysis. I have a strong foundation in machine learning algorithms, deep learning frameworks like <span className="font-semibold text-cyan-600">PyTorch and TensorFlow</span>, with hands-on experience in computer vision and natural language processing.
              </p>
            </div>

            {/* Right Column - Skills & Expertise */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <Code className="text-purple-600 mr-3" size={32} />
                <h3 className="text-2xl font-bold text-gray-900">Technical Expertise</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Core Competencies</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Machine Learning</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Deep Learning</span>
                    <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">Natural Language Processing</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Computer Vision</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">PyTorch</span>
                    <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">TensorFlow</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Python</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Gen AI</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Focus Areas</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Healthcare AI Solutions</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>Process Automation</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>Data Analysis & Insights</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Motivational Quote */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-12 text-center border border-gray-200">
            <div className="flex items-center justify-center mb-4">
              <Target className="text-blue-600 mr-3" size={28} />
              <h3 className="text-xl font-bold text-gray-900">My Philosophy</h3>
            </div>
            <blockquote className="text-xl italic text-gray-700 mb-2">
              "Be like a postage stamp, stick to one thing until you get there"
            </blockquote>
            <cite className="text-gray-500 font-medium">- Josh Billings</cite>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              This philosophy drives my approach to AI engineering - deep focus, persistent dedication, and unwavering commitment to delivering impactful solutions.
            </p>
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
            <h3 className="text-3xl font-bold text-center mb-10 text-gray-900">
              Professional Journey
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-6 p-6 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-all duration-300 hover:scale-[1.02] transform">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center hover:animate-pulse">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900">Master's in Artificial Intelligence</h4>
                  <p className="text-blue-600 font-semibold text-lg">Yeshiva University, NY</p>
                  <p className="text-gray-500 font-medium">Aug 2023 – May 2025</p>
                  <p className="text-gray-600 mt-2">Advanced coursework in ML algorithms, deep learning architectures, and AI system deployment</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-6 bg-purple-50 rounded-2xl hover:bg-purple-100 transition-all duration-300 hover:scale-[1.02] transform">
                <div className="flex-shrink-0 w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center hover:animate-pulse">
                  <Briefcase className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900">System Engineer</h4>
                  <p className="text-purple-600 font-semibold text-lg">Tata Consultancy Services</p>
                  <p className="text-gray-500 font-medium">Jan 2021 – Aug 2023</p>
                  <p className="text-gray-600 mt-2">Automated enterprise workflows, integrated complex data sources, and improved system efficiency by 40%</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-6 bg-cyan-50 rounded-2xl hover:bg-cyan-100 transition-all duration-300 hover:scale-[1.02] transform">
                <div className="flex-shrink-0 w-14 h-14 bg-cyan-600 rounded-full flex items-center justify-center hover:animate-pulse">
                  <Award className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900">On-the-Spot Award</h4>
                  <p className="text-cyan-600 font-semibold text-lg">Tata Consultancy Services</p>
                  <p className="text-gray-500 font-medium">April 2023</p>
                  <p className="text-gray-600 mt-2">Recognized for exceptional performance in developing innovative automation solutions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] transform border border-gray-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Ready to Collaborate?</h3>
              <p className="text-lg mb-6 text-gray-600 max-w-3xl mx-auto">
                I'm actively seeking full-time opportunities in AI/ML where I can contribute to innovative projects, solve complex challenges, 
                and continue growing as a technologist. Let's build the future of AI together.
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
