import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <p>The Key is : {props.key}</p>
    </div>
  );
}

export default Note;
