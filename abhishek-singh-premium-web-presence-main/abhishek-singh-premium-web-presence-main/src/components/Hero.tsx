import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HiArrowRight, HiSparkles } from 'react-icons/hi2';
import { FaRocket, FaBrain, FaBolt } from 'react-icons/fa';

const stats = [
  { label: 'Projects Delivered', value: 20, suffix: '+' },
  { label: 'Clients Served', value: 15, suffix: '+' },
  { label: 'Avg Delivery', value: '7-14', suffix: ' Days' },
];

const Counter = ({ value, suffix }: { value: number | string; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || typeof value !== 'number') return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <span ref={ref} className="font-mono text-4xl md:text-5xl font-bold gradient-text">
      {typeof value === 'number' ? count : value}
      {suffix}
    </span>
  );
};

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-mesh-gradient" />
      
      {/* Animated Blobs */}
      <motion.div
        className="blob blob-primary w-[600px] h-[600px] -top-48 -left-48"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="blob blob-secondary w-[500px] h-[500px] top-1/3 -right-32"
        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="blob blob-accent w-[400px] h-[400px] -bottom-32 left-1/3"
        animate={{
          x: [0, 60, 0],
          y: [0, -60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Content */}
      <motion.div style={{ y, opacity }} className="container-custom relative z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <HiSparkles className="text-primary" />
            <span className="text-sm text-muted-foreground">Full-Stack Developer & CEO @ Illustro Webs</span>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="text-lg md:text-xl text-muted-foreground">Hello, I'm</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mt-2 mb-4">
              <span className="gradient-text">Abhishek Singh</span>
            </h1>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-4xl lg:text-5xl font-heading font-semibold text-foreground mb-6 leading-tight"
          >
            I Build Websites That Look Premium & 
            <br className="hidden md:block" />
            <span className="gradient-text-secondary"> Convert Visitors Into Customers.</span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            I'm Abhishek Singh — Full-Stack Web Developer & CEO @ Illustro Webs.
            <br />
            I help brands scale using modern websites, automation systems, and high-performance UI.
          </motion.p>

          {/* Trust Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-12"
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <FaBolt className="text-primary" />
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <FaBrain className="text-secondary" />
              <span>Strategy + Execution</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <FaRocket className="text-accent" />
              <span>Performance Optimized</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.a
              href="#contact"
              className="group flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-primary text-primary-foreground font-semibold text-lg glow-primary transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: '0 0 50px -10px hsl(var(--primary))' }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Free Website Audit
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#projects"
              className="group flex items-center gap-2 px-8 py-4 rounded-full glass-card text-foreground font-semibold text-lg hover:border-primary/50 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass-card p-6 text-center"
                whileHover={{ scale: 1.05, borderColor: 'hsl(var(--primary) / 0.5)' }}
                transition={{ delay: index * 0.1 }}
              >
                <Counter value={stat.value} suffix={stat.suffix} />
                <p className="text-muted-foreground mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="scroll-indicator"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <div className="scroll-indicator-line">
            <motion.div
              className="w-1 h-3 rounded-full bg-primary"
              animate={{ y: [0, 40, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
