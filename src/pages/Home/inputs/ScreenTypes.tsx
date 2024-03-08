import ScreenTypeIcon from "@/components/feedback/ScreenTypeIcon";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFOVCalculator } from "@/context/FOVCalculatorContext";
import { EFOVCalcReducerActions } from "@/reducer/FOVCalculatorReducer";
import React from "react";

const ScreenTypes: React.FC = () => {
  const { inputs, setCalcState } = useFOVCalculator();

  const onChange = (screens: string) => {
    setCalcState({
      type: EFOVCalcReducerActions.CHANGE_INPUT,
      payload: {
        screens: parseInt(screens),
      },
    });
  };

  return (
    <div>
      <Label>Screen Type</Label>
      <Select value={inputs.screens.toString()} onValueChange={onChange}>
        <SelectTrigger className="mt-2">
          <SelectValue placeholder="Select screen type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">
            <div className="flex gap-3 items-center">
              <ScreenTypeIcon screenType="single" />
              Single Screen
            </div>
          </SelectItem>
          <SelectItem value="3">
            <div className="flex gap-3 items-center">
              <ScreenTypeIcon screenType="triple" />
              Triple Screens
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ScreenTypes;
