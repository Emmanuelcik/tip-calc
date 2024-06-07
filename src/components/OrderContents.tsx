import { MenuItem, OrderItem } from "../types";
import { formatCurrency } from "../utils";

type OrderContentsProps = {
  order: OrderItem[];
  removeItem: (item: MenuItem["id"]) => void;
};

const OrderContents = ({ order, removeItem }: OrderContentsProps) => {
  return (
    <div>
      <h2 className="font-black text-4xl"> Consumo</h2>
      <div className="space-y-4 mt-5">
        {order.length <= 0 ? (
          <p>Empty</p>
        ) : (
          order.map((item) => (
            <div
              className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
              key={item.id}
            >
              <div>
                <p className="text-lg">
                  {item.name} - {formatCurrency(item.price)}
                </p>
                <p className="font-black ">
                  Quantity: {item.quantity} -{" "}
                  {formatCurrency(item.price * item.quantity)}
                </p>
              </div>
              <button
                className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                onClick={() => removeItem(item.id)}
              >
                X
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default OrderContents;
