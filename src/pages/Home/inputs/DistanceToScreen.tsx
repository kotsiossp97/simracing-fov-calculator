import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useFOVCalculator } from "@/context/FOVCalculatorContext";
import { EFOVCalcReducerActions } from "@/reducer/FOVCalculatorReducer";
import { ChevronDown, ChevronUp } from "lucide-react";
import React from "react";

const DistanceToScreen:React.FC = () => {
  const { inputs, setCalcState } = useFOVCalculator();

  const onSliderChange = (newValue: number[]) => {
    setCalcState({
      type: EFOVCalcReducerActions.CHANGE_INPUT,
      payload: {
        distanceToScreen: newValue[0],
      },
    });
  };

  const onButtonClick = (plus: number) => {
    if(inputs.distanceToScreen + plus < 30) return
    if(inputs.distanceToScreen + plus > 200) return
    setCalcState({
      type: EFOVCalcReducerActions.CHANGE_INPUT,
      payload: {
        distanceToScreen: inputs.distanceToScreen + plus,
      },
    });
  };
  
  return (
    <div>
      <Label>Distance to screen (in cm)</Label>
      <div className="flex items-center gap-3">
        <Slider
          value={[inputs.distanceToScreen]}
          className="flex-1"
          min={30}
          max={200}
          step={1}
          onValueChange={onSliderChange}
        />
        <div className="flex items-center gap-2">
          <span className="flex-1 font-bold">{inputs.distanceToScreen} cm</span>
          <div className="flex flex-col h-8 gap-1">
            <Button
              className="h-1/2"
              variant={"secondary"}
              size={"icon"}
              onClick={() => onButtonClick(1)}
            >
              <ChevronUp />
            </Button>
            <Button
              className="h-1/2"
              variant={"secondary"}
              size={"icon"}
              onClick={() => onButtonClick(-1)}
            >
              <ChevronDown />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DistanceToScreen