
import React from 'react';
import { Code, Database, Cloud, Award } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="text-emerald-600" size={24} />,
      skills: ['Python', 'R', 'SQL'],
      color: 'emerald'
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Database className="text-blue-600" size={24} />,
      skills: ['TensorFlow', 'PyTorch', 'Scikit-Learn', 'Hugging Face', 'NLTK', 'OpenCV', 'Transformers', 'XGBoost'],
      color: 'blue'
    },
    {
      title: 'Tools & Platforms',
      icon: <Cloud className="text-purple-600" size={24} />,
      skills: ['AWS (EC2, S3)', 'GCP', 'Git', 'PowerApps', 'Power Automate'],
      color: 'purple'
    },
    {
      title: 'Certifications',
      icon: <Award className="text-orange-600" size={24} />,
      skills: ['Data Analysis with Python', 'Machine Learning with Python', 'Intermediate R', 'Python 101 for Data Science'],
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: 'bg-emerald-50 border-emerald-200 hover:border-emerald-300',
      blue: 'bg-blue-50 border-blue-200 hover:border-blue-300',
      purple: 'bg-purple-50 border-purple-200 hover:border-purple-300',
      orange: 'bg-orange-50 border-orange-200 hover:border-orange-300'
    };
    return colors[color as keyof typeof colors] || colors.emerald;
  };

  const getBadgeColors = (color: string) => {
    const colors = {
      emerald: 'bg-emerald-100 text-emerald-800',
      blue: 'bg-blue-100 text-blue-800',
      purple: 'bg-purple-100 text-purple-800',
      orange: 'bg-orange-100 text-orange-800'
    };
    return colors[color as keyof typeof colors] || colors.emerald;
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg ${getColorClasses(category.color)}`}
              >
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${getBadgeColors(category.color)}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Specialty Areas */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Specialty Areas</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">🤖</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Machine Learning</h4>
                <p className="text-gray-600">Classification, regression, clustering, and ensemble methods</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">💬</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Natural Language Processing</h4>
                <p className="text-gray-600">Text classification, sentiment analysis, and language models</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">✨</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Generative AI</h4>
                <p className="text-gray-600">Large language models, multimodal AI, and generative systems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
