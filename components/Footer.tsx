import React from 'react';
import { SOCIAL_LINKS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {SOCIAL_LINKS.map(link => (
            <a key={link.platform} href={link.url} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-cyber-accent transition-colors text-sm">
              {link.platform}
            </a>
          ))}
        </div>
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Suraj Borkute. Built with React, Tailwind & Gemini AI.
        </p>
      </div>
    </footer>
  );
};