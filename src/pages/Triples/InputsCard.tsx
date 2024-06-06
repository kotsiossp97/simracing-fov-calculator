import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import styles from "@/scss/main.module.scss";
import { Input } from "@/components/ui/input";
import {
  IAngleCalcAction,
  IAngleCalcState,
} from "@/reducer/TriplesCalcReducer";
import { EFOVCalcReducerActions } from "@/reducer/FOVCalculatorReducer";

interface IInputsCardProps {
  state: IAngleCalcState;
  dispatcher: React.Dispatch<IAngleCalcAction>;
}

const InputsCard: React.FC<IInputsCardProps> = (props) => {
  const {
    state: { inputs },
    dispatcher,
  } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const id = e.target.id;
    // if (!value) return;

    dispatcher({
      type: EFOVCalcReducerActions.CHANGE_INPUT,
      payload: {
        [id]: value,
      },
    });
  };
  return (
    <Card className={styles.pageCard}>
      <CardHeader>
        <CardTitle>Inputs</CardTitle>
        <CardDescription>Enter your inputs</CardDescription>
      </CardHeader>
      <CardContent className="ml-[10%] max-sm:ml-[35%]">
        <div className={styles.triplesInputs}>
          <div className={styles.leftMonitor}>
            <div className={styles.monInput}>
              <Input
                id="leftWidth"
                value={inputs.leftWidth}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.centerMonitor}>
            <div className={styles.monInput}>
              <Input
                id="centerWidth"
                value={inputs.centerWidth}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.ypotinousa}>
            <div className={styles.monInput}>
              <Input
                id="ypotinousa"
                value={inputs.ypotinousa}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InputsCard;
