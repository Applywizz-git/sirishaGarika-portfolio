import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-6">
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 glass-card rounded-full hover:glow-effect transition-all group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
          </motion.button>

          <div className="text-center">
            {/* <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-muted-foreground flex items-center gap-2 justify-center"
            >
              Designed & Built with
              <Heart className="h-4 w-4 text-accent animate-glow-pulse" />
              by Sirisha Garika
            </motion.p> */}
            <p className="text-sm text-muted-foreground mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">
              About
            </a>
            <a href="#experience" className="text-muted-foreground hover:text-accent transition-colors">
              Experience
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-accent transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-muted-foreground hover:text-accent transition-colors">
              Skills
            </a>
              <a href="#certifications" className="text-muted-foreground hover:text-accent transition-colors">
              Certifications
            </a>
            <a href="#education" className="text-muted-foreground hover:text-accent transition-colors">
            Education
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">
              Contact
            </a>
             
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
