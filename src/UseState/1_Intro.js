import React, { useState } from "react";

export default function UseState() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Intro</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
