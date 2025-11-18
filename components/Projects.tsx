import React from 'react';
import { Section } from './Section';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, Folder } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <div 
            key={index} 
            className="group bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden border border-slate-100 dark:border-slate-700"
          >
            {/* Project Image Placeholder - Using abstract gradient since no images provided */}
            <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 relative overflow-hidden">
               <img 
                 src={`https://picsum.photos/seed/${index + 50}/800/400`} 
                 alt={project.title}
                 className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500"
               />
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            </div>

            <div className="p-6 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg text-blue-600 dark:text-blue-400">
                    <Folder size={20} />
                </div>
                {/* Assuming GitHub links exist or just generic external link if available in future */}
                {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
                        <ExternalLink size={20} />
                    </a>
                )}
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>

              <div className="space-y-2 mb-6 flex-grow">
                {project.description.slice(0, 2).map((desc, i) => (
                   <p key={i} className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                     • {desc}
                   </p>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.slice(0, 4).map((tech, i) => (
                  <span 
                    key={i}
                    className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                    <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500">
                        +{project.technologies.length - 4}
                    </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};