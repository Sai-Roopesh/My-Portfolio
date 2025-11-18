import React from 'react';
import { Section } from './Section';
import { EXPERIENCE } from '../constants';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience" className="bg-white dark:bg-slate-800/50">
      <div className="space-y-12">
        {EXPERIENCE.map((job, index) => (
          <div key={index} className="relative border-l-2 border-blue-200 dark:border-slate-700 pl-8 md:pl-12 ml-4 md:ml-6">
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-white dark:ring-slate-900"></div>
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">{job.role}</h3>
                <div className="flex items-center gap-2 text-lg font-semibold text-blue-600 dark:text-blue-400 mt-1">
                  <Briefcase size={18} />
                  <span>{job.company}</span>
                </div>
              </div>
              <div className="flex flex-col md:items-end mt-2 md:mt-0 text-slate-500 dark:text-slate-400 text-sm md:text-base">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{job.duration}</span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <MapPin size={16} />
                  <span>{job.location}</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl shadow-sm">
              <ul className="space-y-3">
                {job.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 min-w-[6px] rounded-full bg-blue-500"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};