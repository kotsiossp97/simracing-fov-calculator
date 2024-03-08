import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useFOVCalculator } from "@/context/FOVCalculatorContext";
import { EFOVCalcReducerActions } from "@/reducer/FOVCalculatorReducer";
import { ChevronDown, ChevronUp } from "lucide-react";
import React from "react";

const CurvedRadius: React.FC = () => {
  const { inputs, setCalcState } = useFOVCalculator();

  const onSliderChange = (newValue: number[]) => {
    setCalcState({
      type: EFOVCalcReducerActions.CHANGE_INPUT,
      payload: {
        curveRadius: newValue[0],
      },
    });
  };

  const onButtonClick = (plus: number) => {
    if(inputs.curveRadius + plus < 50) return
    if(inputs.curveRadius + plus > 3000) return
    setCalcState({
      type: EFOVCalcReducerActions.CHANGE_INPUT,
      payload: {
        curveRadius: inputs.curveRadius + plus,
      },
    });
  };

  return (
    <div>
      <Label>Curved Screen Radius (in mm)</Label>
      <div className="flex items-center gap-3">
        <Slider
          value={[inputs.curveRadius]}
          className="flex-1"
          min={50}
          max={3000}
          step={50}
          onValueChange={onSliderChange}
        />
        <div className="flex items-center gap-2">
          <span className="flex-1 font-bold">{inputs.curveRadius}R</span>
          <div className="flex flex-col h-8 gap-1">
            <Button
              className="h-1/2"
              variant={"secondary"}
              size={"icon"}
              onClick={() => onButtonClick(50)}
            >
              <ChevronUp />
            </Button>
            <Button
              className="h-1/2"
              variant={"secondary"}
              size={"icon"}
              onClick={() => onButtonClick(-50)}
            >
              <ChevronDown />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurvedRadius;
