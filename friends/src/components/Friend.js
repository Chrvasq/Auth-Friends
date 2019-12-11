import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Friend = props => {
  const { name, age, email, id } = props.friend;

  const [editMode, setEditMode] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    age: "",
    email: ""
  });
  const [isDeleting, setIsDeleting] = useState(false);
  const [friendToDelete, setFriendToDelete] = useState({ id: "" });

  const handleChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleEdit = e => {
    e.preventDefault();
    setEditMode(true);
    setFormValues({
      ...formValues,
      name: name,
      age: age,
      email: email
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

  const triggerDeleteConfirmation = e => {
    e.preventDefault();
    setIsDeleting(true);
  };

  const handleDelete = e => {
    setFriendToDelete(e.target.id);
    axiosWithAuth()
      .delete(`/friends/${e.target.id}`, friendToDelete)
      .then(res => {
        setIsDeleting(false);
        setFriendToDelete({ id: "" });
        props.setFriends(res.data);
      })
      .catch(err => console.log(err.message));
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
          name
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
          age
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
          email
        )}
      </p>
      <button id={id} onClick={handleEdit}>
        {editMode ? "Commit Changes" : "Edit Friend"}
      </button>
      <button
        id={id}
        onClick={triggerDeleteConfirmation}
        style={isDeleting ? { display: "none" } : null}
      >
        Delete Friend
      </button>
      {isDeleting ? (
        <div>
          <button id={id} onClick={handleDelete}>
            Confirm Delete
          </button>
          <button onClick={() => setIsDeleting(false)}>Cancel</button>
        </div>
      ) : null}
    </div>
  );
};

export default Friend;
