"use client";

import { useState } from "react";
import { Menu, Home, Settings, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <aside
      className={cn(
        "transition-all bg-white shadow-md border-r",
        open ? "w-64" : "w-16"
      )}
    >
      <div className="flex items-center justify-between p-4">
        <h2
          className={cn(
            "text-lg font-bold transition-opacity ",
            open ? "opacity-100" : "opacity-0 hidden"
          )}
        >
          Inventory System
        </h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setOpen(!open)}
          className="ml-auto"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      <nav className="mt-4 space-y-2">
        <SidebarItem icon={<Home />} label="Home" open={open} />
        <SidebarItem icon={<BarChart />} label="Analytics" open={open} />
        <SidebarItem icon={<Settings />} label="Settings" open={open} />
      </nav>
    </aside>
  );
}

function SidebarItem({
  icon,
  label,
  open,
}: {
  icon: React.ReactNode;
  label: string;
  open: boolean;
}) {
  return (
    <div className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
      <span className="mr-3">{icon}</span>
      {open && <span>{label}</span>}
    </div>
  );
}
