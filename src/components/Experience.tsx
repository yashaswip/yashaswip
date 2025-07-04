
import React from 'react';
import { Briefcase, Calendar, MapPin, Award, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'System Engineer',
      company: 'Tata Consultancy Services',
      location: 'India',
      duration: 'Jan 2021 – Aug 2023',
      type: 'Full-time',
      description: 'Developed and maintained enterprise-level applications, automated workflows using PowerApps and Power Automate, and integrated multiple data sources to improve system efficiency.',
      achievements: [
        'Built enterprise apps and automated workflows using PowerApps, Power Automate, Dataverse, and SharePoint',
        'Resolved complex issues via PowerApps Studio; collaborated with Microsoft engineering on escalations',
        'Used Kusto and Unify for root cause analysis and performance diagnostics',
        'Delivered POCs and low-code solutions aligned with business needs',
        'Integrated diverse data sources to streamline operations and improve efficiency',
        'Received On-the-Spot Award for exceptional performance'
      ],
      technologies: ['PowerApps', 'Power Automate', 'Dataverse', 'SharePoint', 'Kusto', 'Unify'],
      color: 'blue'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'border-blue-200 hover:border-blue-400 bg-blue-50',
      emerald: 'border-emerald-200 hover:border-emerald-400 bg-emerald-50'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getBadgeColors = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-800',
      emerald: 'bg-emerald-100 text-emerald-800'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getIconColors = (color: string) => {
    const colors = {
      blue: 'text-blue-600',
      emerald: 'text-emerald-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-lg ${getColorClasses(exp.color)}`}
              >
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${exp.color === 'blue' ? 'bg-blue-100' : 'bg-emerald-100'}`}>
                      <Briefcase className={getIconColors(exp.color)} size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{exp.title}</h3>
                      <p className={`text-lg font-semibold ${getIconColors(exp.color)}`}>{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      <span>{exp.location}</span>
                    </div>
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium self-start ${getBadgeColors(exp.color)}`}>
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Key Achievements</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <ChevronRight className={`mt-0.5 mr-3 flex-shrink-0 ${getIconColors(exp.color)}`} size={16} />
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getBadgeColors(exp.color)}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Awards Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Recognition</h3>
            <div className="bg-white rounded-xl shadow-md p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Award className="text-yellow-600" size={32} />
                </div>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">On-the-Spot Award</h4>
              <p className="text-yellow-600 font-medium mb-2">Tata Consultancy Services</p>
              <p className="text-gray-600 mb-4">April 2023</p>
              <p className="text-gray-700 leading-relaxed">
                Recognized for exceptional performance, innovation, and dedication to delivering 
                high-quality solutions that exceeded client expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
