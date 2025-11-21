import { motion, useMotionValue, useSpring, useTransform, useAnimation } from 'framer-motion';
import { ReactNode, useRef, MouseEvent, useState } from 'react';

interface GlassCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
  isSkill?: boolean;   // Flag to identify skill cards
  percent?: number;    // Skill proficiency %
}

const GlassCard = ({ icon, title, description, index, isSkill = false, percent = 0 }: GlassCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [20, -20]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), {
    stiffness: 300,
    damping: 30,
  });
  const translateZ = useSpring(useTransform(mouseX, [-0.5, 0.5], [-30, 30]), {
    stiffness: 200,
    damping: 25,
  });

  const progressControls = useAnimation();
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    if (window.matchMedia("(max-width: 768px)").matches) return; // Disable tilt on mobile

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
        whileHover={{ scale: 1.08, z: 80 }}
        style={{ translateZ, transformStyle: 'preserve-3d' }}
        transition={{ duration: 0.3 }}
        className="glass-strong rounded-2xl p-8 relative overflow-hidden group cursor-pointer"
        onHoverStart={() => {
          setHovered(true);
          if (isSkill) progressControls.start({ width: `${percent}%` });
        }}
        onHoverEnd={() => {
          setHovered(false);
          // Uncomment next line if you want the bar to reset after hover
          // if (isSkill) progressControls.start({ width: `0%` });
        }}
      >
        {/* Background glow */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.3), transparent)',
            filter: 'blur(40px)',
          }}
        />
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          animate={{
            background: [
              'linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))',
              'linear-gradient(90deg, rgba(236, 72, 153, 0.1), rgba(139, 92, 246, 0.1))',
              'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))',
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <div className="relative z-10" style={{ transform: 'translateZ(40px)' }}>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-5xl mb-6 text-purple-400 glow"
          >
            {icon}
          </motion.div>

          <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>

          {!isSkill && <p className="text-gray-300 leading-relaxed">{description}</p>}

          {/* Skill progress bar */}
          {isSkill && (
            <div className="mt-4 w-full">
              <div className="relative w-full h-4 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  animate={progressControls}
                  initial={{ width: 0 }}
                  className="absolute left-0 top-0 h-4 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 rounded-full"
                  transition={{ duration: 1.2, ease: 'easeInOut' }}
                />
              </div>
              {hovered && (
                <span className="text-sm text-gray-200 mt-1 block text-center">
                  {percent}%
                </span>
              )}
            </div>
          )}
        </div>

        <motion.div
          className="absolute inset-0 border-2 border-purple-500/0 group-hover:border-purple-500/50 rounded-2xl transition-all duration-500"
          style={{ pointerEvents: 'none' }}
        />
      </motion.div>
    </motion.div>
  );
};

export default GlassCard;
