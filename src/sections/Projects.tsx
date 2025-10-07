import { motion } from 'framer-motion';
import { Bot, Code, Rocket } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Projects = () => {
  const projects = [
    {
      icon: <Bot />,
      title: 'Moodify',
      description: 'Interactive platform enhancing user experience through personalized content.',
      github: 'https://github.com/s6ulm9d/moodify',
      live: 'https://moodify-wine.vercel.app/',
    },
    {
      icon: <Code />,
      title: 'GhostPrint Web',
      description: 'Monitors user interactions for anomaly detection and privacy protection.',
      github: 'https://github.com/s6ulm9d/Ghgostprint-web',
      live: 'https://ghostprint-web.netlify.app/',
    },
    {
      icon: <Rocket />,
      title: 'Spotify Clone',
      description: 'Music streaming interface clone showcasing UI/UX and interactivity skills.',
      github: 'https://github.com/s6ulm9d/spotify-clone',
      live: 'https://s6ulm9.vercel.app/',
    },
    {
      icon: <Bot />,
      title: 'Dynamic Island (Future Idea)',
      description: 'Innovative floating overlay feature improving user interactions on mobile.',
    },
    {
      icon: <Code />,
      title: 'Security App (Future Idea)',
      description: 'Advanced mobile platform for user behavior monitoring and anomaly detection.',
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
              description={
                <>
                  <p>{project.description}</p>
                  {(project.github || project.live) && (
                    <div className="flex justify-center gap-4 mt-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-gray-200 hover:text-purple-400 transition-colors"
                        >
                          <Code size={16} /> GitHub
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-gray-200 hover:text-purple-400 transition-colors"
                        >
                          <Rocket size={16} /> Live
                        </a>
                      )}
                    </div>
                  )}
                </>
              }
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
