import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Github, Linkedin, Mail } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after some time
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 dark:bg-space-900 bg-space-100 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(#a855f7_1px,transparent_1px)] [background-size:40px_40px] opacity-10"></div>
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
              Comms Station
            </h2>
            <div className="w-24 h-1 bg-cosmic-600 rounded"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              variants={itemVariants}
              className="flex flex-col justify-center"
            >
              <h3 className="text-2xl font-semibold mb-6 dark:text-white text-space-900">
                Get In Touch
              </h3>
              
              <p className="text-lg mb-8 dark:text-space-300 text-space-700">
                Have a project in mind or want to discuss opportunities? I'd love to hear from you. Fill out the form, and I'll get back to you as soon as possible.
              </p>
              
              <div className="flex flex-col space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full dark:bg-nebula-700 bg-nebula-200 flex items-center justify-center">
                    <Mail className="dark:text-nebula-300 text-nebula-700" />
                  </div>
                  <div>
                    <p className="text-sm dark:text-space-400 text-space-600">Email</p>
                    <a href="mailto:harisundar@example.com" className="dark:text-white text-space-900 hover:dark:text-nebula-400 hover:text-nebula-600 transition-colors duration-300">
                      harisundar@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full dark:bg-cosmic-700 bg-cosmic-200 flex items-center justify-center">
                    <Github className="dark:text-cosmic-300 text-cosmic-700" />
                  </div>
                  <div>
                    <p className="text-sm dark:text-space-400 text-space-600">GitHub</p>
                    <a href="https://github.com/harisundar" target="_blank" rel="noopener noreferrer" className="dark:text-white text-space-900 hover:dark:text-nebula-400 hover:text-nebula-600 transition-colors duration-300">
                      github.com/harisundar
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full dark:bg-nebula-700 bg-nebula-200 flex items-center justify-center">
                    <Linkedin className="dark:text-nebula-300 text-nebula-700" />
                  </div>
                  <div>
                    <p className="text-sm dark:text-space-400 text-space-600">LinkedIn</p>
                    <a href="https://linkedin.com/in/harisundar" target="_blank" rel="noopener noreferrer" className="dark:text-white text-space-900 hover:dark:text-nebula-400 hover:text-nebula-600 transition-colors duration-300">
                      linkedin.com/in/harisundar
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="dark:bg-space-800/70 bg-space-200/70 backdrop-blur-sm rounded-xl p-8 shadow-lg border dark:border-space-700 border-space-300"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full dark:bg-nebula-700 bg-nebula-200 flex items-center justify-center mb-4">
                    <Send className="dark:text-nebula-300 text-nebula-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white text-space-900">Message Sent!</h3>
                  <p className="dark:text-space-300 text-space-700">Your message has been launched to orbit. I'll respond soon!</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium dark:text-space-300 text-space-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg dark:bg-space-700 bg-white border dark:border-space-600 border-space-300 dark:text-white text-space-900 focus:outline-none focus:ring-2 focus:dark:ring-nebula-500 focus:ring-nebula-400"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium dark:text-space-300 text-space-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg dark:bg-space-700 bg-white border dark:border-space-600 border-space-300 dark:text-white text-space-900 focus:outline-none focus:ring-2 focus:dark:ring-nebula-500 focus:ring-nebula-400"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium dark:text-space-300 text-space-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg dark:bg-space-700 bg-white border dark:border-space-600 border-space-300 dark:text-white text-space-900 focus:outline-none focus:ring-2 focus:dark:ring-nebula-500 focus:ring-nebula-400"
                      placeholder="Your message..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 rounded-lg bg-cosmic-600 hover:bg-cosmic-700 text-white font-medium transition-colors duration-300 flex items-center justify-center disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      <Send size={18} className="mr-2" />
                    )}
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;