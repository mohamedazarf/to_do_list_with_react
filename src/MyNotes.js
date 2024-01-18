import React, { useState } from 'react';

const MyNotes = () => {
  const initialNotes = [
    { id: 1, content: 'Note 1' },
    { id: 2, content: 'Note 2' },
    { id: 3, content: 'Note 3' },
  ];

  const [notes, setNotes] = useState(initialNotes);

  return (
    <div>
      <h2>My Notes</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyNotes;
