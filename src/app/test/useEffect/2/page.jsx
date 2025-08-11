"use client"

import { useEffect, useState } from "react";

function WelcomeMessage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage("Welcome to my website!");
  }, []); // Runs only once when the component mounts

  return <h2>{message}</h2>;
}

export default WelcomeMessage;
