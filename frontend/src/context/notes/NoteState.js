import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const Host = "http://localhost:5000";
  const noteinitial = []
  const [notes, setnotes] = useState(noteinitial);

  // Get all notes

  const getnote = async () => {
    // API call
    const response = await fetch(`${Host}/api/notes/fetchAllUser`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "auth-token":  localStorage.getItem('token')
      }
    });
    const note = await response.json();
    setnotes(note);
  }
  // Add a note
  const addnote = async (title, description, tag) => {

    // API call
    const response = await fetch(`${Host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "auth-token":  localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });

    const note = await response.json();

    setnotes(notes.concat(note))
  }

  // Delete a note
  const deleteNote = async (id) => {
    // API call
    const response = await fetch(`${Host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":  localStorage.getItem('token')
      }
    });
    const json = await response.json();
    console.log(json);
    const newnote = notes.filter((note) => { return note._id !== id })
    setnotes(newnote);
  }

  // Edit a note
  const editnote = async (id, title, description, tag) => {
    // API call
    const response = await fetch(`${Host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":  localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json();
    console.log(json);
    const newnote = JSON.parse(JSON.stringify(notes))

    //Logic to edit in client
    for (let i = 0; i < newnote.length; i++) {
      const element = newnote[i];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
        break;
      }
    }

    setnotes(newnote);

  }


  return (
    <NoteContext.Provider value={{ notes, addnote, deleteNote, editnote, getnote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState