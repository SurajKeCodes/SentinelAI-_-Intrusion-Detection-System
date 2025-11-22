import React from 'react';
import { SectionId } from '../types';
import { EXPERIENCES } from '../constants';
import { RevealOnScroll } from './RevealOnScroll';
import { Briefcase, Calendar, MapPin, Activity } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id={SectionId.EXPERIENCE} className="py-24 bg-cyber-dark relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Professional <span className="text-cyber-success">Journey</span></h2>
            <div className="w-24 h-1 bg-cyber-success mx-auto rounded-full"></div>
          </div>
        </RevealOnScroll>

        <div className="relative border-l-2 border-white/5 ml-4 md:ml-8 space-y-16">
          {/* Glowing Beam */}
          <div className="absolute top-0 left-[-1px] w-[2px] h-full bg-gradient-to-b from-cyber-success via-cyber-purple to-transparent opacity-50"></div>

          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              {/* Timeline Node */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyber-dark border-2 border-cyber-success group-hover:shadow-[0_0_15px_rgba(0,255,157,0.8)] group-hover:scale-125 transition-all duration-300 z-10"></div>
              
              <RevealOnScroll delay={index * 100}>
                <div className="glass-panel p-8 rounded-2xl hover:bg-white/5 border border-white/5 hover:border-cyber-success/30 transition-all duration-300 relative overflow-hidden">
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute -right-20 -top-20 w-40 h-40 bg-cyber-success/10 rounded-full blur-[50px] group-hover:bg-cyber-success/20 transition-all duration-500"></div>

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyber-success transition-colors">{exp.role}</h3>
                        <div className="flex items-center text-cyber-purple font-mono font-medium mt-2">
                          <Briefcase size={16} className="mr-2" />
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end mt-4 md:mt-0 text-gray-500 text-sm font-mono">
                        <div className="flex items-center bg-white/5 px-3 py-1 rounded-full border border-white/5">
                          <Calendar size={14} className="mr-2" />
                          {exp.duration}
                        </div>
                        {exp.location && (
                          <div className="flex items-center mt-2 px-3">
                            <MapPin size={14} className="mr-2" />
                            {exp.location}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {exp.description.map((point, i) => (
                        <li key={i} className="flex items-start text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                          {/* Replaced ChevronRight to remove '>' symbol */}
                          <Activity size={14} className="mr-2 mt-1 text-cyber-success flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};