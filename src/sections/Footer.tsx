import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-20 px-6 border-t-4 border-black bg-[#f4f4f0]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-10"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-black text-center">
            Let's Collaborate
          </h2>

          <div className="flex gap-8">
            {[
              { icon: <Github size={32} />, href: "https://github.com/s6ulm9d" },
              { icon: <Linkedin size={32} />, href: "https://www.linkedin.com/in/soul-mad/" },
              { icon: <Mail size={32} />, href: "mailto:srybroiambusy@gmail.com" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2, rotate: 5, backgroundColor: '#000', color: '#fff' }}
                whileTap={{ scale: 0.9 }}
                className="text-black border-2 border-black p-4 rounded-full hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
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
            <p className="text-[#1a1a1a] font-serif italic text-lg mb-2">
              "Crafted with passion and precision."
            </p>
            <p className="text-sm font-sans text-gray-600 uppercase tracking-widest">
              &copy; {currentYear} Soulmad. All Rights Reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
