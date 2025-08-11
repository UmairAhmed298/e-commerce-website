"use client"


import { createContext, useContext } from "react";

const ThemeContext = createContext("light");

function Button() {
  const theme = useContext(ThemeContext);

  const buttonClasses =
    theme === "dark"
      ? "bg-gray-800 text-white px-4 py-2 rounded"
      : "bg-gray-200 text-black px-4 py-2 rounded";

  return <button className={buttonClasses}>Click Me</button>;
}

function App() {
  return (
    <ThemeContext.Provider value="light">
      <div className="p-4">
        <Button />
      </div>
    </ThemeContext.Provider>
  );
}


export default App
