"use client"

const { useState, useEffect } = require("react");

function Logger() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return <button className="m-4 p-4 bg-amber-500 text-white rounded-2xl" onClick={() => setCount(count + 1)}>Increase</button>;
}
export default  Logger