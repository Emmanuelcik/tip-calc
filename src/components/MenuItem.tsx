import { OrderActions } from "../reducers/OrderReducer";
import type { MenuItem } from "../types";
import { formatCurrency } from "../utils";

type MenuItemProps = {
  item: MenuItem;
  dispatch: React.Dispatch<OrderActions>;
};
const MenuItem = ({ item, dispatch }: MenuItemProps) => {
  return (
    <button
      className="border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200"
      onClick={() => dispatch({ type: "add-item", payload: { item } })}
    >
      <p>{item.name}</p>
      <p className="font-black">{formatCurrency(item.price)}</p>
    </button>
  );
};

export default MenuItem;
