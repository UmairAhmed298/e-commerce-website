"use client"

const { useState, useCallback } = require("react");

function Child({ onClick, count }) {
  return (
    <div>
      <p>Count in child: {count}</p>
      <button onClick={onClick}>Click Child Button</button>
    </div>
  );
}

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return <Child onClick={handleClick} count={count} />;
}

export default Parent
