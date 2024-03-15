import { IAngleCalcInputs, IAngleCalcResults } from "@/models/calculator";
import { EFOVCalcReducerActions } from "@/reducer/FOVCalculatorReducer";

export interface IAngleCalcAction {
  type: EFOVCalcReducerActions;
  payload: Partial<IAngleCalcInputs> | IAngleCalcResults;
}

export interface IAngleCalcState {
  inputs: IAngleCalcInputs;
  results?: IAngleCalcResults;
}
export const initialAngleState: IAngleCalcState = {
  inputs: {
    centerWidth: 75,
    leftWidth: 75,
    ypotinousa: 135,
  },
  results: undefined,
};

export const AngleCalcReducer = (
  state: IAngleCalcState,
  action: IAngleCalcAction
): IAngleCalcState => {
  switch (action.type) {
    case EFOVCalcReducerActions.CHANGE_INPUT:
      return {
        ...state,
        inputs: {
          ...state.inputs,
          ...action.payload,
        },
      };
    case EFOVCalcReducerActions.SET_RESULT:
      return {
        ...state,
        results: action.payload as IAngleCalcResults,
      };
  }
};
