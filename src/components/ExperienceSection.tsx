import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { EXPERIENCES } from '../constants';
import { Briefcase } from 'lucide-react';

const ExperienceSection: React.FC = () => {
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
    <section id="experience" className="py-20 dark:bg-space-950 bg-space-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(#a855f7_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 dark:text-white text-space-900">
              Orbital Path
            </h2>
            <div className="w-24 h-1 bg-cosmic-600 rounded"></div>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 h-full w-px dark:bg-cosmic-700/50 bg-cosmic-400/50 transform md:translate-x-px"></div>
            
            <div className="space-y-12">
              {EXPERIENCES.map((experience, idx) => (
                <motion.div
                  key={experience.id}
                  variants={itemVariants}
                  className="relative md:grid md:grid-cols-2 gap-8"
                >
                  <div className={`md:contents ${idx % 2 === 0 ? '' : 'flex flex-col md:flex-row'}`}>
                    <div className={`${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-last md:pl-12'} pb-10 md:pb-0`}>
                      <h3 className="text-xl font-bold mb-1 dark:text-white text-space-900">{experience.role}</h3>
                      <h4 className="text-lg font-medium mb-2 dark:text-cosmic-400 text-cosmic-700">{experience.company}</h4>
                      <p className="text-sm font-mono mb-4 dark:text-space-400 text-space-600">{experience.period}</p>
                      <ul className="space-y-1">
                        {experience.description.map((item, i) => (
                          <li key={i} className="dark:text-space-300 text-space-700 text-sm">• {item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full dark:bg-cosmic-600 bg-cosmic-500 flex items-center justify-center p-3 shadow-glow-cosmic">
                        <Briefcase className="text-white" />
                      </div>
                    </div>
                    
                    <div className={`${idx % 2 === 0 ? 'md:order-last md:pl-12' : 'md:pr-12'}`}>
                      <div className="h-full flex items-center justify-center md:justify-start">
                        <div className="w-full max-w-sm p-4 dark:bg-space-800/70 bg-space-200/70 backdrop-blur-sm rounded-lg shadow-lg border dark:border-space-700 border-space-300">
                          <div className="flex items-center justify-center py-8">
                            <div className="text-4xl dark:text-nebula-400 text-nebula-600 font-semibold font-mono">{experience.company}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;