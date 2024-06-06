import React from "react";
import FovIcon from "@/assets/icon.svg?react";
import { Link } from "react-router-dom";
import NavMenu from "@/components/layout/NavMenu";

const TopBar: React.FC = () => {
  return (
    <div className="flex w-full bg-accent p-2 items-center">
      <div className="flex flex-1 items-center">
        <Link to={"/"}>
          <FovIcon className="w-14 h-14 mr-3 fill-foreground" />
        </Link>
        <h1 className="text-xl font-bold max-sm:text-base">
          Sim Racing FOV Calculator
        </h1>
      </div>

      <NavMenu />
    </div>
  );
};

export default TopBar;
