import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SKILLS } from '../constants';
import { SkillCategory } from '../types';
import { Code, Layout, Database, Server, Shield, GitBranch } from 'lucide-react';

const categoryIcons = {
  programming: <Code size={24} />,
  frontend: <Layout size={24} />,
  backend: <Server size={24} />,
  database: <Database size={24} />,
  auth: <Shield size={24} />,
  devops: <GitBranch size={24} />,
};

const categoryLabels: Record<SkillCategory, string> = {
  programming: "Programming",
  frontend: "Frontend",
  backend: "Backend",
  database: "Database & ORM",
  auth: "Auth",
  devops: "DevOps & Tools",
};

const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | "all">("all");
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
        staggerChildren: 0.1,
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

  const filteredSkills = selectedCategory === "all" 
    ? SKILLS 
    : SKILLS.filter(skill => skill.category === selectedCategory);

  const categories = ["all", ...Array.from(new Set(SKILLS.map(skill => skill.category)))] as const;

  return (
    <section id="skills" className="py-20 dark:bg-space-950 bg-space-50 relative overflow-hidden">
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
              Tech Galaxy
            </h2>
            <div className="w-24 h-1 bg-cosmic-600 rounded"></div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-colors duration-300 ${
                  selectedCategory === category
                    ? 'dark:bg-cosmic-600 bg-cosmic-500 text-white'
                    : 'dark:bg-space-800 bg-space-200 dark:text-space-300 text-space-700 hover:dark:bg-space-700 hover:bg-space-300'
                }`}
              >
                {category !== "all" && categoryIcons[category]}
                {category === "all" ? "All Skills" : categoryLabels[category]}
              </button>
            ))}
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          >
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="dark:bg-space-800/70 bg-space-200/70 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center justify-center shadow-lg border dark:border-space-700 border-space-300"
              >
                <div className="w-16 h-16 flex items-center justify-center mb-4 rounded-full dark:bg-space-700 bg-space-300">
                  {categoryIcons[skill.category]}
                </div>
                <h3 className="text-lg font-medium dark:text-white text-space-900">{skill.name}</h3>
                <p className="text-sm dark:text-space-400 text-space-600">{categoryLabels[skill.category]}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;