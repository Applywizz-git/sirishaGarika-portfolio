// import { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import AOS from 'aos';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-coverflow';
// import { ExternalLink, Github } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import project1Image from '/CICD-pipeline.png';
// import project2Image from '/automation.png';
// import project3Image from '/cloud-native.png';

// const Projects = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   const projects = [
//     {
//       title: 'Secure CI/CD Pipeline with DevSecOps Automation',
//       description: 'Implemented end-to-end CI/CD pipeline integrating security scanning (SAST/DAST), automated testing, and deployment orchestration. Reduced security vulnerabilities by 75% and accelerated release cycles.',
//       technologies: ['Jenkins', 'GitLab CI', 'SonarQube', 'Trivy', 'Kubernetes', 'Terraform'],
//       gradient: 'from-blue-500 to-cyan-500',
//       image: project1Image,
//     },
//     {
//       title: 'Cloud-Native Task Management Platform',
//       description: 'Built a scalable microservices-based task management system on AWS with containerized deployment. Achieved 99.9% uptime with auto-scaling and comprehensive monitoring.',
//       technologies: ['AWS EKS', 'Docker', 'Prometheus', 'Grafana', 'RabbitMQ', 'PostgreSQL'],
//       gradient: 'from-purple-500 to-pink-500',
//       image: project2Image,
//     },
//     {
//       title: 'Cloud Infrastructure Automation & Monitoring',
//       description: 'Automated multi-cloud infrastructure provisioning using IaC tools and established centralized monitoring. Reduced infrastructure setup time by 50% and improved observability.',
//       technologies: ['Terraform', 'Ansible', 'AWS', 'Azure', 'Prometheus', 'ELK Stack'],
//       gradient: 'from-green-500 to-teal-500',
//       image: project3Image,
//     },
//   ];

//   return (
//     <section id="projects" className="py-10 relative overflow-hidden">
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute bottom-40 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
//       </div>

//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             Featured <span className="text-gradient">Projects</span>
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Showcasing real-world DevOps implementations that drive efficiency, security, and scalability
//           </p>
//         </motion.div>

//         <div data-aos="fade-up" className="max-w-6xl mx-auto">
//           <Swiper
//             modules={[Pagination, Autoplay, EffectCoverflow]}
//             effect="coverflow"
//             grabCursor={true}
//             centeredSlides={true}
//             slidesPerView="auto"
//             coverflowEffect={{
//               rotate: 50,
//               stretch: 0,
//               depth: 100,
//               modifier: 1,
//               slideShadows: true,
//             }}
//             pagination={{ clickable: true }}
//             autoplay={{ delay: 5000, disableOnInteraction: false }}
//             className="pb-16"
//           >
//             {projects.map((project, index) => (
//               <SwiperSlide key={index} className="max-w-2xl">
//                 <motion.div
//                   whileHover={{ scale: 1.02, y: -10 }}
//                   className="glass-card rounded-lg overflow-hidden h-full"
//                   style={{
//                     transformStyle: 'preserve-3d',
//                   }}
//                 >
//                   {/* Project Image */}
//                   <div className="relative h-48 overflow-hidden">
//                     <motion.img
//                       src={project.image}
//                       alt={project.title}
//                       className="w-full h-full object-cover"
//                       whileHover={{ scale: 1.1 }}
//                       transition={{ duration: 0.4 }}
//                     />
//                     <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20`} />
//                     <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${project.gradient}`}></div>
//                   </div>

//                   <div className="p-8">
//                     <h3 className="text-2xl font-bold mb-4 text-gradient">{project.title}</h3>
                  
//                     <p className="text-muted-foreground mb-6 leading-relaxed">
//                       {project.description}
//                     </p>

//                     <div className="flex flex-wrap gap-2 mb-6">
//                       {project.technologies.map((tech) => (
//                         <span
//                           key={tech}
//                           className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-mono"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>

//                     <div className="flex gap-4">
//                       {/* <Button variant="outline" size="sm" className="group">
//                         <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
//                         Code
//                       </Button>
//                       <Button size="sm" className="group">
//                         View Details
//                         <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                       </Button> */}
//                     </div>
//                   </div>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

















import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import project1Image from '/CICD-pipeline.png';
import project2Image from '/automation.png';
import project3Image from '/cloud-native.png';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projects = [
    {
      title: 'Secure CI/CD Pipeline with DevSecOps Automation',
      description: 'Implemented end-to-end CI/CD pipeline integrating security scanning (SAST/DAST), automated testing, and deployment orchestration. Reduced security vulnerabilities by 75% and accelerated release cycles.',
      technologies: ['Jenkins', 'GitLab CI', 'SonarQube', 'Trivy', 'Kubernetes', 'Terraform'],
      gradient: 'from-blue-500 to-cyan-500',
      image: project1Image,
    },
    {
      title: 'Cloud-Native Task Management Platform',
      description: 'Built a scalable microservices-based task management system on AWS with containerized deployment. Achieved 99.9% uptime with auto-scaling and comprehensive monitoring.',
      technologies: ['AWS EKS', 'Docker', 'Prometheus', 'Grafana', 'RabbitMQ', 'PostgreSQL'],
      gradient: 'from-purple-500 to-pink-500',
      image: project2Image,
    },
    {
      title: 'Cloud Infrastructure Automation & Monitoring',
      description: 'Automated multi-cloud infrastructure provisioning using IaC tools and established centralized monitoring. Reduced infrastructure setup time by 50% and improved observability.',
      technologies: ['Terraform', 'Ansible', 'AWS', 'Azure', 'Prometheus', 'ELK Stack'],
      gradient: 'from-green-500 to-teal-500',
      image: project3Image,
    },
  ];

  return (
    <section id="projects" className="py-10 relative overflow-hidden">
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
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing real-world DevOps implementations that drive efficiency, security, and scalability
          </p>
        </motion.div>

        <div data-aos="fade-up" className="max-w-6xl mx-auto relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 z-10 flex justify-between pointer-events-none">
            <button className="swiper-button-prev-custom bg-background/80 hover:bg-background backdrop-blur-sm border border-border rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl pointer-events-auto group">
              <ChevronLeft className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
            </button>
            <button className="swiper-button-next-custom bg-background/80 hover:bg-background backdrop-blur-sm border border-border rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl pointer-events-auto group">
              <ChevronRight className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
            </button>
          </div>

          <Swiper
            modules={[Pagination, Autoplay, EffectCoverflow, Navigation]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ 
              clickable: true,
              el: '.swiper-pagination'
            }}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            autoplay={{ 
              delay: 5000, 
              disableOnInteraction: false 
            }}
            className="pb-16"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="max-w-2xl">
                <motion.div
                  whileHover={{ scale: 1.02, y: -10 }}
                  className="glass-card rounded-lg overflow-hidden h-full"
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20`} />
                    <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${project.gradient}`}></div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-gradient">{project.title}</h3>
                  
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {/* <Button variant="outline" size="sm" className="group">
                        <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                        Code
                      </Button>
                      <Button size="sm" className="group">
                        View Details
                        <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button> */}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
