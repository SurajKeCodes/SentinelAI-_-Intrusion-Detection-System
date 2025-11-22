
import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ChevronDown, Terminal, Cpu } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import { SectionId } from '../types';

export const Hero: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const roles = ["AI/ML Engineer", "Cybersecurity Researcher", "Full Stack Developer"];
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[textIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section id={SectionId.HOME} className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-cyber-dark">
      {/* 3D Grid Background */}
      <div className="perspective-grid"></div>
      
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-cyber-dark z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)] z-0"></div>

      {/* Floating Orbs - Balanced Colors */}
      <div className="absolute top-20 right-[10%] w-72 h-72 bg-cyber-purple/20 rounded-full blur-[100px] animate-pulse-slow z-0"></div>
      <div className="absolute bottom-20 left-[10%] w-96 h-96 bg-cyber-primary/20 rounded-full blur-[100px] animate-pulse-slow z-0" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between w-full">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left mb-12 md:mb-0 order-2 md:order-1">
            <div className="flex items-center space-x-2 px-3 py-1 mb-6 text-xs font-mono text-cyber-accent border border-cyber-accent/30 rounded-full bg-cyber-accent/5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-accent"></span>
              </span>
              <span>SYSTEM_ONLINE // V2.1.0</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 text-glow-cyber">
                {PERSONAL_INFO.name}
              </span>
            </h1>
            
            <div className="h-8 mb-8 flex items-center">
              <Terminal className="text-cyber-purple mr-3" size={24} />
              <span className="text-xl md:text-2xl font-mono text-gray-300">
                {displayText}
                <span className="animate-pulse text-cyber-accent">_</span>
              </span>
            </div>
            
            <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed border-l-2 border-cyber-purple/50 pl-4">
              Architecting the future of <strong className="text-white">Secure AI</strong>. 
              Merging advanced machine learning with offensive cybersecurity to build resilient systems.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyber-accent text-gray-300 hover:text-cyber-accent transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] group"
                >
                  {link.icon === 'Github' && <Github size={22} className="group-hover:animate-bounce" />}
                  {link.icon === 'Linkedin' && <Linkedin size={22} className="group-hover:animate-pulse" />}
                  {link.icon === 'Mail' && <Mail size={22} />}
                </a>
              ))}
            </div>

            <div className="flex gap-4">
              <button 
                onClick={() => document.getElementById(SectionId.PROJECTS)?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-cyber-accent to-cyan-600 text-black font-bold tracking-wide hover:from-cyan-300 hover:to-cyan-500 transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] flex items-center"
              >
                <Cpu className="mr-2" size={18} />
                Explore World
              </button>
              <button 
                onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3.5 rounded-lg border border-cyber-purple/50 text-cyber-purple hover:bg-cyber-purple/10 transition-colors font-mono backdrop-blur-sm"
              >
                CONTACT_ME
              </button>
            </div>
        </div>

        {/* Right Visual */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative order-1 md:order-2 mb-12 md:mb-0">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
             {/* Tech Rings - Multi-color */}
             <div className="absolute inset-0 rounded-full border border-dashed border-cyber-purple/40 animate-[spin_20s_linear_infinite]"></div>
             <div className="absolute -inset-4 rounded-full border border-cyber-accent/20 animate-[spin_15s_linear_infinite_reverse]"></div>
             <div className="absolute -inset-8 rounded-full border border-dotted border-white/10 animate-[spin_30s_linear_infinite]"></div>
             
             {/* Profile Container */}
             <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-cyber-purple/50 shadow-[0_0_50px_rgba(168,85,247,0.3)] bg-black z-10 group">
               <img 
                 src={PERSONAL_INFO.profileImage} 
                 alt={PERSONAL_INFO.name} 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-110 contrast-110"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-cyber-purple/30 to-transparent opacity-50 group-hover:opacity-20 transition-opacity"></div>
             </div>

             {/* Floating Code Badges */}
             <div className="absolute -right-4 top-10 bg-black/80 backdrop-blur border border-cyber-success/50 px-3 py-1 rounded text-xs font-mono text-cyber-success animate-float" style={{ animationDelay: '0.5s' }}>
               Status: ACTIVE
             </div>
             <div className="absolute -left-4 bottom-20 bg-black/80 backdrop-blur border border-cyber-accent/50 px-3 py-1 rounded text-xs font-mono text-cyber-accent animate-float" style={{ animationDelay: '2s' }}>
               SecLevel: MAX
             </div>
          </div>
        </div>

      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-cyber-accent/50">
        <ChevronDown size={30} />
      </div>
    </section>
  );
};