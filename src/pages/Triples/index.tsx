import React, { useEffect, useReducer } from "react";
import styles from "@/scss/main.module.scss";
import InputsCard from "@/pages/Triples/InputsCard";
import ResultsCard from "@/pages/Triples/ResultsCard";
import {
  AngleCalcReducer,
  initialAngleState,
} from "@/reducer/TriplesCalcReducer";
import { AngleCalculator } from "@/lib/angleCalculator";
import { EFOVCalcReducerActions } from "@/reducer/FOVCalculatorReducer";

const TriplesPage: React.FC = () => {
  const [angleCalcState, dispatchAngleCalc] = useReducer(
    AngleCalcReducer,
    initialAngleState
  );

  useEffect(() => {
    const angle = AngleCalculator.calculate(angleCalcState.inputs);
    dispatchAngleCalc({
      type: EFOVCalcReducerActions.SET_RESULT,
      payload: { angle },
    });
  }, [angleCalcState.inputs, dispatchAngleCalc]);

  return (
    <div className={styles.triplesPage}>
      <h2 className={styles.pageTitle}>Triple Screen Angle Calculator</h2>

      <div className={styles.pageMain}>
        <InputsCard state={angleCalcState} dispatcher={dispatchAngleCalc} />
        <ResultsCard result={angleCalcState.results?.angle ?? 0} />
      </div>
    </div>
  );
};

export default TriplesPage;
