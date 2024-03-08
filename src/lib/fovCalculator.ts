import { TGame } from "@/data/games";
import { ICalcInputs } from "@/models/calculator";

export const FOVCalculator = {
  calculate: (inputs: ICalcInputs) => {
    const { screenRatio, screens, curved } = inputs;
    const x = parseFloat(screenRatio.substring(0, screenRatio.indexOf(":")));
    const y = parseFloat(screenRatio.substring(screenRatio.indexOf(":") + 1));
    const screenDiagCm = inputs.screenSize * 2.54;
    const totalBezelsCm = (inputs.bezelThickness / 10) * 2;
    const aspectRatioToSize = Math.sqrt(
      Math.pow(screenDiagCm, 2) / (x * x + y * y)
    );
    const width = x * aspectRatioToSize + (screens > 1 ? totalBezelsCm : 0);

    const hAngle = curved
      ? FOVCalculator.calcCurvedAngle(
          width,
          inputs.curveRadius,
          inputs.distanceToScreen
        )
      : FOVCalculator.calcTriangularAngle(width, inputs.distanceToScreen);
    const vAngle = 2 * Math.atan2(Math.tan(hAngle / 2) * y, x);

    // const hFov = hAngle * screens * arcConst;
    // const vFov = vAngle * arcConst;
    return [hAngle, vAngle, x, y, width];
  },
  calcCurvedAngle: (
    baseInCm: number,
    radiusInMm: number,
    distanceToMonitorInCm: number
  ) => {
    const radiusInCm = radiusInMm / 10;
    const arcAngleAtRadius = baseInCm / radiusInCm;
    const b = radiusInCm * (1 - Math.cos(arcAngleAtRadius / 2));
    const c = Math.sqrt(2 * radiusInCm * b - b * b);
    return 2 * Math.atan2(c, distanceToMonitorInCm - b);
  },
  calcTriangularAngle: (baseInCm: number, distanceToMonitorInCm: number) => {
    return Math.atan2(baseInCm / 2, distanceToMonitorInCm) * 2;
  },
  calculateGame: (
    game: TGame,
    hAngle: number,
    vAngle: number,
    screens: number,
    width: number,
    x: number,
    y: number,
    distanceToMonitorInCm: number
  ) => {
    const { calculation, factor, min, max, decimals } = game;
    const arcConst = 180 / Math.PI;

    let value = 0;
    let unit;
    if (calculation == "hfov" || calculation == "hfov_base_step") {
      value = arcConst * (hAngle * screens);
      unit = "°";
    } else if (
      calculation == "vfov" ||
      calculation == "vfovx" ||
      calculation == "vfov_base_step"
    ) {
      value = arcConst * vAngle;
      unit = "°";
    } else if (calculation == "hfovrad") {
      value =
        arcConst *
        FOVCalculator.calcTriangularAngle(
          (((width / x) * y) / 3) * 4,
          distanceToMonitorInCm
        );
      unit = " rad";
    } else if (calculation == "tangle") {
      value = arcConst * hAngle;
      unit = "°";
    }

    value *= factor ?? 1;

    if (calculation == "vfovx") {
      if (game?.baseSingle)
        value /= screens == 1 ? game?.baseSingle : game?.baseTriple;
      unit = "x";
    }

    if (calculation == "hfov_base_step" || calculation == "vfov_base_step") {
      // ((target - base) / increemnt) * step
      value = Math.round((value - (game?.base ?? 0)) / (game?.increment ?? 1)) * (game?.step ?? 1);
      unit = "";
    }

    // Check min/max.
    value = min ? Math.max(value ?? 0, min) : value;
    value = max ? Math.min(value ?? 0, max) : value;

    // Final calculations.
    if (calculation.indexOf("hfovrad") != -1) {
      value *= Math.PI / 180;
    }

    return `${value?.toFixed(decimals)}${unit}`;
  },
};
