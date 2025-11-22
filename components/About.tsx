import React from 'react';
import { SectionId } from '../types';
import { PERSONAL_INFO } from '../constants';
import { RevealOnScroll } from './RevealOnScroll';
import { User, Code, Shield } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-24 bg-cyber-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-accent/20 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
               About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple to-cyber-accent">Me</span>
             </h2>
             <div className="w-24 h-1 bg-gradient-to-r from-cyber-purple to-cyber-accent mx-auto rounded-full"></div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <RevealOnScroll delay={100}>
            <div className="holo-card p-8 rounded-2xl h-full flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-cyber-accent/10 rounded-full flex items-center justify-center mb-6 text-cyber-accent group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(0,242,255,0.2)]">
                <User size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyber-accent transition-colors">The Engineer</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Final-year B.Tech candidate at TGPCET with a <span className="text-cyber-accent">9.55 SGPA</span>. I blend academic excellence with practical engineering in software development.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className="holo-card p-8 rounded-2xl h-full flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-cyber-purple/10 rounded-full flex items-center justify-center mb-6 text-cyber-purple group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(189,0,255,0.2)]">
                <Code size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyber-purple transition-colors">The Developer</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Specializing in <span className="text-cyber-purple">AI/ML pipelines</span>, NLP systems, and RAG architectures. Proficient in Python, C++, and building production-grade logic.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={300}>
            <div className="holo-card p-8 rounded-2xl h-full flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-cyber-success/10 rounded-full flex items-center justify-center mb-6 text-cyber-success group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(0,255,157,0.2)]">
                <Shield size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyber-success transition-colors">The Researcher</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Passionate about cybersecurity. <span className="text-cyber-success">Top 20 Finalist</span> at CyberHack 2025. Building tools to detect vulnerabilities and secure digital assets.
              </p>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={400}>
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-cyber-accent/5 blur-xl"></div>
            <div className="relative glass-panel p-8 rounded-2xl border-l-4 border-cyber-accent flex items-center">
              <div className="text-5xl text-cyber-accent opacity-20 font-serif absolute top-4 left-4">"</div>
              <p className="text-lg text-gray-300 italic text-center w-full px-8 leading-loose">
                {PERSONAL_INFO.summary}
              </p>
              <div className="text-5xl text-cyber-accent opacity-20 font-serif absolute bottom-0 right-4">"</div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};