import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useFOVCalculator } from "@/context/FOVCalculatorContext";
import { EFOVCalcReducerActions } from "@/reducer/FOVCalculatorReducer";
import { ChevronDown, ChevronUp } from "lucide-react";
import React from "react";

const BezelThickness: React.FC = () => {
  const { inputs, setCalcState } = useFOVCalculator();

  const onSliderChange = (newValue: number[]) => {
    setCalcState({
      type: EFOVCalcReducerActions.CHANGE_INPUT,
      payload: {
        bezelThickness: newValue[0],
      },
    });
  };

  const onButtonClick = (plus: number) => {
    if(inputs.bezelThickness + plus < 0) return
    if(inputs.bezelThickness + plus > 100) return
    setCalcState({
      type: EFOVCalcReducerActions.CHANGE_INPUT,
      payload: {
        bezelThickness: inputs.bezelThickness + plus,
      },
    });
  };

  return (
    <div>
      <Label>Bezel Thickness (in mm)</Label>
      <div className="flex items-center gap-3">
        <Slider
          value={[inputs.bezelThickness]}
          className="flex-1"
          min={0}
          max={100}
          step={1}
          onValueChange={onSliderChange}
        />
        <div className="flex items-center gap-2">
          <span className="flex-1 font-bold">{inputs.bezelThickness} mm</span>
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

export default BezelThickness;
