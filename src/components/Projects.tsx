import React from 'react';
import { Github, ExternalLink, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Dog Heart VHS Point Detection',
      date: 'Oct 2024',
      description: 'Automated detection of canine X-ray landmarks using deep learning for veterinary diagnostics.',
      techStack: ['Python', 'PyTorch', 'EfficientNet-B7', 'OpenCV'],
      highlights: [
        '83% accuracy in landmark detection',
        'Automates manual diagnostic process',
        'Veterinary imaging application'
      ],
      color: 'emerald',
      image: '/lovable-uploads/3d0708d6-9130-486f-b383-4460ae408a73.png'
    },
    {
      title: 'Comments Indecency Detector',
      date: 'Nov 2024',
      description: 'Multi-label text classification system for detecting harmful online comments and content moderation.',
      techStack: ['Python', 'Scikit-learn', 'NLTK', 'Machine Learning'],
      highlights: [
        '91.01% classification accuracy',
        'ROC AUC: 0.9745',
        'Multi-label text classification'
      ],
      color: 'blue',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'LLM-Based Organ Segmentation for Cancer in Radiotherapy',
      date: 'Jan 2025',
      description: 'Multimodal segmentation model combining 3D medical imaging with clinical text for cancer treatment planning.',
      techStack: ['PyTorch', 'MONAI', 'Transformers', 'Llama-2'],
      highlights: [
        '83% segmentation accuracy',
        'Multimodal approach (imaging + text)',
        'Healthcare AI application'
      ],
      color: 'purple',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: 'border-emerald-200 hover:border-emerald-400',
      blue: 'border-blue-200 hover:border-blue-400',
      purple: 'border-purple-200 hover:border-purple-400'
    };
    return colors[color as keyof typeof colors] || colors.emerald;
  };

  const getBadgeColors = (color: string) => {
    const colors = {
      emerald: 'bg-emerald-100 text-emerald-800',
      blue: 'bg-blue-100 text-blue-800',
      purple: 'bg-purple-100 text-purple-800'
    };
    return colors[color as keyof typeof colors] || colors.emerald;
  };

  const getGradientColors = (color: string) => {
    const colors = {
      emerald: 'from-emerald-400 to-emerald-600',
      blue: 'from-blue-400 to-blue-600',
      purple: 'from-purple-400 to-purple-600'
    };
    return colors[color as keyof typeof colors] || colors.emerald;
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <div className="grid lg:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl border-2 transition-all duration-300 hover:shadow-xl p-8 ${getColorClasses(project.color)}`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                  {/* Project Image */}
                  <div className="lg:w-1/3 mb-6 lg:mb-0">
                    <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${getGradientColors(project.color)} opacity-20`}></div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="lg:w-2/3">
                    <div className="flex items-center mb-4">
                      <Calendar className="text-gray-500 mr-2" size={16} />
                      <span className="text-gray-600 text-sm">{project.date}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                    
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Key Achievements</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getGradientColors(project.color)} mt-2 mr-3 flex-shrink-0`}></div>
                            <span className="text-gray-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 rounded-full text-sm font-medium ${getBadgeColors(project.color)}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <button className={`flex items-center px-4 py-2 bg-gradient-to-r ${getGradientColors(project.color)} text-white rounded-lg hover:shadow-md transition-all duration-200 hover:scale-105`}>
                        <Github size={16} className="mr-2" />
                        View Code
                      </button>
                      <button className="flex items-center px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-all duration-200">
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Interested in seeing more of my work?</p>
            <a
              href="https://github.com/yashaswip"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              <Github size={20} className="mr-2" />
              Visit My GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
