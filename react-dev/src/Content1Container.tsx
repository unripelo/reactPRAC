import React from "react";

const Content1Container = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center align-middle">
      <div className="w-2/3 h-5/6 border-4 border-black-400 bg-amber-100 rounded-xl flex-col p-10 space-y-10 flex items-center justify-center align-middle">
        <div className="text-2xl font-semibold">Hello, 1!</div>
        <div className="bg-white p-4 rounded-lg absolute bottom-16 left-60 text-2xl border-4 w-34 items-center justify-center flex">
          Heart
        </div>
      </div>
    </div>
  );
};

export default Content1Container;
