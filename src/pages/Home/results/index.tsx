import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { GAME_DATA } from "@/data/games";
import GameCard from "@/pages/Home/results/GameCard";
import React from "react";

const Results: React.FC = () => {
  return (
    <ScrollArea className="h-full">
      <div className="grid grid-cols-3 gap-10 mb-5">
        <GameCard
          game={{
            name: "Vertical FOV",
            image: "icon.png",
            calculation: "vfov",
            decimals: 0,
            min: 0,
            max: 99999,
          }}
        />
        <GameCard
          game={{
            name: "Horizontal FOV",
            image: "icon.png",
            calculation: "hfov",
            decimals: 0,
            min: 0,
            max: 99999,
          }}
        />
        <GameCard
          game={{
            name: "Triple Screen Angle",
            image: "tangle.png",
            calculation: "tangle",
            min: 10,
            max: 180,
            decimals: 2,
            factor: 1,
          }}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 h-0">
        {GAME_DATA.map((game, i) => (
          <GameCard key={i} game={game} />
        ))}
        <ScrollBar />
      </div>
    </ScrollArea>
  );
};

export default Results;
