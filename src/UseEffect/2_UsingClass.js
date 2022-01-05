import React from "react";

class UsingClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `Yout Clicked ${this.state.count} times!`;
  }

  componentDidUpdate() {
    document.title = `Yout Clicked ${this.state.count} times!`;
  }

  render() {
    return (
      <div className="App">
        <h1>Using Class</h1>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

export default UsingClass;
