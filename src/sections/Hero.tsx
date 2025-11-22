import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import ScrambleText from '../components/ScrambleText';

const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="mb-6 inline-block">
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-neon-blue backdrop-blur-sm tracking-wider uppercase font-medium">
              Available for work
            </span>
          </motion.div>

          <div className="mb-8 flex flex-col items-center">
            <ScrambleText
              text="CREATIVE DEVELOPER"
              className="text-5xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-blue mb-2 justify-center"
              delay={0.2}
            />
            <ScrambleText
              text="& UI DESIGNER"
              className="text-5xl md:text-8xl font-bold tracking-tighter text-white/90 justify-center"
              delay={0.4}
            />
          </div>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Turning crazy ideas into reality through code.
            Specializing in ML, Security, and immersive web experiences.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row gap-6 justify-center items-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-obsidian font-bold rounded-full hover:bg-gray-200 transition-colors w-full md:w-auto"
            >
              View Projects
            </motion.a>

            <motion.div className="flex gap-6">
              {[Github, Linkedin, Mail].map((Icon, index) => (
                <motion.a
                  key={index}
                  href={index === 0 ? "https://github.com/s6ulm9d" : index === 1 ? "https://www.linkedin.com/in/soul-mad/" : "mailto:srybroiambusy@gmail.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: '#9333ea' }}
                  className="text-gray-400 hover:text-white transition-colors p-2"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="text-gray-400" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
