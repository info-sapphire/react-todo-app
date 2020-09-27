import Axios from "axios";
import React, { useReducer } from "react";
import { ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER } from "../Types";
import { FirebaseContext } from "./FirebaseContext";
import { FirebaseReducer } from "./FirebaseReducer";

const url = process.env.REACT_APP_DB_URL;

export const FirebaseState = ({ children }) => {
  const initialState = {
    notes: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(FirebaseReducer, initialState);

  const showLoader = () => dispatch({ type: SHOW_LOADER });
  const fetchNotes = async () => {
    showLoader();

    const { data: notes } = await Axios.get(`${url}/notes.json`);

    const payload = Object.keys(notes).map((noteId) => ({
      ...notes[noteId],
      id: noteId,
    }));

    dispatch({ type: FETCH_NOTES, payload });
  };

  const addNote = async (title) => {
    const note = {
      title,
      date: new Date().toJSON,
    };

    try {
      const {
        data: { name: noteId },
      } = await Axios.post(`${url}/notes.json`, note);

      const payload = {
        ...note,
        id: noteId,
      };

      dispatch({ type: ADD_NOTE, payload });
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const removeNote = async (id) => {
    await Axios.delete(`${url}/notes/${id}.json`);

    dispatch({
      type: REMOVE_NOTE,
      payload: id,
    });
  };

  return (
    <FirebaseContext.Provider
      value={{
        showLoader,
        fetchNotes,
        addNote,
        removeNote,
        loading: state.loading,
        notes: state.notes,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
