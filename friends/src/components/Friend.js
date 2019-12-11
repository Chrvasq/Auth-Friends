import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Friend = props => {
  const [editMode, setEditMode] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    age: "",
    email: ""
  });

  const handleChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleEdit = e => {
    e.preventDefault();
    setEditMode(true);
    setFormValues({
      ...formValues,
      name: props.friend.name,
      age: props.friend.age,
      email: props.friend.email
    });
    if (editMode === true) {
      axiosWithAuth()
        .put(`/friends/${e.target.id}`, formValues)
        .then(res => {
          setEditMode(false);
          props.setFriends(res.data);
        })
        .catch(err => console.log(err.message));
    }
  };

  return (
    <div>
      <h1>
        {editMode ? (
          <input
            type="text"
            value={formValues.name}
            name="name"
            onChange={handleChange}
          />
        ) : (
          props.friend.name
        )}
      </h1>
      <p>
        {editMode ? (
          <input
            type="text"
            value={formValues.age}
            name="age"
            onChange={handleChange}
          />
        ) : (
          props.friend.age
        )}
      </p>
      <p>
        {editMode ? (
          <input
            type="text"
            value={formValues.email}
            name="email"
            onChange={handleChange}
          />
        ) : (
          props.friend.email
        )}
      </p>
      <button id={props.friend.id} onClick={handleEdit}>
        {editMode ? "Commit Changes" : "Edit Friend"}
      </button>
    </div>
  );
};

export default Friend;
