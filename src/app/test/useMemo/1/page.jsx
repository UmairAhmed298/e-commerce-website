"use client"

import { useState, useMemo } from "react";

function SlowList({ numbers = [] }) {
  const sorted = useMemo(() => {
    console.log("Sorting...");
    return [...numbers].sort((a, b) => a - b);
  }, [numbers]);

  return <ul>{sorted.map(n => <li key={n}>{n}</li>)}</ul>;
}

export default SlowList;
