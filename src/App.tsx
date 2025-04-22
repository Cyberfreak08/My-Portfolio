import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen dark:bg-space-950 bg-space-50 dark:text-white text-space-900 transition-colors duration-300">
        <AnimatePresence>
          {loading ? (
            <Loader isLoading={loading} />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Navbar />
              <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ExperienceSection />
                <ContactSection />
              </main>
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;