import React from 'react';
import './myNotes.css';
const MyNotes = () => {
  // Sample notes data
  const notes = [
    { id: 1, title: 'Note 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'Note 2', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 3, title: 'Note 3', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
    // Add more notes as needed
  ];

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
