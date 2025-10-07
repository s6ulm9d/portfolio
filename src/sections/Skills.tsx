import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";

const skills = [
  { name: "HTML", percent: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS / TailwindCSS", percent: 88, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", percent: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", percent: 60, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React / React.js", percent: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Framer Motion", percent: 60, logo: "https://logosandtypes.com/wp-content/uploads/2021/04/framer-motion.svg" },
  { name: "Node.js", percent: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", percent: 70, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", percent: 70, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "REST APIs", percent: 75, logo: "https://cdn-icons-png.flaticon.com/512/919/919836.png" },
  { name: "Java", percent: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Java (Android)", percent: 70, logo: "https://cdn-icons-png.flaticon.com/512/888/888879.png" },
  { name: "Kotlin", percent: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
  { name: "Python", percent: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Jupyter Notebook", percent: 60, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
  { name: "C", percent: 70, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "C++", percent: 65, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "JSON", percent: 85, logo: "https://i0.wp.com/bellekens.com/wp-content/uploads/2019/06/JSON_Logo_200_200.png?fit=200%2C200&ssl=1" },
  { name: "XML", percent: 75, logo: "https://e7.pngegg.com/pngimages/641/474/png-clipart-xml-editor-computer-icons-others-angle-text.png" },
  { name: "SQL", percent: 55, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Shell / Bash", percent: 65, logo: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png" },
  { name: "Power BI", percent: 60, logo: "https://1000logos.net/wp-content/uploads/2022/12/Power-BI-Logo-768x432.png" },
  { name: "Git / GitHub", percent: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: ".env / Config", percent: 75, logo: "https://cdn-icons-png.flaticon.com/512/4140/4140044.png" },
];

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
