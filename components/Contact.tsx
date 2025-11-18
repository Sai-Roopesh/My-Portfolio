import React from 'react';
import { Section } from './Section';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import { Mail, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch" className="bg-blue-50 dark:bg-slate-900/80 mb-0">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
          Interested in working together?
        </h3>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto">
          I'm always open to discussing product design work or partnership opportunities.
          Feel free to reach out directly via email or check out my social profiles.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-600/30"
          >
            <Mail className="mr-2" />
            Say Hello
          </a>
          <a
            href={SOCIAL_LINKS.find(l => l.name === 'LinkedIn')?.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl font-bold text-lg transition-all"
          >
            LinkedIn Profile <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </Section>
  );
};