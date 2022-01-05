import React from "react";

class UsingClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: null
    };
    this.handleStatusChange = this.handleStatusChange.bind(this);
  }
  //ChatAPI는 예시임.
  componentDidMount() {
    /*ChatAPI.subscribeToFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );*/
  }
  componentWillUnmount() {
    /*ChatAPI.unsubscribeFromFriendStatus(
      this.props.friend.id,
      this.handleStatusChange
    );*/
  }
  handleStatusChange(status) {
    this.setState({
      isOnline: status.isOnlune
    });
  }

  render() {
    if (this.state.isOnline === null) {
      return `Loading...`;
    }
    return this.state.isOnline ? `Online` : `Offline`;
  }
}

export default UsingClass;
