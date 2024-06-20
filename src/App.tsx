import { useReducer } from "react";
import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotal from "./components/OrderTotal";
import TipCalculator from "./components/TipCalculator";
import { menuItems } from "./data/db";
import { initialState, orderReducer } from "./reducers/OrderReducer";

function App() {
  const [state, dispatch] = useReducer(orderReducer, initialState);

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
              <MenuItem key={item.id} item={item} dispatch={dispatch} />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {state.order.length > 0 ? (
            <>
              <OrderContents order={state.order} dispatch={dispatch} />

              <TipCalculator dispatch={dispatch} tip={state?.tip} />
              <OrderTotal
                order={state.order}
                tip={state.tip}
                dispatch={dispatch}
              />
            </>
          ) : (
            <p className="text-center">Empty Order</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
