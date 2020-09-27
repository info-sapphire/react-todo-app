import React, { useContext } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
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
    <TransitionGroup component="ul" className="list-group">
      {notes.map((note) => (
        <CSSTransition key={note.id} classNames={"note"} timeout={800}>
          <li className="list-group-item note">
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
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
