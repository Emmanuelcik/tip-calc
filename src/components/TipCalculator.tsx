import { Dispatch } from "react";
import { OrderActions } from "../reducers/OrderReducer";
const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

type TipCalculatorProps = {
  dispatch: Dispatch<OrderActions>;
  tip: number;
};
const TipCalculator = ({ dispatch, tip }: TipCalculatorProps) => {
  return (
    <div>
      <h3 className="font-black text-2xl">Tip: </h3>
      <form>
        {tipOptions.map((tipOption) => (
          <div key={tipOption.id} className="flex gap-2">
            <label htmlFor={tipOption.id}>{tipOption.label}</label>
            <input
              type="radio"
              id={tipOption.id}
              name="tip"
              value={tipOption.value}
              onChange={(e) =>
                dispatch({
                  type: "add-tip",
                  payload: { ammount: Number(e.target.value) },
                })
              }
              checked={tipOption.value === tip}
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default TipCalculator;
