import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { HiArrowTopRightOnSquare, HiDocumentText, HiXMark, HiArrowRight } from 'react-icons/hi2';

const projects = [
  {
    id: 1,
    title: 'Nyaysetu',
    category: 'Web',
    description: 'Legal-tech platform that helps people access legal information, connect with services, and simplify legal awareness.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 2,
    title: 'R-Bazaar',
    category: 'E-Commerce',
    description: 'E-commerce platform with modern UI, product browsing, cart, checkout and admin-friendly product management.',
    tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Prisma'],
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    id: 3,
    title: 'Illustro Webs Website',
    category: 'Web',
    description: 'Agency website showcasing services, portfolio, lead capture with conversion-first UI.',
    tech: ['React', 'Framer Motion', 'Tailwind', 'Figma'],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    title: 'EventFlow',
    category: 'Systems',
    description: 'Event management system for colleges & professionals to manage registrations, schedules, speakers, and updates.',
    tech: ['React', 'Express', 'MySQL', 'Socket.io'],
    gradient: 'from-orange-500 to-red-500',
  },
];

const filters = ['All', 'Web', 'E-Commerce', 'Systems'];

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section-spacing relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-30" />

      <div className="container-custom relative z-10" ref={containerRef}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-medium uppercase tracking-wider mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my best work across web development, e-commerce, and digital systems
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-primary text-primary-foreground glow-primary'
                  : 'glass-card text-muted-foreground hover:text-foreground hover:border-primary/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.05 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="project-card cursor-pointer group"
                whileHover={{ 
                  scale: 1.02, 
                  rotateY: 2, 
                  rotateX: -2,
                }}
              >
                {/* Project Image Placeholder */}
                <div className={`h-48 md:h-64 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <span className="text-4xl font-heading font-bold text-white/80">{project.title.charAt(0)}</span>
                  </div>
                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center"
                  >
                    <span className="text-white font-medium">View Details</span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {project.category}
                    </span>
                    <motion.div
                      whileHover={{ rotate: 45 }}
                      className="w-8 h-8 rounded-full bg-muted flex items-center justify-center"
                    >
                      <HiArrowTopRightOnSquare className="w-4 h-4 text-muted-foreground" />
                    </motion.div>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-muted text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <div className="glass-card p-8 md:p-12 text-center bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
            <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4">
              Want a website like this?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's build something amazing together
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-primary text-primary-foreground font-semibold glow-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's build yours
              <HiArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card max-w-2xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={`h-48 bg-gradient-to-br ${selectedProject.gradient} relative`}>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <HiXMark className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <h3 className="font-heading font-bold text-2xl md:text-3xl mt-2 mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {selectedProject.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="font-medium mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-full bg-muted text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <motion.button
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <HiArrowTopRightOnSquare className="w-5 h-5" />
                    Live Demo
                  </motion.button>
                  <motion.button
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full glass-card font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <HiDocumentText className="w-5 h-5" />
                    Case Study
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
