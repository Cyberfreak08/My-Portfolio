import React from 'react';
import { motion } from 'framer-motion';

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  if (!isLoading) return null;
  
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 flex items-center justify-center z-50 dark:bg-space-950 bg-space-50"
    >
      <div className="relative w-24 h-24">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-t-4 border-cosmic-600 opacity-30"
        ></motion.div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "linear",
            repeatType: "loop"
          }}
          className="absolute inset-0 rounded-full border-t-4 border-b-4 border-nebula-500"
        ></motion.div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-mono dark:text-white text-space-900">HS</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;