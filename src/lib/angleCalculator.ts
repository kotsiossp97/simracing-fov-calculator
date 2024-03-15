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
    const cosC =
      (Math.pow(centerWidth, 2) +
        Math.pow(leftWidth, 2) -
        Math.pow(ypotinousa, 2)) /
      (2 * centerWidth * leftWidth);

    const c = Math.acos(cosC);
    const arcConst = 180 / Math.PI;
    return (c * arcConst)
  },
};
