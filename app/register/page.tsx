import React from "react";
import RegisterForm from "@/components/Register/RegisterForm";
import { VortexDemoSecond } from "@/components/ui/demovortex";
import {BackgroundBoxesDemo} from "@/components/ui/bgbox";

export default function Home() {
  return (
    <div className="min-h-screen grid grid-cols-2">
      {/* Left side */}
    <BackgroundBoxesDemo />

      {/* Right side */}
      <div className="flex items-center justify-center py-0 sm:p-20 bg-white">
        <RegisterForm />
      </div>
    </div>
  );
}
