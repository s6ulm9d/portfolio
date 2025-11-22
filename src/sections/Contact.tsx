import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen py-20 relative z-10 flex items-center justify-center">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 inline-block">
                        Get In Touch
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Got a crazy idea? I love those. Whether it's a moonshot project or just a simple question, I'm always open to discussing new opportunities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center space-y-8"
                    >
                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <a href="mailto:srybroiambusy@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-neon-purple transition-colors group">
                                    <div className="p-3 rounded-full bg-white/5 group-hover:bg-neon-purple/20 transition-colors">
                                        <Mail size={24} />
                                    </div>
                                    <span className="text-lg">srybroiambusy@gmail.com</span>
                                </a>
                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="p-3 rounded-full bg-white/5">
                                        <MapPin size={24} />
                                    </div>
                                    <span className="text-lg">Remote / Worldwide</span>
                                </div>
                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="p-3 rounded-full bg-white/5">
                                        <Phone size={24} />
                                    </div>
                                    <span className="text-lg">Available for calls</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <form className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl bg-black/20 border border-white/10 text-white focus:outline-none focus:border-neon-purple focus:ring-1 focus:ring-neon-purple transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-4 bg-gradient-to-r from-neon-purple to-neon-blue rounded-xl text-white font-bold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                            >
                                Send Message <Send size={20} />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
