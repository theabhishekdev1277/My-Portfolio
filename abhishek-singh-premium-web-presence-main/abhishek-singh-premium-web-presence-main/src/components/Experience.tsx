import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { HiBuildingOffice2, HiRocketLaunch, HiWrenchScrewdriver } from 'react-icons/hi2';

const experiences = [
  {
    title: 'CEO & Co-Founder',
    company: 'Illustro Webs',
    icon: HiRocketLaunch,
    description: [
      'Built and scaled a web & digital solutions agency',
      'Delivered websites, automation systems, and marketing funnels',
    ],
    color: 'primary',
  },
  {
    title: 'Web Developer',
    company: 'Sarvtantra DeviceAMC Pvt Ltd',
    icon: HiBuildingOffice2,
    description: [
      'Developed business web solutions and internal systems',
      'Improved UI, speed, and customer interaction',
    ],
    color: 'secondary',
  },
  {
    title: 'Full Stack Developer',
    company: 'Viam Petrochem Pvt Ltd',
    icon: HiWrenchScrewdriver,
    description: [
      'Built full-stack web apps and dashboards',
      'Worked with backend + database + deployment',
    ],
    color: 'accent',
  },
];

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="experience" className="section-spacing relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-30" />
      <motion.div
        className="blob blob-accent w-[400px] h-[400px] top-1/2 -right-48 opacity-20"
        animate={{ x: [0, -60, 0], y: [0, 80, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
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
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            My Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building expertise through impactful projects and leadership roles
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Animated Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-border">
            <motion.div
              className="w-full bg-gradient-primary origin-top"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-primary z-10"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.2, type: 'spring' }}
                />

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    className="glass-card p-6 md:p-8 group hover:border-primary/50 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-${exp.color}/10`}>
                      <exp.icon className={`w-7 h-7 text-${exp.color}`} />
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-bold text-xl text-foreground mb-1 group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium mb-4">{exp.company}</p>

                    {/* Description */}
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.5 + index * 0.2 + i * 0.1 }}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Hover Glow */}
                    <motion.div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.1), transparent 70%)',
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
