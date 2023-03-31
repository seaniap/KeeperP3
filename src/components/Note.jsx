import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="note" onClick={handleClick}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <p>{props.date}</p>
      <button>DELETE</button>
    </div>
  );
}

export default Note;
