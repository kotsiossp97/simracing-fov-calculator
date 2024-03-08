import { cn } from "@/lib/utils";
import React from "react";
import SingleIcon from "@/assets/single.svg?react";
import TriplesIcon from "@/assets/triples_icon.svg?react";

interface IScreenTypeIconProps {
  screenType: "single" | "triple";
  className?: string;
}

const ScreenTypeIcon: React.FC<IScreenTypeIconProps> = (props) => {
  const { screenType, className } = props;
  return (
    <div className={cn("h-8 w-8", className)}>
      {screenType === "single" ? (
        <SingleIcon className="h-full w-full fill-foreground" />
      ) : (
        <TriplesIcon className="h-full w-full fill-foreground" />
      )}
    </div>
  );
};

export default ScreenTypeIcon;
