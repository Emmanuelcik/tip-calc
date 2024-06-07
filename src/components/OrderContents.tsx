import { OrderItem } from "../types";

type OrderContentsProps = {
  order: OrderItem[];
};

const OrderContents = ({ order }: OrderContentsProps) => {
  return (
    <div>
      <h2 className="font-black text-4xl"> Consumo</h2>
      <div className="space-y-4 mt-5">
        {order.length <= 0 ? (
          <p>Empty</p>
        ) : (
          order.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default OrderContents;
