import "./App.css";

function App() {
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center align-middle">
        <div className="flex bg-red-800 items-center w-full justify-center font-bold text-2xl h-full md:h-2/3 md:max-w-screen-md  md:aspect-square rounded-3xl flex-col p-10 space-y-10">
          <div className="bg-white flex size-full items-center justify-center p-4 rounded-lg">
            <div
              className="
              bg-red-800
              flex
              size-full
              items-center
              justify-center text-white"
            >
              Ada Lovelace
            </div>
          </div>
          <div className="bg-white flex size-full flex-col md:flex-row items-center justify-center p-4 space-y-2 md:space-y-0 md:space-x-5 rounded-lg">
            <div
              className="bg-red-800 text-white size-full items-center
              justify-center flex flex-1 hover:flex-[2] transition-flex duration-300 ease-in-out"
            >
              Alan Turing
            </div>
            <div
              className="bg-red-800 text-white size-full items-center
              justify-center flex flex-1 hover:flex-[2] transition-flex duration-300 ease-in-out "
            >
              Guido Van Rossum
            </div>
          </div>
          <div className="bg-white flex size-full items-center justify-center p-4  space-y-2 md:space-y-0 md:space-x-4 rounded-lg flex-col md:flex-row">
            <div
              className="bg-red-800 text-white size-full items-center
              justify-center flex flex-1 hover:flex-[2]
              transition-flex duration-300 ease-in-out"
            >
              Grace Hopper
            </div>
            <div
              className="bg-red-800 text-white size-full items-center
              justify-center flex flex-1 hover:flex-[2] transition-flex duration-300 ease-in-out"
            >
              JV Neumann
            </div>
            <div
              className="bg-red-800 text-white size-full items-center
              justify-center flex flex-1 hover:flex-[2] transition-flex duration-300 ease-in-out"
            >
              Junar Landicho
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
