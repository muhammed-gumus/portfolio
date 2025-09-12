import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    // accept either an inline <svg> or a React SVG component
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn("grid grid-cols-1 md:grid-cols-2 gap-2 py-2", className)}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link ?? idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-black dark:bg-gray-50 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          <Card className="h-full w-full border-none p-6 overflow-hidden bg-whitedark:bg-slate-800 group-hover:border-slate-300 relative z-20">
            <div className="flex flex-col items-center text-center min-h-[120px] justify-center">
              {item.icon && (
                <div className="mb-4 w-8 h-8 flex items-center justify-center text-zinc-900 dark:text-zinc-100">
                  {item.icon}
                </div>
              )}

              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </div>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-6 overflow-hidden bg-white border border-gray-200 dark:bg-slate-800 dark:border-white/[0.06] group-hover:border-slate-300 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-zinc-900 dark:text-zinc-100 font-bold tracking-wide mt-0",
        className
      )}
    >
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-2 text-zinc-500 dark:text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
