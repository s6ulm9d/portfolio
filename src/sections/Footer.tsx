import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 px-6 border-t border-white/10 bg-obsidian relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-10"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Let's Collaborate
          </h2>

          <div className="flex gap-8">
            {[
              { icon: <Github size={24} />, href: "https://github.com/s6ulm9d" },
              { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/soul-mad/" },
              { icon: <Mail size={24} />, href: "mailto:srybroiambusy@gmail.com" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1, color: '#9333ea' }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white p-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mt-8"
          >
            <p className="text-gray-400 text-lg mb-2">
              Built with passion, precision, and a touch of madness.
            </p>
            <p className="text-sm text-gray-600 uppercase tracking-widest">
              &copy; {currentYear} Soulmad. All Rights Reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
