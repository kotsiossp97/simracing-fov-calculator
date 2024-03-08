import ThemeToggle from "@/components/feedback/ThemeToggle";
import React from "react";
import FovIcon from "@/assets/icon.svg?react";

const TopBar: React.FC = () => {
  return (
    <div className="flex w-full bg-accent p-2 items-center">
      <div className="flex flex-1 items-center">
        <FovIcon className="w-14 h-14 mr-3 fill-foreground" />
        <h1 className="text-xl font-bold">Sim Racing FOV Calculator</h1>
      </div>

      <div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default TopBar;
