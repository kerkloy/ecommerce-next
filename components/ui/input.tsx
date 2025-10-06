"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, ...props }, ref) => {
    const radius = 100; // hover radius
    const [visible, setVisible] = React.useState(false);
    const [focused, setFocused] = React.useState(false);

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    return (
      <motion.div
        style={{
          background: useMotionTemplate`
            radial-gradient(
              ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
              #3b82f6,
              transparent 80%
            )
          `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="group/input relative rounded-lg p-[2px] transition duration-300"
      >
        {/* Floating label */}
        <label
          className={cn(
            "absolute left-3 top-1/2 -translate-y-1/2 text-sm text-neutral-400 pointer-events-none transition-all duration-200",
            (focused || props.value) &&
              "top-[-1] text-xs text-blue-500 dark:text-blue-700 bg-gray-100 rounded-full px-1"
          )}
        >
          {label}
        </label>

        <input
          type={type}
          className={cn(
            `shadow-input flex h-12 w-full rounded-md border-none bg-gray-50 px-3 pt-4 pb-1 text-sm text-black transition duration-400 
            group-hover/input:shadow-none 
            placeholder-transparent
            focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none 
            disabled:cursor-not-allowed disabled:opacity-50 
            dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600`,
            className
          )}
          ref={ref}
          onFocus={() => setFocused(true)}
          onBlur={(e) => setFocused(Boolean(e.target.value))}
          {...props}
        />
      </motion.div>
    );
  }
);

Input.displayName = "Input";

export { Input };
