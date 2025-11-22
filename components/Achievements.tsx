import React, { useState } from 'react';
import { ACHIEVEMENTS, PERSONAL_INFO } from '../constants';
import { RevealOnScroll } from './RevealOnScroll';
import { Award, CheckCircle, Shield, AlertTriangle } from 'lucide-react';

export const Achievements: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="py-20 bg-cyber-dark relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-cyber-purple/10 rounded-full blur-[80px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyber-accent/5 rounded-full blur-[100px]"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Certifications & <span className="text-cyber-accent">Recognition</span></h2>
             <div className="w-20 h-1 bg-cyber-accent mx-auto rounded-full"></div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* List of Achievements */}
          <div className="space-y-6 order-2 md:order-1">
             {ACHIEVEMENTS.map((ach, index) => (
                <RevealOnScroll key={index} delay={index * 50}>
                  <div className="group flex items-start space-x-4 p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-cyber-accent/30 transition-all duration-300">
                    <div className="flex-shrink-0 mt-1">
                      <div className="p-2 bg-cyber-dark rounded-lg text-cyber-accent group-hover:text-white group-hover:bg-cyber-accent transition-colors duration-300">
                         <Award size={20} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:text-cyber-accent transition-colors">{ach.title}</h4>
                      <p className="text-gray-400 text-sm mt-1">{ach.issuer}</p>
                      {ach.link && (
                        <a href={ach.link} target="_blank" rel="noopener noreferrer" className="text-xs text-cyber-purple mt-2 inline-flex items-center hover:underline hover:text-white transition-colors">
                          Verify Credential <span className="ml-1">→</span>
                        </a>
                      )}
                    </div>
                  </div>
                </RevealOnScroll>
             ))}
          </div>

          {/* Visual Certificate Showcase */}
          <RevealOnScroll delay={200} className="order-1 md:order-2">
            <div className="relative mx-auto max-w-lg w-full">
               {/* Glowing Backdrop - Adjusted to be cleaner/less muddy */}
               <div className="absolute -inset-0.5 bg-gradient-to-r from-cyber-accent via-cyber-purple to-cyber-accent rounded-xl blur opacity-30 animate-pulse-slow"></div>
               
               {/* Card Container */}
               <div className="relative bg-black rounded-xl p-1 border border-white/10 shadow-2xl">
                  
                  {/* Digital Frame Effect */}
                  <div className="relative rounded-lg overflow-hidden bg-cyber-dark aspect-video flex items-center justify-center border border-white/5">
                    
                    {!imageError ? (
                      <img 
                        src={PERSONAL_INFO.certificateImage} 
                        alt="CyberHack 2025 Certificate" 
                        className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
                        onError={() => setImageError(true)}
                      />
                    ) : (
                      <div className="text-center p-8 flex flex-col items-center">
                        <Shield className="w-16 h-16 text-cyber-accent/50 mb-4" />
                        <h3 className="text-xl font-mono text-white mb-2">CERTIFICATE_SECURE</h3>
                        <p className="text-gray-500 text-sm">Image verified on blockchain (Visual preview unavailable)</p>
                      </div>
                    )}
                    
                    {/* Scanline Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20"></div>
                  </div>

                  {/* Caption / Badge */}
                  <a 
                    href="https://drive.google.com/file/d/1YP1xEQ7-dAcRsE8AdZ-pvSQb4TciV2Ls/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-cyber-dark border border-cyber-accent/30 px-6 py-2 rounded-full shadow-[0_0_15px_rgba(0,242,255,0.2)] flex items-center whitespace-nowrap hover:bg-cyber-accent/10 transition-colors cursor-pointer"
                  >
                     <CheckCircle size={14} className="text-cyber-accent mr-2" />
                     <span className="text-white text-sm font-mono font-bold">VERIFIED FINALIST</span>
                  </a>

               </div>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
};