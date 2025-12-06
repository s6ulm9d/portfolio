
import { motion } from 'framer-motion';
import { useRef } from 'react';
import GlassCard from '../components/GlassCard';
import { Award, ExternalLink, Download } from 'lucide-react';

const certifications = [
    {
        icon: Award,
        title: 'Certification 1',
        description: 'Completed a structured training program focused on enhancing JavaScript applications with TypeScript’s static typing, interfaces, and scalable code patterns.',
        link: '/certifications/cert1.pdf',
        image: '/certifications/cert1.png',
        action: 'download'
    },
    {
        icon: Award,
        title: 'Certification 2',
        description: 'Acquired hands-on proficiency in building component-driven, high-performance React applications aligned with modern front-end engineering standards.',
        link: '/certifications/cert2.pdf',
        image: '/certifications/cert2.png',
        action: 'download'
    },
    {
        icon: Award,
        title: 'Certification 3',
        description: 'Gained foundational-to-intermediate expertise in core JavaScript concepts, problem-solving techniques, and implementation of dynamic, browser-based logic.',
        link: '/certifications/cert3.pdf',
        image: '/certifications/cert3.png',
        action: 'download'
    },
];

const Certifications = () => {
    const containerRef = useRef(null);

    return (
        <section id="certifications" className="min-h-screen py-20 relative z-10" ref={containerRef}>
            <div className="container mx-auto px-6">

                {/* Sticky Header with Parallax Text */}
                <div className="sticky top-24 z-20 mb-16 text-center mix-blend-difference">
                    <motion.h2
                        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 inline-block"
                    >
                        Certifications
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto mt-4"
                    >
                        Professional validations and achievements.
                    </motion.p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            <GlassCard
                                icon={<cert.icon size={40} />}
                                title={cert.title}
                                description={
                                    <div className="flex flex-col h-full">
                                        <div className="mb-4 rounded-lg overflow-hidden border border-white/10">
                                            {/* Image Placeholder */}
                                            <img
                                                src={cert.image}
                                                alt={cert.title}
                                                className="w-full h-40 object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                                                onError={(e) => {
                                                    e.currentTarget.src = "https://via.placeholder.com/300x200?text=Certificate+Preview"; // Fallback
                                                }}
                                            />
                                        </div>
                                        <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                                            {cert.description}
                                        </p>

                                        <div className="flex gap-4 mt-auto pt-4 border-t border-white/10">
                                            <a
                                                href={cert.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                download={cert.action === 'download' ? true : undefined}
                                                className={`flex items-center gap-2 text-sm font-medium ${cert.link === '#' ? 'cursor-not-allowed opacity-50' : 'hover:text-white cursor-pointer'
                                                    } text-gray-400 transition-colors`}
                                                onClick={(e) => {
                                                    if (cert.link === '#') e.preventDefault();
                                                }}
                                            >
                                                {cert.action === 'download' ? <Download size={18} /> : <ExternalLink size={18} />}
                                                {cert.action === 'download' ? 'Download Credential' : 'Verify Credential'}
                                            </a>
                                        </div>
                                    </div>
                                }
                                index={index}
                                className=""
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
