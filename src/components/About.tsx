import { motion } from 'framer-motion';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Code2, Cloud, Shield, Database, GitBranch, Gauge } from 'lucide-react';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const highlights = [
    {
      icon: GitBranch,
      title: 'CI/CD Excellence',
      description: '40% reduction in release time through automated pipelines',
    },
    {
      icon: Cloud,
      title: 'Multi-Cloud Expert',
      description: 'AWS, Azure, and GCP infrastructure automation',
    },
    {
      icon: Shield,
      title: 'DevSecOps',
      description: '75% reduction in critical security incidents',
    },
    {
      icon: Database,
      title: 'Container Orchestration',
      description: 'Kubernetes (EKS, AKS, GKE) deployment expertise',
    },
    {
      icon: Code2,
      title: 'Infrastructure as Code',
      description: 'Terraform, Ansible, CloudFormation automation',
    },
    {
      icon: Gauge,
      title: 'Observability',
      description: 'Comprehensive monitoring with Prometheus & Grafana',
    },
  ];

  return (
    <section id="about" className="py-10 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            data-aos="fade-right"
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Results-driven DevOps Engineer with <span className="text-accent font-semibold">3+ years of experience</span> in 
              CI/CD pipeline automation, cloud infrastructure, and containerized applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in building <span className="text-primary font-semibold">secure, scalable, and resilient systems</span> using 
              cutting-edge technologies like Kubernetes, Terraform, and comprehensive monitoring solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My approach focuses on <span className="text-accent font-semibold">DevSecOps practices</span>, shift-left testing, 
              and automating everything to accelerate feature delivery while maintaining high reliability and security standards.
            </p>
          </motion.div>

          <motion.div
            data-aos="fade-left"
            className="relative"
          >
            <div className="glass-card p-8 rounded-lg space-y-4">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Core Competencies</h3>
              <div className="space-y-3">
                {[
                  'Cloud Infrastructure (AWS, Azure, GCP)',
                  'Container Orchestration (Kubernetes, Docker)',
                  'CI/CD Pipeline Automation',
                  'Infrastructure as Code (Terraform, Ansible)',
                  'Monitoring & Observability',
                  'DevSecOps & Security Automation',
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse"></div>
                    <span className="text-foreground">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="glass-card p-6 rounded-lg text-center hover:glow-effect transition-all group"
            >
              <item.icon className="h-10 w-10 mx-auto mb-4 text-accent group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold mb-2 text-sm">{item.title}</h4>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
