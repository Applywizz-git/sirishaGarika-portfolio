import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, Phone, MapPin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CountUp from 'react-countup';
import profileImage from '/profileimage.png';

const Hero = () => {
  const stats = [
    { value: 3, label: 'Years Experience', suffix: '+' },
    { value: 40, label: 'Reduction in Release Time', suffix: '%' },
    { value: 30, label: 'Downtime Reduced', suffix: '%' },
    { value: 75, label: 'Critical Incidents Reduced', suffix: '%' },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-accent font-mono mb-4"
            >
              Hello, I'm
            </motion.p>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Sirisha Garika
            </h1>

            <div className="text-2xl md:text-3xl text-muted-foreground mb-6 h-12">
              <TypeAnimation
                sequence={[
                  'DevOps Engineer',
                  2000,
                  'Cloud Architect',
                  2000,
                  'CI/CD Specialist',
                  2000,
                  'Infrastructure Automation Expert',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-gradient"
              />
            </div>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Results-driven DevOps Engineer specializing in CI/CD automation, cloud infrastructure, 
              and containerized applications. Passionate about building secure, scalable, and resilient systems.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild className="group">
                <a href="/sirisha-resume.pdf" download>
                  <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                  Download Resume
                </a>
              </Button>
              <Button asChild variant="outline" className="group">
                <a href="#projects">
                  View Projects
                  <motion.div
                    className="ml-2 inline-block"
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ↓
                  </motion.div>
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                Youngstown, OH
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                +1 (330) 651-7991
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                Sirishagarika06@gmail.com
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              {/* <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 glass-card rounded-full hover:glow-effect transition-all"
              >
                <Github className="h-5 w-5" />
              </motion.a> */}
              <motion.a
                href="https://linkedin.com/in/sirisha-g-774b06376"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 glass-card rounded-full hover:glow-effect transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Profile Image with Floating Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              className="relative w-full max-w-sm mx-auto"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Main Profile Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden glass-card p-2">
                <motion.img
                  src={profileImage}
                  alt="Sirisha Garika - DevOps Engineer"
                  className="w-full rounded-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-xl" />
              </div>

              {/* Floating Badge - Experience */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -top-6 -left-6 glass-card p-4 rounded-xl glow-effect z-20"
                style={{
                  transform: 'rotate(-10deg)',
                }}
                whileHover={{ scale: 1.1, rotate: 0 }}
              >
                <div className="text-3xl font-bold text-gradient">3+</div>
                <div className="text-xs text-muted-foreground">Years Exp</div>
              </motion.div>

              {/* Floating Badge - AWS */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute top-1/4 -right-8 glass-card p-3 rounded-lg glow-effect z-20"
                style={{
                  transform: 'rotate(10deg)',
                }}
                whileHover={{ scale: 1.1, rotate: 0 }}
              >
                <div className="text-sm font-mono text-accent">AWS</div>
              </motion.div>

              {/* Floating Badge - Kubernetes */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="absolute bottom-1/4 -left-8 glass-card p-3 rounded-lg glow-effect z-20"
                style={{
                  transform: 'rotate(-15deg)',
                }}
                whileHover={{ scale: 1.1, rotate: 0 }}
              >
                <div className="text-sm font-mono text-accent">K8s</div>
              </motion.div>

              {/* Floating Badge - CI/CD */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                className="absolute -bottom-6 -right-8 glass-card p-4 rounded-xl glow-effect z-20"
                style={{
                  transform: 'rotate(8deg)',
                }}
                whileHover={{ scale: 1.1, rotate: 0 }}
              >
                <div className="text-2xl font-bold text-gradient">75%</div>
                <div className="text-xs text-muted-foreground">Faster Deploy</div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-10 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute -z-10 bottom-10 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
