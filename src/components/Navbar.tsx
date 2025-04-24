import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { NAV_LINKS } from '../constants';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`${
        scrolled 
          ? 'bg-space-900/90 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      } fixed w-full top-0 left-0 z-50 transition-all duration-300`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-nebula-400 font-mono text-lg font-bold">
          {/* &lt;HS /&gt; */}
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="text-space-200 hover:text-nebula-400 transition-colors duration-300"
            >
              {link.title}
            </a>
          ))}
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/Cyberfreak08" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-space-200 hover:text-nebula-400 transition-colors duration-300"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/harisundar-sivakumar-50b12a23a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-space-200 hover:text-nebula-400 transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <button 
              onClick={toggleTheme}
              className="text-space-200 hover:text-nebula-400 transition-colors duration-300"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleTheme}
            className="text-space-200 mr-4 hover:text-nebula-400 transition-colors duration-300"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-space-200 hover:text-nebula-400 transition-colors duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-space-900/95 backdrop-blur-md"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-space-200 hover:text-nebula-400 transition-colors duration-300 py-2"
              >
                {link.title}
              </a>
            ))}
            <div className="flex items-center space-x-4 py-2">
              <a 
                href="https://github.com/harisundar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-space-200 hover:text-nebula-400 transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/harisundar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-space-200 hover:text-nebula-400 transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;