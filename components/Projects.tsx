
import React from 'react';
import { SectionId } from '../types';
import { PROJECTS } from '../constants';
import { RevealOnScroll } from './RevealOnScroll';
import { Folder, ExternalLink, Code2, ImageOff } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id={SectionId.PROJECTS} className="py-20 bg-cyber-dark relative">
      <div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured <span className="text-cyber-purple">Projects</span></h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyber-purple to-cyber-accent mx-auto rounded-full"></div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div className="group glass-panel rounded-xl overflow-hidden hover:-translate-y-3 hover:border-cyber-purple/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-500 h-full flex flex-col border border-white/5 relative">
                
                {/* Decorative corner accents */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-transparent border-r-white/5 group-hover:border-r-cyber-purple/20 transition-all duration-300 z-20"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[40px] border-l-[40px] border-b-transparent border-l-white/5 group-hover:border-l-cyber-accent/20 transition-all duration-300 z-20"></div>

                {/* Project Image Area */}
                <div className="relative h-48 overflow-hidden border-b border-white/10 group bg-black">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-90 group-hover:brightness-110"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-cyber-dark/50 text-cyber-purple">
                      <Code2 size={48} opacity={0.5} />
                    </div>
                  )}
                  
                  {/* Fallback for error (using nextElementSibling logic above) */}
                  <div className="hidden absolute inset-0 flex items-center justify-center bg-cyber-dark/80 z-0">
                     <ImageOff className="text-gray-600" />
                  </div>

                  {/* Cyber Gradient Overlay - Made lighter (opacity-60) for better visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                  
                  {/* Floating Icon */}
                  <div className="absolute top-4 left-4 p-2 bg-black/60 backdrop-blur-md rounded-lg border border-white/10 text-cyber-purple group-hover:text-cyber-accent transition-colors duration-300 z-10">
                    <Folder size={20} />
                  </div>
                </div>

                {/* Header & Content */}
                <div className="p-6 flex-1 flex flex-col relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyber-accent group-hover:to-cyber-purple transition-all duration-300 drop-shadow-lg">
                      {project.title}
                    </h3>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/20 text-gray-400 hover:text-white transition-all transform hover:rotate-12">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                  
                  <ul className="space-y-2 mb-6 flex-1">
                    {project.description.map((point, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start group-hover:text-gray-300 transition-colors">
                        <span className="mr-2 text-cyber-purple mt-1 group-hover:text-cyber-accent transition-colors">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t) => (
                      <span key={t} className="flex items-center text-xs font-medium px-2.5 py-1 rounded bg-white/5 text-gray-300 border border-white/10 group-hover:border-cyber-purple/30 transition-colors">
                        <Code2 size={12} className="mr-1" /> {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
