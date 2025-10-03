import { motion } from 'framer-motion';
import { useEffect } from 'react';
import AOS from 'aos';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const experiences = [
    {
      title: 'Cloud Engineer Intern',
      company: 'Youngstown State University',
      period: 'Jan 2024 – Jun 2025',
      location: 'Youngstown, OH',
      achievements: [
        'Deployed scalable applications on AWS (EC2, S3, Lambda), improving uptime by 25%',
        'Standardized infrastructure with Terraform + Ansible, cutting setup time by 50%',
        'Managed Kubernetes clusters (EKS, Minikube), reducing downtime by 30%',
        'Built GitLab CI/CD pipelines with SAST/DAST, reducing release errors by 30%',
        'Centralized monitoring with Prometheus, Grafana, and CloudWatch',
        'Automated deployment tasks with Python/Bash scripts, saving 15 hours monthly',
      ],
    },
    {
      title: 'DevOps Engineer',
      company: 'M3 Solutions',
      period: 'May 2021 – Apr 2023',
      location: 'Hyderabad,India',
      achievements: [
        'Built CI/CD pipelines with Jenkins & GitLab, reducing release time by 40%',
        'Automated AWS infrastructure provisioning with Terraform + Ansible',
        'Deployed Dockerized applications on Kubernetes (EKS), reducing downtime by 30%',
        'Integrated SonarQube, Snyk, and Trivy, reducing critical incidents by 75%',
        'Enhanced observability with Prometheus, Grafana, and ELK stack',
        'Automated testing with Postman + PyTest, reducing production defects by 25%',
        'Applied shift-left testing, raising deployment success rates from 85% to 97%',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-6 top-6 w-5 h-5 bg-accent rounded-full border-4 border-background animate-glow-pulse"></div>

                <div className="md:ml-20 glass-card p-8 rounded-lg hover:glow-effect transition-all">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gradient mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-lg text-foreground mb-1">
                        <Briefcase className="h-5 w-5 text-accent" />
                        {exp.company}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                    </div>
                    <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-mono">
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-3 mt-6">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <span className="text-accent mt-1">▹</span>
                        <span className="text-muted-foreground">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
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
