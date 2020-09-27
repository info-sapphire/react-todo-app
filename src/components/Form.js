import React, { useState, useContext } from "react";
import { AlertContext } from "../context/alert/AlertContext";
import { FirebaseContext } from "../context/firebase/FirebaseContext";

export const Form = () => {
  const [value, setValue] = useState("");
  const alert = useContext(AlertContext);
  const firebase = useContext(FirebaseContext);

  const submitHandler = (event) => {
    event.preventDefault();

    if (value.trim()) {
      firebase
        .addNote(value.trim())
        .then(() => {
          alert.show("Note successful created!", "success");
          setValue("");
        })
        .catch(() => {
          alert.show("Something went wrong", "danger");
        });
    } else {
      alert.show("Enter title of note!", "danger");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter note title"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </form>
  );
};
