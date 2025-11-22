import React from 'react';
import { SectionId } from '../types';
import { PERSONAL_INFO } from '../constants';
import { RevealOnScroll } from './RevealOnScroll';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-24 bg-black relative">
       {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Get In <span className="text-cyber-accent">Touch</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ready to collaborate? Initiating communication protocol...
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <RevealOnScroll delay={100}>
            <div className="space-y-8 p-4">
              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-cyber-accent border border-white/10 group-hover:border-cyber-accent group-hover:shadow-[0_0_20px_rgba(0,242,255,0.2)] transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg">Email</h4>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-gray-400 hover:text-cyber-accent transition-colors font-mono text-sm">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-cyber-accent border border-white/10 group-hover:border-cyber-accent group-hover:shadow-[0_0_20px_rgba(0,242,255,0.2)] transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg">Phone</h4>
                  <span className="text-gray-400 font-mono text-sm">{PERSONAL_INFO.phone}</span>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-cyber-accent border border-white/10 group-hover:border-cyber-accent group-hover:shadow-[0_0_20px_rgba(0,242,255,0.2)] transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg">Location</h4>
                  <span className="text-gray-400 font-mono text-sm">{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <form className="space-y-5 glass-panel p-8 rounded-2xl border border-white/10 relative overflow-hidden" onSubmit={(e) => e.preventDefault()}>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-purple via-cyber-accent to-cyber-purple"></div>
              
              <div className="mt-4">
                <input 
                  type="text" 
                  className="w-full bg-black/40 border border-white/10 rounded-lg focus:border-cyber-accent focus:ring-1 focus:ring-cyber-accent outline-none px-5 py-3 text-white placeholder-gray-600 transition-all font-mono text-sm hover:bg-black/60" 
                  placeholder="Enter Name" 
                />
              </div>
              <div>
                <input 
                  type="email" 
                  className="w-full bg-black/40 border border-white/10 rounded-lg focus:border-cyber-accent focus:ring-1 focus:ring-cyber-accent outline-none px-5 py-3 text-white placeholder-gray-600 transition-all font-mono text-sm hover:bg-black/60" 
                  placeholder="Enter Email" 
                />
              </div>
              <div>
                <textarea 
                  rows={4} 
                  className="w-full bg-black/40 border border-white/10 rounded-lg focus:border-cyber-accent focus:ring-1 focus:ring-cyber-accent outline-none px-5 py-3 text-white placeholder-gray-600 transition-all font-mono text-sm hover:bg-black/60" 
                  placeholder="Initialize Message Sequence..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-cyber-accent text-black font-bold py-3 rounded-lg hover:bg-cyan-300 transition-all flex justify-center items-center shadow-[0_0_20px_rgba(0,242,255,0.2)] hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] transform hover:-translate-y-1"
              >
                Send Message <Send size={16} className="ml-2" />
              </button>
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};