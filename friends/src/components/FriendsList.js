import React, { useEffect } from "react";
import Friend from "./Friend";
import AddFriendForm from "./AddFriendForm";

const FriendsList = props => {
  useEffect(() => {
    props.getFriendsData();
  }, []);

  return (
    <div>
      <AddFriendForm setFriends={props.setFriends} />
      {props.friends ? (
        props.friends.map((friend, index) => (
          <Friend key={index} friend={friend} setFriends={props.setFriends} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FriendsList;
