import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useFOVCalculator } from "@/context/FOVCalculatorContext";
import { EFOVCalcReducerActions } from "@/reducer/FOVCalculatorReducer";
import React from "react";

const CurvedScreen: React.FC = () => {
  const { inputs, setCalcState } = useFOVCalculator();

  const onChange = (newVal: boolean) => {
    setCalcState({
      type: EFOVCalcReducerActions.CHANGE_INPUT,
      payload: {
        curved: newVal,
      },
    });
  };
  return (
    <div className="flex items-center justify-between">
      <Label>Curved Screens</Label>
      <Switch checked={inputs.curved} onCheckedChange={onChange} />
    </div>
  );
};

export default CurvedScreen;
