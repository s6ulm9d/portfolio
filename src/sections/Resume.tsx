import { motion } from 'framer-motion';

const Resume = () => {
    return (
        <section id="resume" className="min-h-screen py-20 relative z-10 flex flex-col items-center justify-center">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 inline-block"
                    >
                        Resume
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto mt-4"
                    >
                        A graphical representation of my professional journey.
                    </motion.p>
                </div>

                {/* Resume Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="relative group rounded-xl bg-white/5 border border-white/10 p-4 shadow-2xl backdrop-blur-sm overflow-hidden">
                        {/* PDF Viewer */}
                        <div className="w-full aspect-[1/1.4] bg-white/5 rounded-lg overflow-hidden border border-white/5 relative">
                            <iframe
                                src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
                                className="w-full h-full"
                                title="Resume"
                            />
                        </div>
                    </div>


                </motion.div>

            </div>
        </section>
    );
};

export default Resume;
