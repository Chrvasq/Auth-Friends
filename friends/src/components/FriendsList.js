import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friend from "./Friend";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  const getFriendsData = () => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        setFriends(res.data.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getFriendsData();
  }, []);

  return (
    <div>
      {friends.map((friend, index) => {
        return <Friend key={index} friend={friend} />;
      })}
    </div>
  );
};

export default FriendsList;
