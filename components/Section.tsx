import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className = "" }) => {
  return (
    <section id={id} className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white inline-block relative">
            {title}
            <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-blue-600 dark:bg-blue-500 rounded-full translate-y-2"></div>
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
};