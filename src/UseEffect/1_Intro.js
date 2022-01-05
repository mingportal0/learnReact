import React, { useState, useEffect } from "react";

//Effects without Cleanup
function UseEffect() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  //UseEffect function 내 있기 때문에 React DOM이 호출되기 전 Effect가 있다면 그것을 기억한 뒤
  //React DOM이 업데이트 된 후 Effect를 호출한다.
  useEffect(() => {
    console.log("useEffect");
    document.title = `Yout Clicked ${count} times!`;
  });

  console.log("bf return");
  return (
    <div className="App">
      <h1>Intro</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default UseEffect;
