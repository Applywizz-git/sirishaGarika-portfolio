import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import { Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Certification = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const certifications = [
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      icon: '☁️',
      color: 'from-orange-500 to-yellow-500',
    },
    {
      title: 'IBM DevOps & Software Engineering Certificate',
      issuer: 'IBM via Coursera',
      icon: '💼',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      title: 'Google Cloud Professional Cloud DevOps Engineer',
      issuer: 'Google Cloud via Coursera',
      icon: '🔧',
      color: 'from-red-500 to-pink-500',
    },
    {
      title: 'AWS Certified DevOps Engineer – Professional',
      issuer: 'AWS via Coursera',
      icon: '🚀',
      color: 'from-purple-500 to-blue-500',
    },
    {
      title: 'GitHub Foundations Certification',
      issuer: 'GitHub via DataCamp',
      icon: '💻',
      color: 'from-green-500 to-cyan-500',
    },
  ];

  return (
    <section id="certifications" className="py-10 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Validated expertise in cloud platforms, DevOps practices, and modern engineering methodologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              data-aos="flip-left"
              data-aos-delay={index * 100}
              className="glass-card rounded-lg overflow-hidden hover:glow-effect transition-all group"
            >
              <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl mb-3">{cert.icon}</div>
                  <Award className="h-6 w-6 text-accent group-hover:rotate-12 transition-transform" />
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all">
                  {cert.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4">
                  Issued by {cert.issuer}
                </p>

                {/* <Button variant="outline" size="sm" className="w-full group/btn">
                  <span>View Certificate</span>
                  <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button> */}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          data-aos="fade-up"
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuously pursuing new certifications and staying updated with the latest industry standards 
            and best practices in cloud computing and DevOps engineering.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certification;
