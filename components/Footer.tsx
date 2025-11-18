import React from 'react';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../constants';
import { Github, Linkedin, Mail, Globe, Code } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">{PERSONAL_INFO.name}</h2>
            <p className="text-slate-400 text-sm">
              Building intelligent solutions for tomorrow.
            </p>
          </div>

          <div className="flex gap-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white transition-colors transform hover:scale-110"
                aria-label={link.name}
              >
                {link.icon === 'Github' && <Github size={24} />}
                {link.icon === 'Linkedin' && <Linkedin size={24} />}
                {link.icon === 'Mail' && <Mail size={24} />}
                {link.icon === 'Globe' && <Globe size={24} />}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm gap-4">
          <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
          <a 
            href="https://github.com/Sai-Roopesh/2025-portfolio-page" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <Code size={16} />
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </footer>
  );
};