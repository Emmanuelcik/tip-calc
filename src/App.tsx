import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

function App() {
  const { order, addItem, removeItem } = useOrder();
  return (
    <>
      <header className=" bg-teal-400 py-10">
        <h1 className="text-center text-4xl font-black">Tips Calculator</h1>
      </header>

      <main className="max-w-7xl mx-auto mt-20 grid md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          <OrderContents order={order} removeItem={removeItem} />
        </div>
      </main>
    </>
  );
}

export default App;
