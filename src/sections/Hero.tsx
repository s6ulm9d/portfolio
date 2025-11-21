import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#f4f4f0]">
      {/* Background Texture (Optional: could add a subtle noise or paper texture here) */}

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-[#1a1a1a] tracking-tighter mb-6 italic">
            WELCOME
          </h1>
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-[#1a1a1a] mb-8 leading-tight uppercase tracking-widest border-b-2 border-black inline-block pb-2">
            TO MY PORTFOLIO
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-[#4a4a4a] mb-12 max-w-3xl mx-auto leading-relaxed font-serif italic"
        >
          "Crafting digital experiences with the precision of the press and the creativity of art."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex gap-6 justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[#1a1a1a] text-[#f4f4f0] border-2 border-black rounded-none font-serif text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            Read Projects
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent text-[#1a1a1a] border-2 border-black rounded-none font-serif text-lg hover:bg-black hover:text-white transition-all"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg
            className="w-8 h-8 text-black"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
