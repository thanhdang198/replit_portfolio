import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillTagProps {
  name: string;
  className?: string;
  delay?: number;
}

export function SkillTag({ name, className, delay = 0 }: SkillTagProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        delay,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      viewport={{ once: true }}
      className={cn(
        "px-3 py-1.5 rounded-md bg-primary/10 text-primary font-medium text-sm inline-block m-1",
        className
      )}
    >
      {name}
    </motion.div>
  );
}
