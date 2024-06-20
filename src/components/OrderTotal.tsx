import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../utils";
import { OrderActions } from "../reducers/OrderReducer";

type OrderTotalProps = {
  order: OrderItem[];
  tip: number;
  dispatch: React.Dispatch<OrderActions>;
};

const OrderTotal = ({ order, tip, dispatch }: OrderTotalProps) => {
  const getSubtotal = useMemo(
    () =>
      order.reduce(
        (total, item) => (total = total + item.price * item.quantity),
        0
      ),
    [order]
  );

  const tipAmmount = useMemo(() => getSubtotal * tip, [tip, order]);

  const total = useMemo(() => tipAmmount + getSubtotal, [order, tip]);
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Total and Tip: </h2>
        <p>
          Subtotal:{" "}
          <span className="font-bold">{formatCurrency(getSubtotal)}</span>
        </p>

        <p>
          Tip: <span className="font-bold">{formatCurrency(tipAmmount)}</span>
        </p>
        <p>
          Total: <span className="font-bold">{formatCurrency(total)}</span>
        </p>
      </div>
      <button
        className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10 "
        disabled={total === 0}
        onClick={() => dispatch({ type: "place-order" })}
      >
        Save Order
      </button>
    </>
  );
};

export default OrderTotal;
