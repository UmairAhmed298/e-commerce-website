"use client"

const { useState } = require("react");

function NameInput() {
  const [name, setName] = useState("");
  return (
    <div>
      <input className="border-2" placeholder="Enter Text to Show" value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name}</p>
    </div>
  );
}
 export default NameInput