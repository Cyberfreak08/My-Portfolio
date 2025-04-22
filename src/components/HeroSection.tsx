import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, ArrowDown } from 'lucide-react';
import ThreeScene from './ThreeScene';

const HeroSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center dark:bg-space-950 bg-space-50">
      <ThreeScene />
      <div className="absolute inset-0 bg-gradient-to-b dark:from-space-950/80 dark:to-space-950/40 from-space-50/80 to-space-50/40 z-10"></div>
      
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4 z-20 text-center"
      >
        <motion.div
          variants={itemVariants}
          className="inline-block mb-4 px-4 py-1 rounded-full border dark:border-nebula-700 border-nebula-400 dark:bg-space-900/30 bg-space-100/30 backdrop-blur-sm"
        >
          <span className="text-sm font-mono dark:text-nebula-400 text-nebula-600">Welcome to my portfolio</span>
        </motion.div>
        
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold mb-4 dark:text-white text-space-900"
        >
          I'm <span className="text-cosmic-600">Harisundar Sivakumar</span>
        </motion.h1>
        
        <motion.h2
          variants={itemVariants}
          className="text-xl md:text-2xl mb-8 dark:text-space-300 text-space-700"
        >
          Full Stack Developer / Application Developer
        </motion.h2>
        
        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto text-lg mb-12 dark:text-space-300 text-space-700"
        >
          Navigating code, building experiences.
        </motion.p>
        
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/resume.pdf"
            download="harisundar_resume.pdf"
            className="px-6 py-3 rounded-full bg-cosmic-600 hover:bg-cosmic-700 text-white font-medium transition-colors duration-300 flex items-center gap-2"
          >
            <Download size={18} />
            Download My Resume
          </a>
          
          <a
            href="#projects"
            className="px-6 py-3 rounded-full border dark:border-nebula-700 border-nebula-400 dark:hover:bg-nebula-900/30 hover:bg-nebula-100 dark:text-nebula-400 text-nebula-600 font-medium transition-colors duration-300 flex items-center gap-2"
          >
            Explore My Projects
            <ArrowDown size={18} />
          </a>
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <ArrowDown size={24} className="dark:text-nebula-400 text-nebula-600" />
      </motion.div>
    </section>
  );
};

export default HeroSection;