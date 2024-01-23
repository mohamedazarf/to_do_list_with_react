import React, { useState, useEffect } from 'react';
import './myNotes.css';
import axios from 'axios';

const MyNotes = () => {
  const [originalNotes, setOriginalNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/allNotes/')
      .then(response => {
        console.log('Notes received:', response.data);
        setOriginalNotes(response.data.notes);
        setFilteredNotes(response.data.notes);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleDeleteNote = (id) => {
    axios.delete(`http://127.0.0.1:8000/deleteNote/${id}`)
      .then((response) => {
        // Handle success, e.g., remove the note from the state
        setOriginalNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
        setFilteredNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  const search = (e) => {
    const value = e.target.value.toLowerCase();

    if (value === '') {
      // If the search bar is empty, set filteredNotes to include all notes
      setFilteredNotes(originalNotes);
    } else {
      const filteredNotes = originalNotes.filter(note => 
        note.title.toLowerCase().includes(value) ||
        note.content.join('').toLowerCase().includes(value)
      );
      setFilteredNotes(filteredNotes);
    }
  };

  return (
    <>
      <form>
        <input type="text" className="searchBar" placeholder="Search..." onChange={search} />
      </form>
      <div className="notes-grid">
        {filteredNotes.map((note) => (
          <form className='noteForm' key={note.id}>
            <div className="note-card">
              <h1>{note.id}</h1>
              <h2>{note.title}</h2>
              <p>{note.content}</p>
            </div>
            <div className='btns'>
            <button
              type="button"
              className="deleteBtn"
              onClick={() => handleDeleteNote(note.id)}
            >
              delete
            </button>
            <button
              type="button"
              className="modifyBtn"
              // onClick={() => handleDeleteNote(note.id)}
            >
              modify
            </button>
            </div>
          </form>
        ))}
      </div>
    </>
  );
};

export default MyNotes;
