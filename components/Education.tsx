import React from 'react';
import { Section } from './Section';
import { EDUCATION } from '../constants';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <Section id="education" title="Education">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border-l-4 border-blue-600 relative overflow-hidden">
          {/* Background Decor */}
          <div className="absolute right-0 top-0 p-4 opacity-5 text-blue-600 dark:text-blue-400">
            <GraduationCap size={120} />
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              {EDUCATION.institution}
            </h3>
            <h4 className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-6">
              {EDUCATION.degree}
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                    <div className="p-2 bg-blue-100 dark:bg-slate-700 rounded-lg">
                        <Calendar size={20} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                        <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Graduation</p>
                        <p className="font-medium">{EDUCATION.duration}</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                    <div className="p-2 bg-blue-100 dark:bg-slate-700 rounded-lg">
                        <MapPin size={20} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                        <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Location</p>
                        <p className="font-medium">{EDUCATION.location}</p>
                    </div>
                </div>

                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                    <div className="p-2 bg-blue-100 dark:bg-slate-700 rounded-lg">
                        <Award size={20} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                        <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">CGPA</p>
                        <p className="font-medium">{EDUCATION.gpa}</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};