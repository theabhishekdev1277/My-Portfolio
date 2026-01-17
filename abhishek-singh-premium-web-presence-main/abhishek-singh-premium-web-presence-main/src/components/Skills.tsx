import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiFramer, 
  SiNodedotjs, SiExpress, SiPhp,
  SiMongodb, SiMysql,
  SiGit, SiGithub, SiFigma, SiPostman
} from 'react-icons/si';
import { HiSparkles, HiCpuChip } from 'react-icons/hi2';

const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Framer Motion', icon: SiFramer, color: '#BB4B96' },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#ffffff' },
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
    ],
  },
  {
    name: 'Database',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    ],
  },
  {
    name: 'Tools',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    ],
  },
  {
    name: 'AI/Automation',
    skills: [
      { name: 'Chatbots', icon: HiCpuChip, color: '#7C3AED' },
      { name: 'API Integrations', icon: HiSparkles, color: '#06B6D4' },
    ],
  },
];

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const activeSkills = skillCategories.find((cat) => cat.name === activeCategory)?.skills || [];

  return (
    <section id="skills" className="section-spacing relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-30" />
      <motion.div
        className="blob blob-secondary w-[500px] h-[500px] -top-48 -left-48 opacity-20"
        animate={{ x: [0, 80, 0], y: [0, 40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container-custom relative z-10" ref={containerRef}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-sm font-medium uppercase tracking-wider mb-4">
            Skills & Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Technologies I <span className="gradient-text">Master</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                activeCategory === category.name
                  ? 'bg-gradient-primary text-primary-foreground glow-primary'
                  : 'glass-card text-muted-foreground hover:text-foreground hover:border-primary/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.05 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {activeSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="skill-card group cursor-pointer"
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5, 
                rotateX: -5,
                boxShadow: `0 20px 40px -20px ${skill.color}40`
              }}
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:bg-gradient-primary transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <skill.icon 
                    className="w-8 h-8 transition-colors duration-300" 
                    style={{ color: skill.color }}
                  />
                </motion.div>
                <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                
                {/* Hover Tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Expert
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* All Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 glass-card p-8"
        >
          <h3 className="font-heading font-semibold text-xl mb-6 text-center">
            Full Stack <span className="gradient-text">Overview</span>
          </h3>
          <div className="grid md:grid-cols-5 gap-6">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + catIndex * 0.1 }}
                className="text-center"
              >
                <h4 className="text-sm font-medium text-primary mb-3">{category.name}</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center"
                      whileHover={{ scale: 1.2, backgroundColor: 'hsl(var(--primary))' }}
                      title={skill.name}
                    >
                      <skill.icon className="w-4 h-4" style={{ color: skill.color }} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
