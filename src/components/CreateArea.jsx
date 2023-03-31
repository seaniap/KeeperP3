import React, { useState } from "react";

function CreateArea(props) {
  let now = new Date().toLocaleTimeString();
  const [note, setNote] = useState({ title: "", content: "", date: now });
  function handleChange(event) {
    const { name, value } = event.target;
    //const newValue = event.target.value;

    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }

  function submitNote(event) {
    event.preventDefault();
    props.onAdd(note);
    setNote({ title: "", content: "", date: now });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={note.title}
        />
        <input
          type="hidden"
          name="date"
          onChange={handleChange}
          placeholder="Date"
          value={note.now}
        />
        <textarea
          name="content"
          onChange={handleChange}
          placeholder="Take a note..."
          value={note.content}
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
