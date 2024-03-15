import React, { CSSProperties } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import styles from "@/scss/main.module.scss";
import { getImgUrl } from "@/lib/utils";

interface IResultsCardProps {
  result: number;
}
const ResultsCard: React.FC<IResultsCardProps> = ({ result }) => {
  return (
    <Card className={styles.pageCard}>
      <CardHeader>
        <CardTitle>Results</CardTitle>
        <CardDescription>
          See the angle that your current screen layout has.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="md:aspect-[1] aspect-[16/9]">
          <Card
            style={
              {
                "--bgImage": `url(${getImgUrl("tangle.png")})`,
              } as CSSProperties
            }
            className={styles.resultCard}
          >
            <CardHeader className="flex flex-col justify-between h-full p-3 ">
              <CardTitle className="text-xl font-bold drop-shadow-md leading-none">
                Triple Screen Angle
              </CardTitle>
              <CardDescription className="text-right text-foreground font-extrabold text-2xl">
                <span className="bg-accent/80 rounded-xl px-3">
                  {(180 - result).toFixed(2)}°{" / "}
                  {result.toFixed(2)}°
                </span>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultsCard;
