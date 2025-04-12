import { cn } from "@/lib/utils";
import { AnimatedDiv } from "./animated-div";

interface TimelineItemProps {
  date: string;
  title: string;
  subtitle?: string;
  description?: string;
  icon?: React.ReactNode;
  isLast?: boolean;
  children?: React.ReactNode;
}

export function TimelineItem({
  date,
  title,
  subtitle,
  description,
  icon,
  isLast = false,
  children,
}: TimelineItemProps) {
  return (
    <AnimatedDiv delay={0.1} className="flex gap-4 relative">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 flex items-center justify-center rounded-full border bg-background z-10">
          {icon || (
            <div className="w-3 h-3 bg-primary rounded-full"></div>
          )}
        </div>
        {!isLast && <div className="w-0.5 bg-border grow mt-2"></div>}
      </div>
      <div className={cn("pb-8", isLast && "pb-0")}>
        <div className="text-sm text-muted-foreground mb-1">{date}</div>
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        {subtitle && <div className="text-primary font-medium mb-2">{subtitle}</div>}
        {description && <p className="text-muted-foreground mb-2 whitespace-pre-line">{description}</p>}
        {children}
      </div>
    </AnimatedDiv>
  );
}

interface TimelineProps {
  children: React.ReactNode;
  className?: string;
}

export function Timeline({ children, className }: TimelineProps) {
  return (
    <div className={cn("pt-4 pl-2", className)}>
      {children}
    </div>
  );
}
