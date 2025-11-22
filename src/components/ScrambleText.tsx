import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrambleTextProps {
    text: string;
    className?: string;
    delay?: number;
}

const ScrambleText = ({ text, className = "", delay = 0 }: ScrambleTextProps) => {
    const [displayText, setDisplayText] = useState("");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+";

    useEffect(() => {
        if (!isInView) return;

        let timeoutId: NodeJS.Timeout;
        const startDelay = delay * 1000;

        timeoutId = setTimeout(() => {
            let iteration = 0;
            const intervalId = setInterval(() => {
                setDisplayText(
                    text
                        .split("")
                        .map((letter, index) => {
                            if (index < iteration) {
                                return text[index];
                            }
                            return chars[Math.floor(Math.random() * chars.length)];
                        })
                        .join("")
                );

                if (iteration >= text.length) {
                    clearInterval(intervalId);
                }

                iteration += 1 / 3; // Speed of decoding
            }, 30);

            return () => clearInterval(intervalId);
        }, startDelay);

        return () => clearTimeout(timeoutId);
    }, [isInView, text, delay]);

    return (
        <motion.span
            ref={ref}
            className={`${className} inline-block font-mono`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {displayText || text.split("").map(() => chars[Math.floor(Math.random() * chars.length)]).join("")}
        </motion.span>
    );
};

export default ScrambleText;
