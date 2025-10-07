import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, MouseEvent } from 'react';
import { SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiPython, SiRust } from 'react-icons/si';

interface Skill {
  name: string;
  icon: JSX.Element;
  color: string;
  level: number;
}

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseXRelative = (e.clientX - centerX) / (rect.width / 2);
    const mouseYRelative = (e.clientY - centerY) / (rect.height / 2);

    mouseX.set(mouseXRelative);
    mouseY.set(mouseYRelative);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, rotateX: 0, rotateY: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      className="relative group cursor-pointer"
    >
      <motion.div
        whileHover={{
          scale: 1.05,
          z: 100,
        }}
        transition={{ duration: 0.3 }}
        className="glass-strong rounded-3xl p-8 relative overflow-hidden h-full"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at center, ${skill.color}40, transparent)`,
            filter: 'blur(60px)',
          }}
        />

        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          animate={{
            background: [
              `linear-gradient(0deg, ${skill.color}15, transparent)`,
              `linear-gradient(120deg, ${skill.color}15, transparent)`,
              `linear-gradient(240deg, ${skill.color}15, transparent)`,
              `linear-gradient(360deg, ${skill.color}15, transparent)`,
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <div className="relative z-10" style={{ transform: 'translateZ(50px)' }}>
          <motion.div
            whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
            className="text-7xl mb-6 flex justify-center"
            style={{ color: skill.color, filter: 'drop-shadow(0 0 20px currentColor)' }}
          >
            {skill.icon}
          </motion.div>

          <h3 className="text-2xl font-bold text-white mb-4 text-center">{skill.name}</h3>

          <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden backdrop-blur-sm">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.15 + 0.5, ease: 'easeOut' }}
              className="h-full rounded-full relative overflow-hidden"
              style={{
                background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                boxShadow: `0 0 20px ${skill.color}80`,
              }}
            >
              <motion.div
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.15 + 0.8 }}
            className="text-gray-400 text-center mt-3 text-sm"
          >
            {skill.level}% Proficiency
          </motion.p>
        </div>

        <motion.div
          className="absolute inset-0 border-2 rounded-3xl transition-all duration-500 pointer-events-none"
          style={{
            borderColor: skill.color,
            opacity: 0,
          }}
          whileHover={{
            opacity: 0.5,
          }}
        />

        <div
          className="absolute -inset-1 bg-gradient-to-r opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-3xl"
          style={{
            background: `linear-gradient(45deg, ${skill.color}, transparent)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

const Skills = () => {
  const skills: Skill[] = [
    {
      name: 'JavaScript',
      icon: <SiJavascript />,
      color: '#F7DF1E',
      level: 95,
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript />,
      color: '#3178C6',
      level: 90,
    },
    {
      name: 'React',
      icon: <SiReact />,
      color: '#61DAFB',
      level: 92,
    },
    {
      name: 'Node.js',
      icon: <SiNodedotjs />,
      color: '#339933',
      level: 88,
    },
    {
      name: 'Python',
      icon: <SiPython />,
      color: '#3776AB',
      level: 85,
    },
    {
      name: 'Rust',
      icon: <SiRust />,
      color: '#CE422B',
      level: 78,
    },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-6 relative overflow-hidden">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-1/4 right-10 w-64 h-64 border-2 border-purple-500/20 rounded-full"
        style={{ filter: 'blur(2px)' }}
      />

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute bottom-1/4 left-10 w-48 h-48 border-2 border-pink-500/20 rounded-full"
        style={{ filter: 'blur(2px)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-gradient mb-4"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            Technical Skills
          </motion.h2>
          <p className="text-xl text-gray-400">
            Mastering the tools that shape the future
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
