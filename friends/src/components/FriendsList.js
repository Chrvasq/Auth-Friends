import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friend from "./Friend";
import AddFriendForm from "./AddFriendForm";

const FriendsList = props => {
  const [friends, setFriends] = useState();

  const getFriendsData = () => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => console.log(err.message));
  };

  useEffect(() => {
    getFriendsData();
  }, []);

  return (
    <div>
      <AddFriendForm setFriends={setFriends} />
      {friends ? (
        friends.map((friend, index) => (
          <Friend key={index} friend={friend} setFriends={setFriends} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FriendsList;
