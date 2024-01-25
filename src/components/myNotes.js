import React, { useState, useEffect } from 'react';
import './myNotes.css';
import axios from 'axios';

const MyNotes = () => {
  const [originalNotes, setOriginalNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [isModifyDialogOpen, setModifyDialogOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');


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
  
  const modifyNote = async (e, id) => {
    e.preventDefault();
  
    try {
      console.log("Title:", title);
      console.log("Content:", content);
  
      await axios.put(`http://127.0.0.1:8000/modifyNote/${id}/`, {
        title,
        content,
      });
  
      console.log('Note modified successfully!');
    } catch (error) {
      console.error('Error modifying note:', error.response.data);
    }
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
  const openModifyDialog = (note) => {
    setSelectedNote(note);
    setModifyDialogOpen(true);
  };

  const closeModifyDialog = () => {
    setModifyDialogOpen(false);
    setSelectedNote(null);
  };


  return (
    <>
    <div className={`overlay ${isModifyDialogOpen ? 'open' : ''}`}></div>
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
              onClick={() => openModifyDialog(note)}
            >
              modify
            </button>
            </div>
          </form>
        ))}
      </div>
      <div className={`dialog ${isModifyDialogOpen ? 'open' : ''}`}>
      <form className="dialog-content" >
        <h2 style={{backgroundColor:'blue',color:"white",width:"100%" , textAlign:"center"}}>Modify Note</h2>
        <label>Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={selectedNote? selectedNote.title : ''}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          name="content"
          defaultValue={selectedNote? selectedNote.content : ''}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <button type="submit" style={{backgroundColor:'blue',color:'white',padding:'0px 10px', margin:'5px 0'}}
        onClick={(e) => modifyNote(e, selectedNote.id)}
        >Save</button>
        <button onClick={closeModifyDialog}
        style={{backgroundColor:'red',color:'white',padding:'0px 10px'}}
        >Cancel</button>
      </form>
    </div>
      
    </>
  );
};

export default MyNotes;
