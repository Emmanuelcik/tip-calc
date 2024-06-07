import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../utils";

type OrderTotalProps = {
  order: OrderItem[];
  tip: number;
};

const OrderTotal = ({ order, tip }: OrderTotalProps) => {
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
      <button></button>
    </>
  );
};

export default OrderTotal;
