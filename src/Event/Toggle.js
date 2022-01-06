import React from "react";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      number: 1
    };
    // Javascript의 class method는 기본적으로 bound 되어 있지 않기 때문에 사용함.
    // callback 함수에서 this를 사용하려면 필요함.
    //this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  // bind 없이 class field로 선언해 사용하면 아래와 같이 callback 함수에서 this로 쓸 수 있다.
  handleClick = () => {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn
    }));
  };

  // Passing Arguments to Event Handlers
  replaceNum(num, e) {
    this.setState({
      number: num
    });
  }

  render() {
    return (
      <div>
        {/* Event Handlers */}
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "On" : "Off"}
        </button>
        {/* 계속 다른 callback을 리턴하기 때문에 만약 하위 Component에 
        이것이 전달되었을 경우 의도치 않은 re-rendering이 일어날 수 있다.
        그래서 위 방법을 더 권장함. */}
        <button onClick={() => this.handleClick()}>
          {this.state.isToggleOn ? "On" : "Off"}
        </button>

        {/* Passing Arguments to Event Handlers */}
        {/* arrow 함수를 이용하면 bind할 필요 없이 모든 parameter가 넘어감. */}
        <button onClick={(e) => this.replaceNum(2, e)}>
          {this.state.number}
        </button>
        <button onClick={this.replaceNum.bind(this, 2)}>
          {this.state.number}
        </button>
      </div>
    );
  }
}

export default Toggle;
