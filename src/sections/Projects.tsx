import { motion } from 'framer-motion';
import { Bot, Code, Rocket } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Projects = () => {
  const projects = [
    {
      icon: <Bot />,
      title: 'AI Innovation',
      description: 'Cutting-edge artificial intelligence solutions that push the boundaries of machine learning and automation.',
    },
    {
      icon: <Code />,
      title: 'Code Mastery',
      description: 'Building robust, scalable applications with modern frameworks and best practices for optimal performance.',
    },
    {
      icon: <Rocket />,
      title: 'Launch Ready',
      description: 'Production-ready projects designed for speed, reliability, and seamless deployment to global audiences.',
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400">
            Explore my latest work and innovations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <GlassCard
              key={project.title}
              icon={project.icon}
              title={project.title}
              description={project.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
