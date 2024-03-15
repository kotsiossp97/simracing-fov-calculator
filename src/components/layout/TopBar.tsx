import ThemeToggle from "@/components/feedback/ThemeToggle";
import React from "react";
import FovIcon from "@/assets/icon.svg?react";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS } from "@/data/navLinks";
import { cn } from "@/lib/utils";

const TopBar: React.FC = () => {
  const location = useLocation()

  return (
    <div className="flex w-full bg-accent p-2 items-center">
      <div className="flex flex-1 items-center">
        <FovIcon className="w-14 h-14 mr-3 fill-foreground" />
        <h1 className="text-xl font-bold">Sim Racing FOV Calculator</h1>
      </div>

      <div className="flex items-center gap-3">
        {NAV_LINKS.map((link, i) => (
          <Link to={link.pathname} key={i}>
            <Button variant={'link'} className={cn(link.pathname === location.pathname && "bg-slate-600/50 underline")}>
            {link.label}
            </Button>
          </Link>
        ))}
        <Button variant={"outline"} size={"icon"} asChild>
          <a
            href="https://github.com/kotsiossp97/simracing-fov-calculator/"
            target="_blank"
          >
            <Github size={"1.3rem"} />
          </a>
        </Button>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default TopBar;
