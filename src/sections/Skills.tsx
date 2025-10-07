import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import "../index.css";

const skills = [
  { name: "HTML", percent: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "bg-orange-500" },
  { name: "CSS / TailwindCSS", percent: 88, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "bg-blue-500" },
  { name: "JavaScript", percent: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "bg-yellow-400" },
  { name: "TypeScript", percent: 60, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "bg-blue-600" },
  { name: "React / React.js", percent: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "bg-cyan-400" },
  { name: "Framer Motion", percent: 60, logo: "https://seeklogo.com/images/F/framer-logo-8ABFA2C51C-seeklogo.com.png", color: "bg-pink-400" },
  { name: "Node.js", percent: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "bg-green-500" },
  { name: "Express.js", percent: 70, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "bg-gray-300" },
  { name: "MongoDB", percent: 70, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "bg-green-700" },
  { name: "REST APIs", percent: 75, logo: "https://cdn-icons-png.flaticon.com/512/919/919836.png", color: "bg-indigo-400" },
  { name: "Java", percent: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", color: "bg-red-500" },
  { name: "Java (Android)", percent: 70, logo: "https://cdn-icons-png.flaticon.com/512/888/888879.png", color: "bg-green-500" },
  { name: "Kotlin", percent: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg", color: "bg-purple-500" },
  { name: "Python", percent: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "bg-blue-400" },
  { name: "Jupyter Notebook", percent: 60, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg", color: "bg-orange-400" },
  { name: "C", percent: 70, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", color: "bg-blue-700" },
  { name: "C++", percent: 65, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", color: "bg-blue-600" },
  { name: "JSON", percent: 85, logo: "https://cdn-icons-png.flaticon.com/512/136/136521.png", color: "bg-yellow-300" },
  { name: "XML", percent: 75, logo: "https://cdn-icons-png.flaticon.com/512/136/136525.png", color: "bg-indigo-500" },
  { name: "SQL", percent: 55, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "bg-blue-800" },
  { name: "Shell / Bash / Command Line", percent: 65, logo: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png", color: "bg-gray-700" },
  { name: "Power BI", percent: 60, logo: "https://seeklogo.com/images/P/power-bi-logo-25F566C8E5-seeklogo.com.png", color: "bg-yellow-500" },
  { name: "Git / GitHub", percent: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "bg-gray-900" },
  { name: ".env / Config", percent: 75, logo: "https://cdn-icons-png.flaticon.com/512/4140/4140044.png", color: "bg-green-400" },
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section className="skills-section p-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-4">My Skills</h2>
        <p className="text-xl text-gray-300">Hover on a skill to see progress</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {skills.map((skill, index) => {
          const [props, api] = useSpring(() => ({
            rotateX: 0,
            rotateY: 0,
            scale: 0.95,
            opacity: 0.6,
            config: { mass: 1, tension: 400, friction: 25 },
          }));

          const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            api.start({
              rotateX: -y / 8, // more max tilt
              rotateY: x / 8,
              scale: 1.12,     // bigger pop-out
              opacity: 1,
            });
          };

          const handleMouseLeave = () => {
            api.start({ rotateX: 0, rotateY: 0, scale: 0.95, opacity: 0.6 });
          };

          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <animated.div
                className="skill-card bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 flex flex-col items-center text-center cursor-pointer shadow-xl will-change-transform"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: props.rotateX
                    .to((rx) => `perspective(1000px) rotateX(${rx}deg)`)
                    .to((rxStr) =>
                      props.rotateY.to((ry) => rxStr + ` rotateY(${ry}deg)`)
                    )
                    .to((finalStr) => props.scale.to((s) => `${finalStr} scale(${s})`)),
                  opacity: props.opacity,
                }}
              >
                <img src={skill.logo} alt={skill.name} className="w-16 h-16 mb-4" />
                <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden">
                  <animated.div
                    className={`${skill.color} h-4 rounded-full`}
                    style={{
                      width: hoveredSkill === skill.name ? `${skill.percent}%` : "0%",
                      transition: "width 1.5s ease-in-out",
                    }}
                  />
                </div>
                <span className="text-white mt-2">
                  {hoveredSkill === skill.name ? `${skill.percent}%` : "0%"}
                </span>
              </animated.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
