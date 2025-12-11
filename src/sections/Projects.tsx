import { motion } from 'framer-motion';
import { useRef } from 'react';
import { projects } from "../constants";
import GlassCard from '../components/GlassCard';
import { Code, Rocket } from 'lucide-react';

const Projects = () => {
  const containerRef = useRef(null);

  return (
    <section id="projects" className="min-h-screen py-20 relative z-10" ref={containerRef}>
      <div className="container mx-auto px-6">

        {/* Sticky Header with Parallax Text */}
        <div className="relative z-20 mb-16 text-center mix-blend-difference">
          <motion.h2
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 inline-block"
          >
            Featured Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 max-w-2xl mx-auto mt-4"
          >
            A curated portfolio of innovative solutions, engineering challenges, and technical breakthroughs.
          </motion.p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <GlassCard
                icon={<project.icon size={40} />}
                title={project.title}
                description={
                  <div className="flex flex-col h-full">
                    <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                      {project.description}
                    </p>

                    <div className="flex gap-4 mt-auto pt-4 border-t border-white/10">
                      {project.github || project.live ? (
                        <>
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                            >
                              <Code size={18} /> Code
                            </a>
                          )}
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-neon-blue transition-colors"
                            >
                              <Rocket size={18} /> Live Demo
                            </a>
                          )}
                        </>
                      ) : (
                        <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium text-gray-500 border border-white/5 uppercase tracking-wider">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                }
                index={index}
                className={!project.github && !project.live ? "opacity-70 border-dashed" : ""}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
