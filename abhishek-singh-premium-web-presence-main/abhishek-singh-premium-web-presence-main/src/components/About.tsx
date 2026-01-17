import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  HiPresentationChartLine,
  HiCodeBracket,
  HiCubeTransparent,
} from "react-icons/hi2";

const highlights = [
  {
    icon: HiPresentationChartLine,
    title: "Conversion-focused design",
    description:
      "Every pixel serves a purpose. I design for results, not just aesthetics.",
  },
  {
    icon: HiCodeBracket,
    title: "Fast, modern development",
    description:
      "Built with the latest tech stack for speed, SEO, and scalability.",
  },
  {
    icon: HiCubeTransparent,
    title: "Long-term scalable systems",
    description: "Architecture that grows with your business needs.",
  },
];

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-spacing relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-50" />
      <motion.div
        className="blob blob-primary w-[400px] h-[400px] top-0 right-0 opacity-30"
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-custom relative z-10" ref={containerRef}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-primary p-[2px]"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-2xl bg-background" />
              </motion.div>

              {/* Glow Effect */}
              <div className="absolute inset-4 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-20 animate-pulse-glow" />
                <div className="w-full h-full bg-card flex items-center justify-center relative">
                  <img
                    src="/Mypic.jpg"
                    alt="Abhishek Singh"
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6 text-center">
                    <p className="text-foreground font-medium">
                      Abhishek Singh
                    </p>
                    <p className="text-sm text-primary">CEO @ Illustro Webs</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 rounded-lg glass-card flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-2xl">💻</span>
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-20 h-20 rounded-lg glass-card flex items-center justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-3xl">🚀</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="inline-block text-primary text-sm font-medium uppercase tracking-wider mb-4"
            >
              About Me
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6"
            >
              Building Digital
              <span className="gradient-text"> Experiences</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="glass-card p-6 md:p-8 mb-8"
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                I build modern websites and systems that increase sales and
                automate operations.
              </p>
              <p className="text-foreground font-medium">
                CEO & Co-Founder at Illustro Webs.
              </p>
            </motion.div>

            {/* Highlight Cards */}
            <div className="space-y-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="group glass-card p-4 flex items-start gap-4 hover:border-primary/50 transition-all duration-300"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
