import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { projects } from "../constants";
import GlassCard from '../components/GlassCard';
import { Code, Rocket } from 'lucide-react';

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center sticky top-0 bg-[#f4f4f0]">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, margin: "-10%" }}
        className="w-full max-w-7xl px-6"
      >
        <GlassCard
          icon={<project.icon size={64} />}
          title={project.title}
          description={
            <div className="mt-6">
              <p className="text-2xl md:text-3xl leading-relaxed text-[#333] font-serif italic">
                {project.description}
              </p>
              {(project.github || project.live) && (
                <div className="flex justify-center gap-8 mt-10">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-xl text-black hover:text-gray-600 transition-colors px-6 py-3 border-2 border-black hover:bg-black hover:text-white transition-all"
                    >
                      <Code size={24} /> GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-xl text-black hover:text-gray-600 transition-colors px-6 py-3 border-2 border-black hover:bg-black hover:text-white transition-all"
                    >
                      <Rocket size={24} /> Live
                    </a>
                  )}
                </div>
              )}
            </div>
          }
          index={index}
        />
      </motion.div>
    </section>
  );
};

const Projects = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const titleOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);

  return (
    <div ref={containerRef} id="projects" className="relative bg-[#f4f4f0]">
      {/* Cinematic Title Section */}
      <section className="h-screen flex items-center justify-center sticky top-0 overflow-hidden bg-[#f4f4f0] z-0">
        <motion.div
          style={{ opacity: titleOpacity, scale: titleScale }}
          className="text-center z-10"
        >
          <h2 className="text-7xl md:text-9xl font-bold text-black mb-8 tracking-tight font-serif uppercase border-b-4 border-black inline-block pb-4">
            FEATURED<br />PROJECTS
          </h2>
          <p className="text-2xl md:text-3xl text-[#4a4a4a] max-w-3xl mx-auto font-serif italic">
            "A curation of my best digital work."
          </p>
        </motion.div>
      </section>

      {/* Spacer */}
      <div className="h-[50vh]"></div>

      {/* Full Screen Project Cards */}
      <div className="relative z-20">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      {/* Extra space at bottom */}
      <div className="h-[50vh]"></div>
    </div>
  );
};

export default Projects;
