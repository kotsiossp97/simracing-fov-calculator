import React from "react";
import ThemeToggle from "@/components/feedback/ThemeToggle";
import { Github, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/data/navLinks";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavMenu: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      <div className="flex items-center gap-3 max-sm:hidden">
        {NAV_LINKS.map((link, i) => (
          <Link to={link.pathname} key={i}>
            <Button
              variant={"link"}
              className={cn(
                link.pathname === location.pathname &&
                  "bg-slate-600/50 underline"
              )}
            >
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

      <div className="sm:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button
              variant={"secondary"}
              className="hover:bg-primary-foreground"
            >
              <Menu size={"1.3rem"} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {NAV_LINKS.map((link, i) => (
              <DropdownMenuItem key={i}>
                <Link to={link.pathname}>
                  <Button
                    variant={"link"}
                    className={cn(
                      link.pathname === location.pathname &&
                        "bg-slate-600/50 underline"
                    )}
                  >
                    {link.label}
                  </Button>
                </Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <div className="p-2 flex items-center justify-evenly">
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
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default NavMenu;
