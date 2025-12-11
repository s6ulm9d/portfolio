import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from "../constants";
import GlassCard from '../components/GlassCard';
import ScrambleText from '../components/ScrambleText';

const categories = ["All", "Frontend", "Backend", "Languages", "Tools"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
    },
  },
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = skills.filter(skill =>
    activeCategory === "All" ? true : skill.category === activeCategory
  );

  return (
    <section id="skills" className="min-h-screen py-20 relative z-10 overflow-hidden">
      {/* Background Floating Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 5 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        {/* Sticky Header with Scramble Text */}
        <div className="relative z-20 mb-12 text-center mix-blend-difference">
          <div className="mb-6 inline-block">
            <ScrambleText
              text="Technical Arsenal"
              className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-gray-400"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            The comprehensive technical stack I leverage to engineer robust and scalable solutions.
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 relative z-30">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === category
                ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                : "bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={itemVariants}
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
                  index={0}
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
