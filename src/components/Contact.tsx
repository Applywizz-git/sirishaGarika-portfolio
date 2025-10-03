import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Sirishagarika06@gmail.com',
      href: 'mailto:Sirishagarika06@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (330) 651-7991',
      href: 'tel:+13306517991',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Youngstown, OH',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss DevOps opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            data-aos="fade-right"
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <motion.div
                    key={info.label}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4"
                  >
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <info.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-foreground hover:text-accent transition-colors font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-muted-foreground mb-4">Connect with me:</p>
                <div className="flex gap-4">
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
              </div>
            </div>

            <div className="glass-card p-6 rounded-lg">
              <h4 className="font-semibold mb-3 text-accent">Open to Opportunities</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I'm currently seeking full-time DevOps Engineer positions and open to exciting projects 
                that involve cloud infrastructure, CI/CD automation, and containerization technologies.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            data-aos="fade-left"
            className="glass-card p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  className="w-full min-h-[150px]"
                />
              </div>

              <Button type="submit" className="w-full group">
                <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
