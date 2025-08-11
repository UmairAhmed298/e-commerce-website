"use client"

import { useState, useMemo } from "react";

 function App() {
  const [text, setText] = useState("");

  const wordCount = useMemo(() => {
    console.log("Counting words...");
    return text.split(" ").filter(Boolean).length;
  }, [text]);

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>Word count: {wordCount}</p>
    </div>
  );
}

export default App
