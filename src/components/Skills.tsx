import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import { 
  Server, 
  Cloud, 
  Container, 
  GitBranch, 
  Shield, 
  Activity,
  Code,
  Database,
  MessageSquare,
  TestTube,
  Users
} from 'lucide-react';

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const skillCategories = [
    {
      icon: GitBranch,
      title: 'DevOps Tools',
      skills: ['Jenkins', 'GitHub Actions', 'GitLab CI/CD', 'Azure DevOps', 'ArgoCD', 'Spinnaker', 'Tekton'],
      color: 'text-blue-500',
    },
    {
      icon: Container,
      title: 'Containers',
      skills: ['Docker', 'Kubernetes (EKS, AKS, GKE)', 'OpenShift', 'Helm', 'Kustomize'],
      color: 'text-cyan-500',
    },
    {
      icon: Server,
      title: 'IaC',
      skills: ['Terraform', 'Ansible', 'AWS CloudFormation', 'Pulumi', 'Packer'],
      color: 'text-purple-500',
    },
    {
      icon: Cloud,
      title: 'Cloud Platforms',
      skills: ['AWS', 'Azure', 'GCP'],
      color: 'text-orange-500',
    },
    {
      icon: Shield,
      title: 'Security & DevSecOps',
      skills: ['SonarQube', 'Snyk', 'OWASP ZAP', 'Trivy', 'HashiCorp Vault', 'Aqua Security', 'Prisma Cloud', 'Checkov'],
      color: 'text-red-500',
    },
    {
      icon: Activity,
      title: 'Monitoring',
      skills: ['Prometheus', 'Grafana', 'ELK/EFK', 'Splunk', 'Datadog', 'New Relic', 'CloudWatch', 'OpenTelemetry'],
      color: 'text-green-500',
    },
    {
      icon: Code,
      title: 'Programming',
      skills: ['Python', 'Bash', 'Go', 'Groovy', 'Java', 'YAML', 'PowerShell'],
      color: 'text-yellow-500',
    },
    {
      icon: MessageSquare,
      title: 'Messaging',
      skills: ['Kafka', 'RabbitMQ', 'Redis'],
      color: 'text-pink-500',
    },
    {
      icon: Database,
      title: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'DynamoDB'],
      color: 'text-indigo-500',
    },
    {
      icon: TestTube,
      title: 'Testing',
      skills: ['Selenium', 'JUnit', 'PyTest', 'Postman', 'Cypress', 'Robot Framework'],
      color: 'text-teal-500',
    },
    {
      icon: Users,
      title: 'Collaboration',
      skills: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'JIRA', 'Confluence'],
      color: 'text-violet-500',
    },
  ];

  return (
    <section id="skills" className="py-10 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for modern DevOps, cloud infrastructure, and automation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              data-aos="zoom-in"
              data-aos-delay={index * 50}
              className="glass-card p-6 rounded-lg hover:glow-effect transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg group-hover:scale-110 transition-transform">
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="px-3 py-1.5 bg-secondary/50 text-secondary-foreground rounded-full text-sm hover:bg-accent/20 hover:text-accent transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          data-aos="fade-up"
          className="mt-16 text-center max-w-3xl mx-auto glass-card p-8 rounded-lg"
        >
          <h3 className="text-2xl font-bold mb-4 text-gradient">Always Learning</h3>
          <p className="text-muted-foreground leading-relaxed">
            The DevOps landscape is constantly evolving, and I'm committed to staying at the forefront 
            of new technologies, methodologies, and best practices. Currently exploring serverless architectures, 
            GitOps workflows, and advanced Kubernetes patterns.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
