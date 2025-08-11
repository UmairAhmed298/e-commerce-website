"use client"

import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className="flex justify-center items-center w-full h-screen gap-5">
      <input className="border-1" ref={inputRef} />
      <button onClick={focusInput} className="cursor-pointer p-1.5 px-3 rounded-2xl bg-amber-500 text-white font-bold">Focus</button>
    </div>
  );
}

export default FocusInput