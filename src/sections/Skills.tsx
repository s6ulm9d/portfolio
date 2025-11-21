import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";

import { skills } from "../constants";

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-4">
            My Skills
          </h2>
          <p className="text-xl text-gray-400">
            Hover on a skill to see the proficiency
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <GlassCard
              key={skill.name}
              icon={<img src={skill.logo} alt={skill.name} className="w-16 h-16" />}
              title={skill.name}
              description={
                <div className="w-full bg-white/20 rounded-full h-4 mt-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 h-4 rounded-full"
                    style={{ width: "0%" }}
                  />
                </div>
              }
              index={index}
              isSkill={true} // optional flag to differentiate from projects
              percent={skill.percent} // pass percentage for hover animation inside GlassCard
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
