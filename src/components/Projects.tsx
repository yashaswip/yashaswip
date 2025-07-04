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
      date: 'May 2025',
      description: 'Multimodal segmentation model combining 3D medical imaging with clinical text for cancer treatment planning.',
      techStack: ['PyTorch', 'MONAI', 'Transformers', 'Llama-2'],
      highlights: [
        '83% segmentation accuracy',
        'Multimodal approach (imaging + text)',
        'Healthcare AI application'
      ],
      color: 'purple',
      image: 'https://private-user-images.githubusercontent.com/156213765/442431683-adf593f5-b17e-4023-8a4d-d0709a57e1fe.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTE2NjYyNzcsIm5iZiI6MTc1MTY2NTk3NywicGF0aCI6Ii8xNTYyMTM3NjUvNDQyNDMxNjgzLWFkZjU5M2Y1LWIxN2UtNDAyMy04YTRkLWQwNzA5YTU3ZTFmZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzA0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcwNFQyMTUyNTdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03OGQwODVmYzNhOTQ1OGVmNTM3NjJiNDcxOWRiNTM4ZjcwMDk4NDgxZmI4NWQ4MTFkMmI1MDBiZDkzNDc2YTkwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.xEWIXEhjDZdvZ2R1OqU9EiLFEOszLKWFcUgn9mBdmbU',
      githubLink: 'https://github.com/yashaswip/LLM-Based-Organ-Segmentation-for-Cancer-in-Radiotherapy'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: 'border-emerald-300 bg-gradient-to-r from-emerald-50 to-emerald-100',
      blue: 'border-blue-300 bg-gradient-to-r from-blue-50 to-blue-100',
      purple: 'border-purple-300 bg-gradient-to-r from-purple-50 to-purple-100'
    };
    return colors[color as keyof typeof colors] || colors.emerald;
  };

  const getAccentColor = (color: string) => {
    const colors = {
      emerald: 'text-emerald-600',
      blue: 'text-blue-600',
      purple: 'text-purple-600'
    };
    return colors[color as keyof typeof colors] || colors.emerald;
  };

  const getBadgeColor = (color: string) => {
    const colors = {
      emerald: 'bg-emerald-100 text-emerald-700',
      blue: 'bg-blue-100 text-blue-700',
      purple: 'bg-purple-100 text-purple-700'
    };
    return colors[color as keyof typeof colors] || colors.emerald;
  };

  return (
    <section id="projects" className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Featured Projects</h2>
            <p className="text-gray-600 text-lg">AI solutions solving real-world problems</p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${getColorClasses(project.color)}`}
              >
                <div className="grid lg:grid-cols-4 gap-6 items-center">
                  {/* Project Image */}
                  <div className="lg:col-span-1">
                    <div className="relative h-32 rounded-lg overflow-hidden group">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-2 right-2">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                          <Calendar size={10} className="text-gray-600" />
                          <span className="text-xs font-medium text-gray-700">{project.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="lg:col-span-3 space-y-3">
                    <div>
                      <h3 className={`text-lg font-bold mb-2 ${getAccentColor(project.color)}`}>
                        {project.title}
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">{project.description}</p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor(project.color)}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Highlights & Action */}
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                      <div className="space-y-1">
                        {project.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center text-xs">
                            <div className={`w-1.5 h-1.5 rounded-full mr-2 ${getAccentColor(project.color).replace('text-', 'bg-')}`}></div>
                            <span className="text-gray-600">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center px-3 py-2 ${getAccentColor(project.color).replace('text-', 'bg-')} text-white rounded-lg text-sm font-medium hover:opacity-90 transition-all duration-200 hover:scale-105 group`}
                      >
                        <Github size={14} className="mr-2" />
                        <span>View Project</span>
                        <ExternalLink size={12} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="text-center mt-8">
            <div className="inline-block bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Explore More Projects</h3>
              <p className="text-gray-600 mb-4">Check out my complete portfolio on GitHub</p>
              <a
                href="https://github.com/yashaswip"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105"
              >
                <Github size={18} className="mr-2" />
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
