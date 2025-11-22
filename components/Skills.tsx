import React from 'react';
import { SectionId } from '../types';
import { SKILLS } from '../constants';
import { RevealOnScroll } from './RevealOnScroll';
import { Terminal } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <section id={SectionId.SKILLS} className="py-24 bg-black relative overflow-hidden">
      {/* Tech Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(#1f2937 1px, transparent 1px), linear-gradient(90deg, #1f2937 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Technical <span className="text-cyber-accent">Arsenal</span></h2>
            <div className="w-24 h-1 bg-cyber-accent mx-auto rounded-full"></div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS.map((category, index) => (
            <RevealOnScroll key={category.name} delay={index * 100}>
              <div className="holo-card p-8 rounded-xl h-full hover:border-cyber-accent/50 transition-colors duration-300 group">
                <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                  <h3 className="text-xl font-mono font-bold text-white flex items-center">
                    <Terminal size={18} className="mr-2 text-cyber-purple" />
                    {category.name}
                  </h3>
                  <span className="text-xs font-mono text-cyber-accent/70 bg-cyber-accent/10 px-2 py-1 rounded">
                    SYS.MODULE_0{index + 1}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill}
                      className="relative overflow-hidden px-4 py-2 text-sm font-medium text-gray-300 bg-white/5 rounded hover:text-white transition-all duration-300 cursor-default border border-transparent hover:border-cyber-accent/40 group/skill"
                    >
                      <span className="relative z-10">{skill}</span>
                      <div className="absolute inset-0 bg-cyber-accent/10 transform -translate-x-full group-hover/skill:translate-x-0 transition-transform duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};