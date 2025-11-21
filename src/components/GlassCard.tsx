import { motion, useMotionValue, useSpring, useTransform, useAnimation } from 'framer-motion';
import { ReactNode, useRef, MouseEvent, useState } from 'react';

interface GlassCardProps {
  icon?: ReactNode;
  title: string;
  description: ReactNode;
  index: number;
  isSkill?: boolean;
  percent?: number;
}

const GlassCard = ({ icon, title, description, index, isSkill = false, percent = 0 }: GlassCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { // Reduced tilt for paper feel
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 300,
    damping: 30,
  });

  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseXRelative = (e.clientX - centerX) / (rect.width / 2);
    const mouseYRelative = (e.clientY - centerY) / (rect.height / 2);

    mouseX.set(mouseXRelative);
    mouseY.set(mouseYRelative);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        ease: [0.22, 1, 0.36, 1]
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      className="relative"
    >
      <motion.div
        whileHover={{ scale: 1.02 }} // Subtle scale
        style={{ transformStyle: 'preserve-3d' }}
        transition={{ duration: 0.3 }}
        className="glass-strong rounded-none p-8 relative overflow-hidden group cursor-pointer bg-white border-2 border-black"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        {/* No more background glows. Just clean paper. */}

        <div className="relative z-10" style={{ transform: 'translateZ(20px)' }}>
          {icon && (
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-5xl mb-6 text-black"
            >
              {icon}
            </motion.div>
          )}

          <h3 className="text-3xl font-bold text-black mb-4 font-serif border-b-2 border-black pb-2 inline-block">
            {title}
          </h3>

          {!isSkill && <div className="text-[#333] leading-relaxed font-serif">{description}</div>}

          {/* Skill progress bar - Paper Style */}
          {isSkill && (
            <div className="mt-4 w-full">
              <div className="relative w-full h-4 border-2 border-black rounded-none overflow-hidden bg-white">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${percent}%` }}
                  viewport={{ once: true }}
                  className="absolute left-0 top-0 h-full bg-black" // Solid black bar
                  transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
                />
              </div>
              {hovered && (
                <span className="text-sm text-black mt-1 block text-center font-bold font-mono">
                  {percent}%
                </span>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GlassCard;
