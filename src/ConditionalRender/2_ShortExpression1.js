import React from "react";

// Javascript의 Inline If with Logical && Operator문 사용해 구현.
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      {/* 앞의 조건이 false일때 다음 JSX가 나타나지 않음.
          그러나 앞의 조건이 0이라면 0이 출력됨. */}
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
    </div>
  );
}

function Main() {
  const messages = ["React", "Re: React", "Re:Re: React"];
  return (
    <div>
      <Mailbox unreadMessages={messages} />
    </div>
  );
}

export default Main;
