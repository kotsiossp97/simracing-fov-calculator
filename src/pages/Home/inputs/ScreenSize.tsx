import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useFOVCalculator } from "@/context/FOVCalculatorContext";
import { EFOVCalcReducerActions } from "@/reducer/FOVCalculatorReducer";
import { ChevronDown, ChevronUp } from "lucide-react";
import React from "react";

const ScreenSize: React.FC = () => {
  const { inputs, setCalcState } = useFOVCalculator();

  const onSliderChange = (newValue: number[]) => {
    setCalcState({
      type: EFOVCalcReducerActions.CHANGE_INPUT,
      payload: {
        screenSize: newValue[0],
      },
    });
  };

  const onButtonClick = (plus: number) => {
    if(inputs.screenSize + plus < 20) return
    if(inputs.screenSize + plus > 80) return
    setCalcState({
      type: EFOVCalcReducerActions.CHANGE_INPUT,
      payload: {
        screenSize: inputs.screenSize + plus,
      },
    });
  };

  return (
    <div>
      <Label>Screen Size (in inches)</Label>
      <div className="flex items-center gap-3">
        <Slider
          value={[inputs.screenSize]}
          className="flex-1"
          min={20}
          max={80}
          step={1}
          onValueChange={onSliderChange}
        />
        <div className="flex items-center gap-2">
          <span className="flex-1 font-bold">{inputs.screenSize}"</span>
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
};

export default ScreenSize;
