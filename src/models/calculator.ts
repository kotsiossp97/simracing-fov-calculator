export interface ICalcInputs {
  screenRatio: string;
  screenSize: number;
  distanceToScreen: number;
  screens: number;
  curved: boolean;
  curveRadius: number;
  bezelThickness: number;
}

export interface ICalcResults {
  hAngle: number;
  vAngle: number;
  x: number;
  y: number;
  width: number;
}

export interface IAngleCalcInputs {
  centerWidth: number;
  leftWidth: number;
  ypotinousa: number;
}

export interface IAngleCalcResults {
  angle: number;
}