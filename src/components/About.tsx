
import React from 'react';
import { GraduationCap, Briefcase, Award, ExternalLink } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I'm Yashaswi Rajesh Patki, an AI Engineer with a passion for building intelligent, real-world systems. 
                I'm currently pursuing my Master's in Artificial Intelligence at Yeshiva University, NY, and hold a 
                Bachelor's in Information Technology from Shri Sant Gajanan Maharaj College, India.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I bring experience in ML, NLP, and Gen AI with a practical background in deploying solutions 
                at scale. My work focuses on creating AI systems that make a meaningful impact in healthcare, 
                automation, and data analysis.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                With a strong foundation in machine learning algorithms, deep learning frameworks like PyTorch 
                and TensorFlow, and hands-on experience in computer vision and natural language processing, 
                I enjoy tackling complex problems and turning innovative ideas into practical solutions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm actively looking for full-time opportunities in AI/ML where I can contribute to innovative 
                projects and continue growing as a technologist.
              </p>
              
              {/* Credly Profile Link */}
              <div className="mt-6">
                <a
                  href="https://www.credly.com/users/yashaswi-patki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <ExternalLink size={16} className="mr-2" />
                  View My Credly Profile
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-2xl flex items-center justify-center shadow-lg">
                <div className="text-8xl font-bold text-gray-300">AI</div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500 rounded-full opacity-20"></div>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Journey</h3>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <GraduationCap className="text-emerald-600" size={24} />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-gray-900">Master's in Artificial Intelligence</h4>
                <p className="text-emerald-600 font-medium">Yeshiva University, NY</p>
                <p className="text-gray-600">Aug 2023 – May 2025</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Briefcase className="text-blue-600" size={24} />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-gray-900">System Engineer</h4>
                <p className="text-blue-600 font-medium">Tata Consultancy Services</p>
                <p className="text-gray-600">Jan 2021 – Aug 2023</p>
                <p className="text-gray-700 mt-2">Automated workflows, integrated data sources, improved system efficiency</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Award className="text-purple-600" size={24} />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-gray-900">On-the-Spot Award</h4>
                <p className="text-purple-600 font-medium">Tata Consultancy Services</p>
                <p className="text-gray-600">April 2023</p>
                <p className="text-gray-700 mt-2">Recognized for exceptional performance and innovation</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <GraduationCap className="text-green-600" size={24} />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-gray-900">B.E. – Information Technology</h4>
                <p className="text-green-600 font-medium">Shri Sant Gajanan Maharaj College, India</p>
                <p className="text-gray-600">2016 – 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
