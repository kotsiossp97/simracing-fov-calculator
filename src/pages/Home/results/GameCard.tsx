import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useFOVCalculator } from "@/context/FOVCalculatorContext";
import { TGame } from "@/data/games";
import React, { CSSProperties } from "react";
import styles from "./GameCard.module.scss";
import { FOVCalculator } from "@/lib/fovCalculator";
import { getImgUrl } from "@/lib/utils";
interface IGameCardProps {
  game: TGame;
}

const GameCard: React.FC<IGameCardProps> = ({ game }) => {
  const { results, inputs } = useFOVCalculator();
  if (!results) return null;

  const result = FOVCalculator.calculateGame(
    game,
    results.hAngle,
    results.vAngle,
    inputs.screens,
    results.width,
    results.x,
    results.y,
    inputs.distanceToScreen
  );

  return (
    <div className="md:aspect-[1] aspect-[16/9]">
      <Card
        style={
          {
            "--bgImage": `url(${getImgUrl(game.image ?? "icon.png")})`,
          } as CSSProperties
        }
        className={styles.gameCard}
      >
        <CardHeader className="flex flex-col justify-between h-full p-3 m-0 space-y-0">
          <CardTitle className="text-[.7rem] md:text-sm lg:text-[1rem] font-bold leading-none">
            {game.name}
          </CardTitle>
          <CardDescription className="text-right text-foreground font-extrabold text-2xl">
            <span className="bg-accent/80 rounded-xl px-3">{result}</span>
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default GameCard;
