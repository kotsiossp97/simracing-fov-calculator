import { IAngleCalcInputs } from "@/models/calculator";

export const AngleCalculator = {
  calculate: (inputs: IAngleCalcInputs) => {
    const { leftWidth, centerWidth, ypotinousa } = inputs;
    /**
     * Law of cosines: cos(c) = (a^2 + b^2 - c^2) / 2ab
     * a: center
     * b: left,
     * c: ypoteinousa
     */
    const a = parseFloat(centerWidth)
    const b = parseFloat(leftWidth)
    const c = parseFloat(ypotinousa)
    
    const cosC =
      (Math.pow(a, 2) +
        Math.pow(b, 2) -
        Math.pow(c, 2)) /
      (2 * a * b);

    const angleRad = Math.acos(cosC);
    const arcConst = 180 / Math.PI;
    return (angleRad * arcConst)
  },
};
