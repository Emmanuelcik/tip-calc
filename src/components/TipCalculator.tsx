import { Dispatch, SetStateAction } from "react";
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
  setTip: Dispatch<SetStateAction<number>>;
};
const TipCalculator = ({ setTip }: TipCalculatorProps) => {
  return (
    <div>
      <h3 className="font-black text-2xl">Tip: </h3>
      <form>
        {tipOptions.map((tip) => (
          <div key={tip.id} className="flex gap-2">
            <label htmlFor={tip.id}>{tip.label}</label>
            <input
              type="radio"
              id={tip.id}
              name="tip"
              value={tip.value}
              onChange={(e) => setTip(Number(e.target.value))}
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default TipCalculator;
