import { FOVCalculator } from "@/lib/fovCalculator";
import { ICalcInputs, ICalcResults } from "@/models/calculator";
import {
  EFOVCalcReducerActions,
  IFOVCalcAction,
} from "@/reducer/FOVCalculatorReducer";
import { createContext, useContext, useEffect } from "react";

interface ICalculatorContextProps {
  inputs: ICalcInputs;
  results?: ICalcResults;
  setCalcState: React.Dispatch<IFOVCalcAction>;
}

export const FOVCalculatorContext = createContext(
  {} as ICalculatorContextProps
);

interface ICalculatorContextProviderProps extends ICalculatorContextProps {
  children: React.ReactNode;
}

export const FOVCalculatorContextProvider: React.FC<
  ICalculatorContextProviderProps
> = (props) => {
  const { children, inputs, results, setCalcState } = props;

  useEffect(() => {
    const [hAngle, vAngle, x, y, width] = FOVCalculator.calculate(inputs);
    setCalcState({
      type: EFOVCalcReducerActions.SET_RESULT,
      payload: { hAngle, vAngle, x, y, width },
    });
  }, [inputs, setCalcState]);

  return (
    <FOVCalculatorContext.Provider value={{ inputs, results, setCalcState }}>
      {children}
    </FOVCalculatorContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFOVCalculator = () => {
  const context = useContext(FOVCalculatorContext);

  if (context === undefined)
    throw new Error(
      "useFOVCalculator must be used within a FOVCalculatorContextProvider"
    );

  return context;
};
