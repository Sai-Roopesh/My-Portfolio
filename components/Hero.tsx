import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';

export const Hero: React.FC = () => {
  const linkedIn = SOCIAL_LINKS.find(l => l.name === 'LinkedIn')?.url;
  const github = SOCIAL_LINKS.find(l => l.name === 'GitHub')?.url;

  return (
    <section id="hero" className="pt-32 pb-16 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 flex items-center min-h-screen relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
                Hello, I'm
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                {PERSONAL_INFO.name}
              </h1>
              <h3 className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-medium">
                {PERSONAL_INFO.role}
              </h3>
            </div>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg shadow-blue-600/20"
              >
                View Projects <ArrowRight size={18} className="ml-2" />
              </a>
              <a 
                href={linkedIn} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center px-6 py-3 border border-slate-300 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-400 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg font-medium transition-all bg-white/50 dark:bg-slate-800/50"
              >
                Let's Connect
              </a>
            </div>

            <div className="flex gap-6 text-slate-500 dark:text-slate-400">
              {SOCIAL_LINKS.map((link) => (
                 <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label={link.name}
                >
                  {link.icon === 'Github' && <Github size={24} />}
                  {link.icon === 'Linkedin' && <Linkedin size={24} />}
                  {link.icon === 'Mail' && <Mail size={24} />}
                  {link.icon === 'Globe' && <Download size={24} />} {/* Fallback for website if icon doesn't match exactly, assuming globe in library or just generic link */}
                </a>
              ))}
            </div>
          </div>

          {/* Visual Element on the right */}
          <div className="relative hidden md:block">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl rotate-3 opacity-20 animate-pulse"></div>
              <div className="absolute inset-0 bg-slate-100 dark:bg-slate-800 rounded-2xl -rotate-3 shadow-2xl flex items-center justify-center overflow-hidden border border-slate-200 dark:border-slate-700">
                 {/* Abstract Code Illustration */}
                 <div className="p-8 w-full font-mono text-sm text-slate-600 dark:text-slate-300 opacity-80">
                    <div className="mb-2"><span className="text-purple-500">class</span> <span className="text-yellow-500">Engineer</span>:</div>
                    <div className="pl-4 mb-2"><span className="text-blue-500">def</span> <span className="text-yellow-500">__init__</span>(self):</div>
                    <div className="pl-8 mb-2">self.name = <span className="text-green-500">"{PERSONAL_INFO.name}"</span></div>
                    <div className="pl-8 mb-2">self.role = <span className="text-green-500">"{PERSONAL_INFO.role}"</span></div>
                    <div className="pl-8 mb-2">self.passion = [<span className="text-green-500">"AI"</span>, <span className="text-green-500">"ML"</span>, <span className="text-green-500">"FullStack"</span>]</div>
                    <div className="mb-2 mt-4"><span className="text-blue-500">def</span> <span className="text-yellow-500">build_future</span>(self):</div>
                    <div className="pl-8">return <span className="text-blue-500">True</span></div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};