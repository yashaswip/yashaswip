
import React from 'react';
import { Code, Database, Cloud, Award } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="text-blue-400" size={24} />,
      skills: ['Python', 'R', 'SQL'],
      color: 'blue'
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Database className="text-purple-400" size={24} />,
      skills: ['TensorFlow', 'PyTorch', 'Scikit-Learn', 'Hugging Face', 'NLTK', 'OpenCV', 'Transformers', 'XGBoost'],
      color: 'purple'
    },
    {
      title: 'Tools & Platforms',
      icon: <Cloud className="text-cyan-400" size={24} />,
      skills: ['AWS (EC2, S3)', 'GCP', 'Git', 'PowerApps', 'Power Automate'],
      color: 'cyan'
    },
    {
      title: 'Certifications',
      icon: <Award className="text-emerald-400" size={24} />,
      skills: ['Data Analysis with Python', 'Machine Learning with Python', 'Intermediate R', 'Python 101 for Data Science'],
      color: 'emerald'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-slate-800/30 border-slate-700/50 hover:border-blue-500/50',
      purple: 'bg-slate-800/30 border-slate-700/50 hover:border-purple-500/50',
      cyan: 'bg-slate-800/30 border-slate-700/50 hover:border-cyan-500/50',
      emerald: 'bg-slate-800/30 border-slate-700/50 hover:border-emerald-500/50'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getBadgeColors = (color: string) => {
    const colors = {
      blue: 'bg-blue-500/20 text-blue-300 border border-blue-500/30',
      purple: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
      cyan: 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30',
      emerald: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border-2 backdrop-blur-sm transition-all duration-300 hover:shadow-lg ${getColorClasses(category.color)}`}
              >
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
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
            <h3 className="text-2xl font-bold text-white mb-8">Specialty Areas</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                <div className="text-4xl mb-4">🤖</div>
                <h4 className="text-lg font-semibold text-white mb-2">Machine Learning</h4>
                <p className="text-slate-300">Classification, regression, clustering, and ensemble methods</p>
              </div>
              <div className="p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                <div className="text-4xl mb-4">💬</div>
                <h4 className="text-lg font-semibold text-white mb-2">Natural Language Processing</h4>
                <p className="text-slate-300">Text classification, sentiment analysis, and language models</p>
              </div>
              <div className="p-6 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                <div className="text-4xl mb-4">✨</div>
                <h4 className="text-lg font-semibold text-white mb-2">Generative AI</h4>
                <p className="text-slate-300">Large language models, multimodal AI, and generative systems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
