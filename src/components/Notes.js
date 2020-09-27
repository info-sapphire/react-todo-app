import React, { useContext } from "react";
import { AlertContext } from "../context/alert/AlertContext";
import { FirebaseContext } from "../context/firebase/FirebaseContext";

export const Notes = ({ notes }) => {
  const alert = useContext(AlertContext);
  const { removeNote } = useContext(FirebaseContext);

  const onRemove = (noteId) => {
    removeNote(noteId)
      .then(() => {
        alert.show("Note successful removed!", "success");
      })
      .catch(() => {
        alert.show("Something went wrong", "danger");
      });
  };

  return (
    <ul className="list-group">
      {notes.map((note) => (
        <li className="list-group-item note" key={note.id}>
          <div>
            <strong>{note.title}</strong>
            <small>{note.date}</small>
          </div>
          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={() => onRemove(note.id)}
          >
            &times;
          </button>
        </li>
      ))}
    </ul>
  );
};
