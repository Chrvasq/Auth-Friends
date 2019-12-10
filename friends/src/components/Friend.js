import React from "react";

const Friend = props => {
  return (
    <div id={props.id}>
      <h1>{props.name}</h1>
      <p>{props.age}</p>
      <p>{props.email}</p>
    </div>
  );
};

export default Friend;
