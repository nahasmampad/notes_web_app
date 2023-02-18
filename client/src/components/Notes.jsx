import axios from "axios";
import React from "react";
import del from "../Icons/trash.svg";
import "./Components.css";

function Notes({ allNotes, getAllNotes }) {
  const deleteNote = async (id) => {
    const { data } = await axios.delete(`http://localhost:5000/notes/${id}`);
    getAllNotes();
  };

  return (
    <>
      {allNotes.map((item, i) => (
        <div className="Notes" key={i}>
          <div className="notes_content">
            <div className="notes_title">{item.title}</div>
            <div className="notes_text">{item.note}</div>
          </div>
          <div className="notes_date">{item.date}</div>
          <div
            className="notes_delete"
            onClick={() => {
              deleteNote(item.id);
            }}
          >
            <img src={del} alt="" />
          </div>
        </div>
      ))}
    </>
  );
}

export default Notes;
