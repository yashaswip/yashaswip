
import React from 'react';
import { Github, Calendar, ExternalLink } from 'lucide-react';

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
      image: '/lovable-uploads/3d0708d6-9130-486f-b383-4460ae408a73.png',
      githubLink: 'https://github.com/yashaswip/Dog_VHS'
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
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      githubLink: 'https://github.com/yashaswip/COMMMENT-INDECENCY-DETECTOR'
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
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      githubLink: 'https://github.com/yashaswip/LLM-Based-Organ-Segmentation-for-Cancer-in-Radiotherapy'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: 'border-emerald-200 hover:border-emerald-400 hover:shadow-emerald-100',
      blue: 'border-blue-200 hover:border-blue-400 hover:shadow-blue-100',
      purple: 'border-purple-200 hover:border-purple-400 hover:shadow-purple-100'
    };
    return colors[color as keyof typeof colors] || colors.emerald;
  };

  const getBadgeColors = (color: string) => {
    const colors = {
      emerald: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
      blue: 'bg-blue-50 text-blue-700 border border-blue-200',
      purple: 'bg-purple-50 text-purple-700 border border-purple-200'
    };
    return colors[color as keyof typeof colors] || colors.emerald;
  };

  const getGradientColors = (color: string) => {
    const colors = {
      emerald: 'from-emerald-500 to-emerald-600',
      blue: 'from-blue-500 to-blue-600',
      purple: 'from-purple-500 to-purple-600'
    };
    return colors[color as keyof typeof colors] || colors.emerald;
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Showcasing innovative AI solutions that solve real-world problems
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl border-2 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-200/50 p-6 h-full flex flex-col transform hover:-translate-y-2 ${getColorClasses(project.color)}`}
              >
                {/* Project Image */}
                <div className="relative h-48 rounded-2xl overflow-hidden mb-6 group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${getGradientColors(project.color)} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                  
                  {/* Date Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-2">
                      <Calendar size={12} className="text-gray-600" />
                      <span className="text-xs font-medium text-gray-700">{project.date}</span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{project.title}</h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeColors(project.color)}`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="px-2 py-1 text-xs text-gray-500">
                          +{project.techStack.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="mb-6">
                    <ul className="space-y-1">
                      {project.highlights.slice(0, 2).map((highlight, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${getGradientColors(project.color)} mt-2 mr-2 flex-shrink-0`}></div>
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  <div className="mt-auto">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r ${getGradientColors(project.color)} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105 group`}
                    >
                      <Github size={16} className="mr-2" />
                      <span>View Project</span>
                      <ExternalLink size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-md mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to see more?</h3>
              <p className="text-gray-600 mb-6">
                Explore my complete portfolio on GitHub
              </p>
              <a
                href="https://github.com/yashaswip"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Github size={20} className="mr-2" />
                Visit GitHub Profile
                <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
