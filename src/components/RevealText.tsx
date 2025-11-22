import { motion } from 'framer-motion';

interface RevealTextProps {
    text: string;
    className?: string;
    delay?: number;
}

const RevealText = ({ text, className = "", delay = 0 }: RevealTextProps) => {
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: delay },
        },
    };

    const child = {
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            } as any,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            } as any,
        },
    };

    return (
        <motion.div
            className={`flex flex-wrap overflow-hidden ${className}`}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {words.map((word, index) => (
                <motion.span variants={child} key={index} className="mr-[0.25em]">
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default RevealText;
