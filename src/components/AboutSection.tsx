import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail } from 'lucide-react';

const AboutSection: React.FC = () => {
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
    <section id="about" className="py-20 dark:bg-space-900 bg-space-100">
      <div className="container mx-auto px-4">
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
              Mission Control
            </h2>
            <div className="w-24 h-1 bg-cosmic-600 rounded"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              variants={itemVariants}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 dark:border-nebula-700 border-nebula-400 shadow-lg relative z-10">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Harisundar Sivakumar"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatType: "reverse" 
                  }}
                  className="absolute inset-0 rounded-full dark:bg-nebula-500/20 bg-nebula-300/20 blur-md z-0"
                ></motion.div>
                
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 20, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none"
                >
                  <div className="absolute -top-2 right-10 dark:bg-cosmic-500 bg-cosmic-400 p-2 rounded-full shadow-glow-cosmic">
                    <Github size={18} className="text-white" />
                  </div>
                  <div className="absolute top-1/4 -right-2 dark:bg-nebula-500 bg-nebula-400 p-2 rounded-full shadow-glow">
                    <Linkedin size={18} className="text-white" />
                  </div>
                  <div className="absolute top-2/3 -right-3 dark:bg-cosmic-500 bg-cosmic-400 p-2 rounded-full shadow-glow-cosmic">
                    <Mail size={18} className="text-white" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col justify-center"
            >
              <h3 className="text-2xl font-semibold mb-4 dark:text-white text-space-900">
                About Me
              </h3>
              
              <p className="text-lg mb-6 dark:text-space-300 text-space-700">
                I am a passionate Full Stack Developer with expertise in building modern web applications 
                and enterprise-grade solutions. With a strong foundation in both frontend and backend 
                technologies, I create seamless user experiences backed by robust architecture.
              </p>
              
              <motion.div
                variants={itemVariants}
                className="p-4 dark:bg-space-800 bg-space-200 rounded-lg mb-6 border-l-4 border-cosmic-600"
              >
                <p className="text-lg italic dark:text-space-300 text-space-700">
                  "Fueling UI with logic and creativity."
                </p>
              </motion.div>
              
              <div className="flex gap-4">
                <a
                  href="https://github.com/harisundar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 dark:bg-space-800 bg-space-200 rounded-lg hover:dark:bg-space-700 hover:bg-space-300 transition-colors duration-300"
                >
                  <Github size={24} className="dark:text-white text-space-900" />
                </a>
                <a
                  href="https://linkedin.com/in/harisundar"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="p-2 dark:bg-space-800 bg-space-200 rounded-lg hover:dark:bg-space-700 hover:bg-space-300 transition-colors duration-300"
                >
                  <Linkedin size={24} className="dark:text-white text-space-900" />
                </a>
                <a
                  href="mailto:harisundar@example.com"
                  className="p-2 dark:bg-space-800 bg-space-200 rounded-lg hover:dark:bg-space-700 hover:bg-space-300 transition-colors duration-300"
                >
                  <Mail size={24} className="dark:text-white text-space-900" />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;