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
                            <span className="text-white font-bold text-2xl">I'm Soulmad.</span> I am driven by a relentless pursuit of innovation and technical excellence.
                        </p>
                        <p>
                            While logic acts as the foundation of my work, curiosity is the catalyst. My most impactful projects stem from a desire to explore the "what if" and push the boundaries of conventional software engineering.
                        </p>
                        <p>
                            From building <span className="text-neon-blue font-medium">Moodify</span>, an ML-powered platform that intuitively understands user preferences, to developing a sophisticated <span className="text-neon-blue font-medium">Android Security App</span> that utilizes behavioral analysis for threat detection—my focus is on creating intelligent, resilient systems.
                        </p>
                        <p>
                            I engineer solutions not just to solve problems, but to define new possibilities. If you are looking for a partner to bring complex, forward-thinking concepts to life, I am ready to collaborate.
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
