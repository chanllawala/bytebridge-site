import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'web',
    description: 'A full-featured e-commerce platform with payment integration and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe']
  },
  {
    id: 2,
    title: 'Mobile Fitness App',
    category: 'mobile',
    description: 'A fitness tracking application with workout plans and progress analytics.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    tags: ['React Native', 'Firebase', 'Redux']
  },
  {
    id: 3,
    title: 'Corporate Website',
    category: 'web',
    description: 'A modern corporate website with blog and contact management system.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80',
    tags: ['Next.js', 'Tailwind CSS', 'Strapi']
  },
  {
    id: 4,
    title: 'Food Delivery App',
    category: 'mobile',
    description: 'Food ordering and delivery application with real-time tracking.',
    image: 'https://images.unsplash.com/photo-1504674900247-087703934569?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    tags: ['Flutter', 'Node.js', 'MongoDB']
  },
  {
    id: 5,
    title: 'Portfolio Website',
    category: 'web',
    description: 'A personal portfolio website with project showcase and blog.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
    tags: ['React', 'Gatsby', 'GraphQL']
  },
  {
    id: 6,
    title: 'Task Management App',
    category: 'mobile',
    description: 'A collaborative task management application for teams.',
    image: 'https://images.unsplash.com/photo-1579389083078-4e7018379f0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    tags: ['React Native', 'Firebase', 'Redux']
  },
];

const ProjectCard = ({ project, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="bg-white/5 rounded-xl overflow-hidden border border-white/10 backdrop-blur-sm hover:border-bytebridge-cyan/50 transition-all duration-300 cursor-pointer h-full flex flex-col"
    onClick={onClick}
    whileHover={{ y: -5 }}
  >
    <div className="relative pt-[56.25%] overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
        <div className="w-full">
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-1.5 py-0.5 sm:px-2 sm:py-1 text-[10px] sm:text-xs bg-bytebridge-cyan/20 text-bytebridge-cyan rounded-full whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="p-3 sm:p-4 flex-1 flex flex-col">
      <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">{project.title}</h3>
      <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">{project.description}</p>
      <div className="mt-auto">
        <span className="inline-block px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs rounded-full bg-bytebridge-cyan/10 text-bytebridge-cyan">
          {project.category === 'web' ? 'Web Development' : 'Mobile App'}
        </span>
      </div>
    </div>
  </motion.div>
);

const ProjectModal = ({ project, onClose }) => (
  <motion.div 
    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
  >
    <motion.div 
      className="bg-gradient-to-br from-bytebridge-dark to-bytebridge-darker rounded-xl sm:rounded-2xl w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto border border-bytebridge-cyan/20 relative"
      initial={{ scale: 0.95, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.95, opacity: 0, y: 20 }}
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      onClick={(e) => e.stopPropagation()}
    >
      <button 
        onClick={onClose}
        className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-400 hover:text-white z-10 bg-black/50 rounded-full p-1"
        aria-label="Close modal"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <div className="relative h-48 sm:h-64 md:h-80 lg:h-96">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      </div>
      
      <div className="p-4 sm:p-6 md:p-8">
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-0.5 sm:px-3 sm:py-1 text-xs sm:text-sm bg-bytebridge-cyan/20 text-bytebridge-cyan rounded-full whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-4">{project.title}</h2>
        <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 sm:gap-4">
          <a 
            href="#contact" 
            className="flex-1 sm:flex-none text-center px-4 sm:px-6 py-2 bg-gradient-to-r from-bytebridge-cyan to-bytebridge-green text-bytebridge-darker font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base"
            onClick={onClose}
          >
            Start Similar Project
          </a>
          <button 
            onClick={onClose}
            className="flex-1 sm:flex-none text-center px-4 sm:px-6 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-white/5 transition-colors text-sm sm:text-base"
          >
            Close
          </button>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const ProjectShowcase = () => {
  const [category, setCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  
  const filteredProjects = category === 'all' 
    ? projects 
    : projects.filter(project => project.category === category);

  return (
    <section className="py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-bytebridge-darker to-bytebridge-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12 px-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Our Work</h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">
            Explore our portfolio of successful projects and see how we've helped businesses like yours succeed.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-2">
          <button
            onClick={() => setCategory('all')}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium transition-colors ${
              category === 'all'
                ? 'bg-gradient-to-r from-bytebridge-cyan to-bytebridge-green text-bytebridge-darker'
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setCategory('web')}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium transition-colors ${
              category === 'web'
                ? 'bg-gradient-to-r from-bytebridge-cyan to-bytebridge-green text-bytebridge-darker'
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            Web Development
          </button>
          <button
            onClick={() => setCategory('mobile')}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium transition-colors ${
              category === 'mobile'
                ? 'bg-gradient-to-r from-bytebridge-cyan to-bytebridge-green text-bytebridge-darker'
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            Mobile Apps
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-0">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal 
              project={selectedProject} 
              onClose={() => setSelectedProject(null)} 
            />
          )}
        </AnimatePresence>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-bytebridge-cyan to-bytebridge-green hover:opacity-90 transition-opacity"
          >
            Start Your Project
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
