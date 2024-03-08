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

const ScreenRatio: React.FC = () => {
  const { inputs, setCalcState } = useFOVCalculator();

  const onRatioChange = (newRatio: string) => {
    setCalcState({
      type: EFOVCalcReducerActions.CHANGE_INPUT,
      payload: {
        screenRatio: newRatio,
      },
    });
  };

  return (
    <div>
      <Label>Screen Ratio</Label>
      <Select onValueChange={onRatioChange} value={inputs.screenRatio}>
        <SelectTrigger className="mt-2">
          <SelectValue placeholder="Select screen ratio" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="16:9">16:9</SelectItem>
          <SelectItem value="16:10">16:10</SelectItem>
          <SelectItem value="21:9">21:9</SelectItem>
          <SelectItem value="24:10">24:10</SelectItem>
          <SelectItem value="32:9">32:9</SelectItem>
          <SelectItem value="32:10">32:10</SelectItem>
          <SelectItem value="5:4">5:4</SelectItem>
          <SelectItem value="4:3">4:3</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ScreenRatio;
