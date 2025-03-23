import React from "react";

const Content1Container = () => {
  const text = "Hello, I am Aya!";
  return (
    <div className="flex w-screen h-screen items-center justify-center align-middle">
      <div className="w-2/3 h-5/6 border-2 border-black-400 bg-gray-100 rounded-xl flex-col p-10 space-y-10 flex items-center justify-center align-middle">
        <div
          className="bg-white border-2 rounded-lg
        flex size-40 items-center w-full text-xl"
        >
          <p className="font-serif text-left px-8 text-2xl flex">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Content1Container;
