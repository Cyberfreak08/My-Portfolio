import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 dark:bg-space-950 bg-space-50 border-t dark:border-space-800 border-space-200">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <a href="#" className="text-nebula-400 font-mono text-lg font-bold">
                &lt;HS /&gt;
              </a>
            </div>
            
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <a 
                href="https://github.com/harisundar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="dark:text-space-400 text-space-600 hover:dark:text-white hover:text-space-900 transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/harisundar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="dark:text-space-400 text-space-600 hover:dark:text-white hover:text-space-900 transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:harisundar@example.com"
                className="dark:text-space-400 text-space-600 hover:dark:text-white hover:text-space-900 transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
            
            <div className="text-sm dark:text-space-400 text-space-600 flex items-center">
              <span>© {currentYear} Harisundar Sivakumar. Built with</span>
              <Heart size={14} className="mx-1 text-cosmic-500" />
              <span>using React & Three.js</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;