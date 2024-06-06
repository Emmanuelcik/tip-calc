import { menuItems } from "./data/db";

function App() {
  console.log(menuItems);
  return (
    <>
      <header className=" bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Tips Calculator</h1>
      </header>

      <main className="max-w-7xl mx-auto mt-20">
        <h2>Menu</h2>
      </main>
    </>
  );
}

export default App;
