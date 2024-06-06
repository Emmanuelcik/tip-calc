import type { MenuItem } from "../types";

type MenuItemProps = {
  item: MenuItem;
};
const MenuItem = ({ item }: MenuItemProps) => {
  return (
    <button className="border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-200">
      <p>{item.name}</p>
      <p className="font-black">{item.price}</p>
    </button>
  );
};

export default MenuItem;
