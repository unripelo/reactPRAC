import React from "react";

const Content2Container = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center align-middle">
      <div className="w-2/3 h-5/6 border-4 border-black-400 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl flex-col p-10 space-y-10 flex items-center justify-center align-middle">
        <div className="p-4 rounded-lg border-4">
          <div className="text-5xl font-bold">2048</div>
          <div className="text-2xl font-semibold">Endless Mode</div>
        </div>
      </div>
    </div>
  );
};

export default Content2Container;
