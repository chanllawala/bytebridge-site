import React, { useState } from 'react';
import { TagCloud } from 'react-tagcloud';
import { motion, AnimatePresence } from 'framer-motion';

const techStack = [
  { 
    value: 'React', 
    count: 38,
    description: 'A JavaScript library for building interactive user interfaces with reusable components.',
    category: 'Frontend',
    experience: '4+ years'
  },
  { 
    value: 'Node.js', 
    count: 30,
    description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine for building scalable network applications.',
    category: 'Backend',
    experience: '3+ years'
  },
  { 
    value: 'TypeScript', 
    count: 35,
    description: 'Strongly typed programming language that builds on JavaScript, giving better tooling at any scale.',
    category: 'Language',
    experience: '3+ years'
  },
  { 
    value: 'Next.js', 
    count: 32,
    description: 'The React Framework for Production. Supports server-side rendering and static site generation.',
    category: 'Framework',
    experience: '3+ years'
  },
  { 
    value: 'Tailwind CSS', 
    count: 36,
    description: 'A utility-first CSS framework for rapidly building custom designs without leaving your HTML.',
    category: 'Styling',
    experience: '3+ years'
  },
  { 
    value: 'GraphQL', 
    count: 28,
    description: 'Query language for APIs that provides a more efficient, powerful, and flexible alternative to REST.',
    category: 'API',
    experience: '2+ years'
  },
  { 
    value: 'MongoDB', 
    count: 25,
    description: 'A NoSQL database program that uses JSON-like documents with optional schemas.',
    category: 'Database',
    experience: '3+ years'
  },
  { 
    value: 'PostgreSQL', 
    count: 26,
    description: 'Powerful, open source object-relational database system with over 30 years of active development.',
    category: 'Database',
    experience: '2+ years'
  },
  { 
    value: 'Docker', 
    count: 29,
    description: 'A platform to develop, ship, and run applications in containers.',
    category: 'DevOps',
    experience: '2+ years'
  },
  { 
    value: 'AWS', 
    count: 27,
    description: 'Amazon Web Services - A comprehensive cloud platform offering over 200 services.',
    category: 'Cloud',
    experience: '2+ years'
  },
  { 
    value: 'Figma', 
    count: 24,
    description: 'A collaborative interface design tool that works in the browser.',
    category: 'Design',
    experience: '3+ years'
  },
  { 
    value: 'Git', 
    count: 37,
    description: 'Distributed version control system for tracking changes in source code during software development.',
    category: 'Version Control',
    experience: '4+ years'
  },
  { 
    value: 'Jest', 
    count: 23,
    description: 'A delightful JavaScript Testing Framework with a focus on simplicity.',
    category: 'Testing',
    experience: '2+ years'
  },
  { 
    value: 'Cypress', 
    count: 22,
    description: 'Frontend testing tool built for the modern web.',
    category: 'Testing',
    experience: '1+ years'
  },
  { 
    value: 'Python', 
    count: 25,
    description: 'High-level, interpreted programming language with dynamic semantics and object-oriented design.',
    category: 'Language',
    experience: '3+ years'
  },
  { 
    value: 'Django', 
    count: 22,
    description: 'High-level Python web framework that encourages rapid development and clean, pragmatic design.',
    category: 'Framework',
    experience: '2+ years'
  },
  { 
    value: 'Firebase', 
    count: 24,
    description: 'Google\'s mobile and web application development platform.',
    category: 'Backend',
    experience: '2+ years'
  },
  { 
    value: 'Redux', 
    count: 28,
    description: 'Predictable state container for JavaScript apps, commonly used with React.',
    category: 'State Management',
    experience: '3+ years'
  },
  { 
    value: 'SASS', 
    count: 26,
    description: 'CSS preprocessor that adds special features like variables, nested rules and mixins.',
    category: 'Styling',
    experience: '3+ years'
  },
  { 
    value: 'Webpack', 
    count: 24,
    description: 'A static module bundler for modern JavaScript applications.',
    category: 'Build Tool',
    experience: '2+ years'
  },
];

const TechTag = ({ tag, size, color, onClick }) => {
  return (
    <motion.button
      type="button"
      className="inline-flex items-center m-1 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bytebridge-dark focus:ring-bytebridge-cyan"
      style={{
        fontSize: `${size}px`,
        color: color,
        backgroundColor: `${color}15`,
        border: `1px solid ${color}30`,
        WebkitTapHighlightColor: 'transparent',
      }}
      whileHover={{ 
        scale: 1.1,
        backgroundColor: `${color}25`,
        boxShadow: `0 4px 15px ${color}20`
      }}
      whileTap={{ scale: 0.95 }}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Tech clicked:', tag.value); // Debug log
        onClick(tag);
      }}
      aria-label={`Learn more about ${tag.value}`}
    >
      {tag.value}
    </motion.button>
  );
};

const TechDescription = ({ tech, onClose }) => {
  if (!tech) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <motion.div 
        className="relative bg-bytebridge-dark border border-bytebridge-cyan/20 rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl shadow-bytebridge-cyan/10 z-50"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-white">{tech.value}</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 -mr-1"
            aria-label="Close description"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p className="text-gray-300 mb-6">{tech.description}</p>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center">
            <span className="text-bytebridge-cyan font-medium">Category:</span>
            <span className="text-white ml-2">{tech.category}</span>
          </div>
          <div className="flex items-center">
            <span className="text-bytebridge-cyan font-medium">Experience:</span>
            <span className="text-white ml-2">{tech.experience}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const TechStackCloud = () => {
  const [selectedTech, setSelectedTech] = useState(null);
  
  const handleTechClick = (tech) => {
    console.log('Setting selected tech:', tech); // Debug log
    setSelectedTech(tech);
    // Disable body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };
  
  const handleCloseDescription = () => {
    console.log('Closing modal'); // Debug log
    setSelectedTech(null);
    // Re-enable body scroll when modal is closed
    document.body.style.overflow = 'unset';
  };
  
  // Close modal on Escape key press
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedTech) {
        handleCloseDescription();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [selectedTech]);
  
  const customRenderer = (tag, size, color) => (
    <TechTag 
      tag={tag} 
      size={size} 
      color={color} 
      onClick={handleTechClick}
    />
  );
  
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-bytebridge-darker to-bytebridge-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-white mb-2">
            Our <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto px-4">
            Click on any technology to learn more about our expertise
          </p>
        </motion.div>

        <motion.div 
          className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-full h-full max-w-3xl bg-gradient-radial from-bytebridge-cyan/5 to-transparent rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <TagCloud
              minSize={14}
              maxSize={32}
              tags={techStack}
              className="text-center p-2 min-h-[400px] w-full flex items-center justify-center"
              renderer={customRenderer}
              colorOptions={{
                luminosity: 'light',
                hue: ['#06b6d4', '#10b981', '#8b5cf6', '#ec4899', '#f59e0b']
              }}
              randomSeed={42}
              disableRandomColor={false}
            />
            <AnimatePresence mode="wait">
              {selectedTech && (
                <TechDescription 
                  key={selectedTech.value}
                  tech={selectedTech} 
                  onClose={handleCloseDescription}
                />
              )}
            </AnimatePresence>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TechStackCloud;
