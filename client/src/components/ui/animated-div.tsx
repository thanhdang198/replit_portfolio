import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type AnimatedDivProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  once?: boolean;
};

export function AnimatedDiv({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.5,
  once = true,
}: AnimatedDivProps) {
  const getDirectionValues = () => {
    switch (direction) {
      case "up":
        return { initial: { y: 50 }, animate: { y: 0 } };
      case "down":
        return { initial: { y: -50 }, animate: { y: 0 } };
      case "left":
        return { initial: { x: 50 }, animate: { x: 0 } };
      case "right":
        return { initial: { x: -50 }, animate: { x: 0 } };
      default:
        return { initial: { y: 50 }, animate: { y: 0 } };
    }
  };

  const { initial, animate } = getDirectionValues();

  return (
    <motion.div
      initial={{ opacity: 0, ...initial }}
      whileInView={{ opacity: 1, ...animate }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      viewport={{ once }}
      className={cn("", className)}
    >
      {children}
    </motion.div>
  );
}
