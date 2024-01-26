import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, Outlet, useMatch } from 'react-router-dom';
import Home from './components/home';
import MyNotes from "./components/myNotes";
import './App.css';

const ConditionalRender = ({ setPageTitle }) => {
  const match = useMatch('/');
  if (match) {
    setPageTitle('home');
    return <NavigateToMyNotesButton />;
  }
  setPageTitle('my notes');
  return <NavigateToHomeButton />;
};

const App = () => {
  const [pageTitle, setPageTitle] = useState('');

  return (
    <Router>
      <>
        <header>
          <nav>{pageTitle}</nav>
          <ConditionalRender setPageTitle={setPageTitle} />
        </header>

        <body>
          <section>
            <Outlet />
          </section>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/myNotes" element={<MyNotes />} />
          </Routes>
        </body>
      </>
    </Router>
  );
};

const NavigateToMyNotesButton = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/myNotes');
  };

  return <button className="navigate" onClick={handleButtonClick}>Go to My Notes</button>;
};

const NavigateToHomeButton = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/');
  };

  return <button className="navigate" onClick={handleButtonClick}>Go back to home</button>;
};

export default App;
