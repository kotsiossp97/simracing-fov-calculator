import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FOVCalculatorContextProvider } from "@/context/FOVCalculatorContext";
import BezelThickness from "@/pages/Home/inputs/BezelThickness";
import CurvedRadius from "@/pages/Home/inputs/CurvedRadius";
import CurvedScreen from "@/pages/Home/inputs/CurvedScreen";
import DistanceToScreen from "@/pages/Home/inputs/DistanceToScreen";
import ScreenRatio from "@/pages/Home/inputs/ScreenRatio";
import ScreenSize from "@/pages/Home/inputs/ScreenSize";
import ScreenTypes from "@/pages/Home/inputs/ScreenTypes";
import Results from "@/pages/Home/results";
import { FOVCalcReducer, initialState } from "@/reducer/FOVCalculatorReducer";
import React, { useReducer } from "react";

const HomePage: React.FC = () => {
  const [calculatorState, dispatchCalculator] = useReducer(
    FOVCalcReducer,
    initialState
  );

  return (
    <FOVCalculatorContextProvider
      inputs={calculatorState.inputs}
      results={calculatorState.results}
      setCalcState={dispatchCalculator}
    >
      <div className="flex-1 flex gap-5 flex-wrap px-20 p-5">
        <Card className="flex-1 basis-96">
          <CardHeader>
            <CardTitle>Inputs</CardTitle>
            <CardDescription>Enter your inputs</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <ScreenRatio />
            <ScreenSize />
            <DistanceToScreen />
            <ScreenTypes />
            {calculatorState.inputs.screens > 1 && <BezelThickness />}
            <CurvedScreen />
            {calculatorState.inputs.curved === true && <CurvedRadius />}
          </CardContent>
        </Card>

        <Card className="flex flex-col flex-1 basis-96">
          <CardHeader>
            <CardTitle>Results</CardTitle>
            <CardDescription>
              See the correct FOV for your game🚀
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <Results />
          </CardContent>
        </Card>
      </div>
    </FOVCalculatorContextProvider>
  );
};

export default HomePage;
