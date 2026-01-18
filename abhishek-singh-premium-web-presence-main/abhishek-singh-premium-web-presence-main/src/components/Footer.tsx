import { motion } from 'framer-motion';
import { HiEnvelope } from 'react-icons/hi2';
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const socialLinks = [
  { icon: HiEnvelope, href: 'mailto:abhishekinghiitp@gmail.com', label: 'Email' },
  { icon: FaInstagram, href: 'https://instagram.com/theabhishek1277', label: 'Instagram' },
  { icon: FaLinkedinIn, href: 'https://linkedin.com/in/abhishek0418', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com/theabhishekdev1277', label: 'GitHub' },
];

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-20" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a
            href="#home"
            className="font-heading text-xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            Abhishek Singh
          </motion.a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Abhishek Singh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
