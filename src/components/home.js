import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://127.0.0.1:8000/add-note/', {
        title,
        content,
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        withCredentials: true, // Include cookies in the request
      });

      // Clear form fields after successful submission
      setTitle('');
      setContent('');

      console.log('Note added successfully!');
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  return (
    <div>
      <h1>Add Note Form</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        
        <button type="submit" className="button">Add</button>
      </form>
    </div>
  );
};

export default Home;