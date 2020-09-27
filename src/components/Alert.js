import React, { useContext } from "react";
import { AlertContext } from "../context/alert/AlertContext";

export const Alert = () => {
  const { alert, hide } = useContext(AlertContext);

  if (!alert.visible) {
    return null;
  }

  return (
    <div className={`alert alert-${alert.type || "warning"} alert-dismissible`}>
      <strong>Внимание!</strong>

      {alert.text}

      <button onClick={hide} type="button" className="close">
        &times;
      </button>
    </div>
  );
};