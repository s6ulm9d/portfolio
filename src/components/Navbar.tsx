import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      color: '#9333ea', // neon-purple
      textShadow: '0 0 8px rgba(147, 51, 234, 0.5)',
      transition: { duration: 0.2 }
    }
  };

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}
      >
        <div className={`mx-auto max-w-7xl px-6 transition-all duration-300 ${scrolled ? 'bg-obsidian/80 backdrop-blur-md border border-white/10 rounded-full shadow-lg mx-4' : 'bg-transparent'}`}>
          <div className="flex items-center justify-between h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold font-serif tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 cursor-pointer"
            >
              Soulmad
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center">
              {['Home', 'Skills', 'Projects', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  variants={linkVariants}
                  whileHover="hover"
                  className="text-gray-300 font-medium text-sm tracking-wide uppercase"
                >
                  {item}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-white text-obsidian font-bold rounded-full hover:bg-gray-200 transition-colors"
              >
                Let's Talk
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-obsidian/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center"
          >
            <div className="flex flex-col gap-8 text-center">
              {['Home', 'Skills', 'Projects', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={toggleMenu}
                  whileHover={{ scale: 1.1, color: '#9333ea' }}
                  className="text-3xl text-white font-serif font-bold"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
