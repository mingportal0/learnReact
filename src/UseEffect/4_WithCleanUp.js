import React, { useState, useEffect } from "react";

//Effects with Cleanup
function UseEffect() {
  const [isOnline, setIsOnline] = useState(null);

  //ChatAPI는 예시임.
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    //ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

    // Specify how to clean up after this effect:
    return function cleanup() {
      //ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return `Loading...`;
  }
  return isOnline ? `Online` : `Offline`;
}

export default UseEffect;
