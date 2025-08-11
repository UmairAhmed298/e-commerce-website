"use client"

import { useState, useEffect, useRef } from "react";

function PrevCount() {
  const [count, setCount] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <div>
      <p>Now: {count}, Before: {prevCount.current}</p>
      <button onClick={() => setCount(c => c + 1)}>Increase</button>
    </div>
  );
}
export default PrevCount