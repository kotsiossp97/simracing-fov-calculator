import { ICalcInputs, ICalcResults } from "@/models/calculator";

export enum EFOVCalcReducerActions {
  CHANGE_INPUT = "CHANGE_INPUT",
  SET_RESULT = "SET_RESULT",
}

export interface IFOVCalcAction {
  type: EFOVCalcReducerActions;
  payload: Partial<ICalcInputs> | ICalcResults
}

export interface IFOVCalcState {
  inputs: ICalcInputs;
  results?: ICalcResults;
}

export const initialState: IFOVCalcState = {
  inputs: {
    screenRatio: "16:9",
    screenSize: 27,
    distanceToScreen: 50,
    screens: 1,
    curved: false,
    curveRadius: 1000,
    bezelThickness: 0,
  },
  results: undefined,
};

export const FOVCalcReducer = (
  state: IFOVCalcState,
  action: IFOVCalcAction
): IFOVCalcState => {
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
        results: action.payload as ICalcResults,
      };
  }
};
