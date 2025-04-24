import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { ProjectType } from '../types';

interface ProjectModalProps {
  project: ProjectType;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project.details) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-[calc(100%-2rem)] md:w-[90vw] max-w-4xl max-h-[90vh] bg-white dark:bg-space-800 rounded-xl shadow-xl overflow-hidden z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b dark:border-space-700">
              <h3 className="text-2xl font-bold dark:text-white">{project.title}</h3>
              <button
                onClick={onClose}
                className="p-2 hover:bg-space-100 dark:hover:bg-space-700 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 dark:text-white" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-medium dark:text-space-400 mb-1">Client</h4>
                    <p className="text-lg dark:text-white">{project.details.client}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium dark:text-space-400 mb-1">Application Name</h4>
                    <p className="text-lg dark:text-white">{project.details.applicationName}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium dark:text-space-400 mb-1">Project Description</h4>
                  <p className="dark:text-white">{project.details.projectDescription}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium dark:text-space-400 mb-1">Designation</h4>
                  <p className="dark:text-white">{project.details.designation}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium dark:text-space-400 mb-2">Role & Responsibilities</h4>
                  <ul className="list-disc pl-5 space-y-2 dark:text-white">
                    {project.details.role?.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-medium dark:text-space-400 mb-1">Duration</h4>
                    <p className="dark:text-white">{project.details.duration}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium dark:text-space-400 mb-1">Team Size</h4>
                    <p className="dark:text-white">{project.details.teamSize}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium dark:text-space-400 mb-1">Environment</h4>
                  <p className="dark:text-white">{project.details.environment}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium dark:text-space-400 mb-1">Work Company</h4>
                  <p className="dark:text-white">{project.details.workCompany}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
