"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-full relative w-[calc(100%-[-1]rem)] mx-full overflow-hidden bg-slate-800 flex flex-col items-center justify-center ">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-6xl text-xl text-white relative z-20 " )}>
        Task Management System
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Streamline your workflow and boost productivity with our intuitive task
        management system.
      </p>
    </div>
  );
}
