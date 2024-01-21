// import React from 'react';
// import './myNotes.css';
// const MyNotes = () => {

//   const notes = [
//     { id: 1, title: 'Note 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
//     { id: 2, title: 'Note 2', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
//     { id: 3, title: 'Note 3', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },

//   ];

  // return (
  //   <div className="notes-grid">
  //     {notes.map((note) => (
  //       <div key={note.id} className="note-card">
  //         <h2>{note.title}</h2>
  //         <p>{note.content}</p>
  //       </div>
  //     ))}
  //   </div>
  // );
// };

// export default MyNotes;

import React, { useState, useEffect } from 'react';
import './myNotes.css';
import axios from 'axios';  // Import axios for API calls

const MyNotes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/allNotes/')  // Replace with your backend URL
      .then(response => {
        console.log('Notes received:', response.data);  // Log the received notes

        setNotes(response.data.notes);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="notes-grid">
      {notes.map((note) => (
        <div key={note.id} className="note-card">
          <h2>{note.title}</h2>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
  
};

export default MyNotes;
