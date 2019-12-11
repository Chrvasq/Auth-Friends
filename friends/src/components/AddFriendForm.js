import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddFriendForm = props => {
  const [friend, setFriend] = useState({
    name: "",
    age: "",
    email: ""
  });

  const handleChange = e => {
    setFriend({ ...friend, [e.target.name]: e.target.value });
  };

  const addFriend = () => {
    axiosWithAuth()
      .post("/friends", friend)
      .then(res => {
        props.setFriends(res.data);
      })
      .catch(err => console.log(err.message));
  };

  const submitForm = e => {
    e.preventDefault();
    addFriend();
    setFriend({ name: "", age: "", email: "" });
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={friend.name}
          placeholder="Name"
          onChange={handleChange}
        />
        <label>Age</label>
        <input
          type="text"
          name="age"
          value={friend.age}
          placeholder="Age"
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={friend.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddFriendForm;
