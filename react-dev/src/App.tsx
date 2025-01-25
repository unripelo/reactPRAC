import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center align-middle">
        <div className="flex bg-red-800 items-center justify-center font-bold text-2xl h-2/3 aspect-square rounded-3xl flex-col p-10 space-y-10">
          <div className="bg-white flex size-full items-center justify-center p-4 rounded-lg">
            <div
              className="
              bg-red-800
              flex
              size-full
              items-center
              justify-center text-white"
            >
              Drawer 1
            </div>
          </div>
          <div className="bg-white flex size-full items-center justify-center p-4 space-x-5 rounded-lg">
            <div
              className="bg-red-800 text-white size-full items-center
              justify-center flex flex-1 hover:flex-[2]"
            >
              Drawer 2
            </div>
            <div
              className="bg-red-800 text-white size-full items-center
              justify-center flex flex-1 hover:flex-[2] "
            >
              Drawer 3
            </div>
          </div>
          <div className="bg-white flex size-full items-center justify-center p-4 space-x-4 rounded-lg">
            <div
              className="bg-red-800 text-white size-full items-center
              justify-center flex flex-1 hover:flex-[2]"
            >
              Drawer 4
            </div>
            <div
              className="bg-red-800 text-white size-full items-center
              justify-center flex flex-1 hover:flex-[2]"
            >
              Drawer 5
            </div>
            <div
              className="bg-red-800 text-white size-full items-center
              justify-center flex flex-1 hover:flex-[2]"
            >
              Drawer 6
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
