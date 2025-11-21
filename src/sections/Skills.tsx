import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { skills } from "../constants";
import GlassCard from '../components/GlassCard';

const Skills = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const titleScale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const titleY = useTransform(scrollYProgress, [0, 0.2], [100, 0]);

  return (
    <div ref={containerRef} id="skills" className="relative min-h-[200vh] bg-[#f4f4f0]">
      {/* Cinematic Sticky Title */}
      <section className="h-screen sticky top-0 flex items-center justify-center overflow-hidden z-0 bg-[#f4f4f0]">
        <motion.div
          style={{ opacity: titleOpacity, scale: titleScale, y: titleY }}
          className="text-center"
        >
          <h2 className="text-7xl md:text-9xl font-bold text-black mb-6 tracking-tighter font-serif uppercase border-b-4 border-black inline-block pb-4">
            MY SKILLS
          </h2>
          <p className="text-2xl text-[#4a4a4a] font-serif italic">
            "The arsenal of tools I use to create."
          </p>
        </motion.div>
      </section>

      {/* Skills Grid Scrolling Over */}
      <div className="relative z-10 container mx-auto px-6 pb-40 mt-[-20vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <GlassCard
                icon={<img src={skill.logo} alt={skill.name} className="w-16 h-16 object-contain grayscale" />} // Grayscale logos for theme
                title={skill.name}
                description=""
                index={index}
                isSkill={true}
                percent={skill.percent}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
