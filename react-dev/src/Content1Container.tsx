import React from "react";

const Content1Container = () => {
  const text = "Add story here";
  const text1 = "Chapter 1";
  return (
    <div className="flex w-md h-screen items-center justify-center align-middle">
      <div className="w-2/3 h-5/6 border-4 border-black-400 bg-amber-400 rounded-xl flex-col p-10 space-y-10 flex items-center justify-center align-middle">
        <div className="bg-red-300 p-4 rounded-lg border-4 text-2xl absolute top-40 left-60 font-serif flex md:h-18 md:max-w-screen-md">
          {text1}
        </div>
        <div
          className="bg-white border-4 rounded-lg
        flex size-40 items-center w-full text-xl overflow-y-scroll md:shrink-0 md:h-2/3 md:max-w-screen-md"
        >
          <p className="font-serif text-left px-8 text-2xl flex">{text}</p>
        </div>
        <div className="bg-white p-4 rounded-lg absolute bottom-16 left-65 text-2xl w-45 items-center justify-center flex size-15">
          <div className="flex md:max-w-screen-md ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-10"
            >
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
          </div>
        </div>
        <div className="bg-white p-4 rounded-4xl absolute bottom-27 right-60 text-2xl border-4 w-70 items-center justify-center flex size-15  md:shrink md:h-15 md:max-w-screen-md font-semibold">
          Comment
        </div>
      </div>
    </div>
  );
};

export default Content1Container;
