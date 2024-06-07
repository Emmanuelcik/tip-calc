import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../utils";

type OrderTotalProps = {
  order: OrderItem[];
};

const OrderTotal = ({ order }: OrderTotalProps) => {
  const getSubtotal = useMemo(
    () =>
      order.reduce(
        (total, item) => (total = total + item.price * item.quantity),
        0
      ),
    [order]
  );
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Total and Tip: </h2>
        <p>
          Subtotal:{" "}
          <span className="font-bold">{formatCurrency(getSubtotal)}</span>
        </p>

        <p>
          Tip: <span className="font-bold">0$</span>
        </p>
        <p>
          Total: <span className="font-bold">0$</span>
        </p>
      </div>
      <button></button>
    </>
  );
};

export default OrderTotal;
