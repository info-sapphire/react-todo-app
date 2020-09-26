import React, { useState, useContext } from "react";
import { AlertContext } from "../context/alert/AlertContext";

export const Form = () => {
  const [value, setValue] = useState("");
  const alert = useContext(AlertContext);

  const submitHandler = (event) => {
    event.preventDefault();

    if (value.trim()) {
      alert.show("Note successful created!", "success");
      setValue("");
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
