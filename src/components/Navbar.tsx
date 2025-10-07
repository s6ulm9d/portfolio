import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-gradient"
          >
            Soulmad
          </motion.div>

          <div className="flex gap-8">
            {['Home', 'Skills', 'Projects', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                whileHover={{ scale: 1.1, color: '#a78bfa' }}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;