"use client";

import React, { useEffect, useState } from "react";

const TestPage = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Abdullah");

  useEffect(() => {
    console.log("here", count);
  }, []);

  return (
    <div className="flex items-center flex-col justify-center gap-5 text-3xl">
      Count: {count}
      <button
        className="px-3 py-2 rounded bg-blue-900 text-white cursor-pointer"
        onClick={() => setCount(count + 1)}
      >
        Plus
      </button>
      Name: {name}
      <button
        className="px-3 py-2 rounded bg-blue-900 text-white cursor-pointer"
        onClick={() => setName("Umair")}
      >
        Change Name
      </button>
    </div>
  );
};

export default TestPage;
