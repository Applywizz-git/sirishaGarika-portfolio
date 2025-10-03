import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const education = [
    {
      degree: "Master's in Computing & Information Systems",
      institution: 'Youngstown State University',
      location: 'Youngstown, OH',
      period: 'Aug 2023 – May 2025',
      description: 'Advanced studies in cloud computing, distributed systems, and software engineering practices.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      degree: 'B.Tech in Electrical & Electronics Engineering',
      institution: 'Vasireddy Venkatadri Institute of Technology',
      location: 'Andhra pradesh,India',
      period: 'Sep 2018 – May 2022',
      description: 'Foundation in engineering principles, systems design, and problem-solving methodologies.',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="education" className="py-10 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation in technology and engineering
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="glass-card rounded-lg overflow-hidden hover:glow-effect transition-all group"
            >
              <div className={`h-1.5 bg-gradient-to-r ${edu.gradient}`}></div>
              
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-3 bg-accent/10 rounded-lg group-hover:scale-110 transition-transform">
                        <GraduationCap className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gradient mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-lg text-foreground font-semibold">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground ml-0 sm:ml-16">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-accent" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-accent" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground ml-0 sm:ml-16 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          data-aos="fade-up"
          className="mt-12 text-center max-w-2xl mx-auto glass-card p-8 rounded-lg"
        >
          <h3 className="text-xl font-bold mb-3 text-gradient">Academic Excellence</h3>
          <p className="text-muted-foreground leading-relaxed">
            My academic journey has equipped me with strong analytical skills, theoretical knowledge, 
            and practical experience that complement my professional expertise in DevOps and cloud engineering.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
