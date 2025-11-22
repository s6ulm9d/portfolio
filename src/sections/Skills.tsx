import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from "../constants";
import GlassCard from '../components/GlassCard';

const categories = ["All", "Frontend", "Backend", "Languages", "Tools"];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = skills.filter(skill =>
    activeCategory === "All" ? true : skill.category === activeCategory
  );

  return (
    <section id="skills" className="min-h-screen py-20 relative z-10">
      <div className="container mx-auto px-6">
        {/* Sticky Header with Parallax Text */}
        <div className="sticky top-24 z-20 mb-12 text-center mix-blend-difference">
          <motion.h2
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 inline-block"
          >
            Technical Arsenal
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            The technical arsenal I use to bring my wildest ideas to life.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 relative z-30">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === category
                ? "bg-white text-obsidian border-white"
                : "bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard
                  icon={
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-12 h-12 object-contain mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  }
                  title={skill.name}
                  description={`${skill.percent}% Proficiency`}
                  index={0} // Reset index for consistent animation
                  isSkill={true}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
