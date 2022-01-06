import React from "react";

// function Clock(props) {
//   return (
//     <div className="App">
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>Is is {props.date.toLocaleTimeString()}.</h2>
//       </div>
//     </div>
//   );
// };

// setState의 법칙
// 1. 직접 수정하면 안됨. (생성자에서만 가능.)
// 2. state는 동기적으로 수정될 수 있기 때문에 조심해야 한다.

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  // When the Clock output is inserted in the DOM,
  // React calls the componentDidMount() lifecycle method.
  componentDidMount() {
    // call the component’s tick() method once a second.
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  // If the Clock component is ever removed from the DOM,
  // React calls the componentWillUnmount() lifecycle method.
  componentWillUnmount() {
    // the timer is stopped.
    clearInterval(this.timerID);
  }

  tick() {
    // Thanks to the setState() call,
    // React knows the state has changed,
    // and calls the render() method again.
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>Is is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;
