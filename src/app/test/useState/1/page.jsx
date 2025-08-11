"use client"

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button className="size-50 bg-amber-400 text-blue-800" onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}
export default Counter