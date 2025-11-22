import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

interface GlassCardProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  index: number;
  isSkill?: boolean;
  className?: string;
}

const GlassCard = ({ icon, title, description, index, isSkill = false, className = "" }: GlassCardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative max-w-md rounded-xl bg-white/5 border border-white/10 px-8 py-10 shadow-2xl overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(147, 51, 234, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* Shimmer Effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent z-10 pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col">
        <div className="mb-6 inline-block rounded-lg bg-white/5 p-3 text-neon-purple w-fit group-hover:text-white group-hover:bg-neon-purple transition-colors duration-300">
          {icon}
        </div>
        <h3 className="mb-4 text-2xl font-bold text-white group-hover:text-neon-blue transition-colors duration-300">
          {title}
        </h3>
        <div className={`text-gray-400 leading-relaxed ${isSkill ? 'text-sm font-mono' : 'text-base'}`}>
          {description}
        </div>
      </div>
    </div>
  );
};

export default GlassCard;
