import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="min-h-screen py-20 relative z-10 flex items-center justify-center">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 inline-block">
                        The Story
                    </h2>

                    <div className="space-y-8 text-lg md:text-xl text-gray-400 leading-relaxed text-left">
                        <p>
                            <span className="text-white font-bold text-2xl">I'm Soulmad.</span> And I have a confession: <span className="text-neon-purple italic">I get a lot of crazy ideas.</span>
                        </p>
                        <p>
                            Some people code for logic; I code to feed my curiosity. My best work doesn't come from following a textbook—it comes from those random, "What if?" moments.
                        </p>
                        <p>
                            Like when I built <span className="text-neon-blue font-medium">Moodify</span>, an ML-powered platform that knows exactly what music fits your mood. Or my current obsession: an <span className="text-neon-blue font-medium">Android Security App</span> that learns your behavior patterns. If someone else tries to use your phone? It knows. And it alerts you instantly via WhatsApp and Email.
                        </p>
                        <p>
                            I build things because I want to push the boundaries of what's possible—and usually, because I want to solve a problem in my own life. If you have a crazy idea too, I'm probably the best person to help you build it.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="mt-16 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                    >
                        <p className="text-2xl font-serif italic text-white">
                            "The people who are crazy enough to think they can change the world, are the ones who do."
                        </p>
                        <p className="mt-4 text-gray-500 uppercase tracking-widest text-sm">
                            — Steve Jobs
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
