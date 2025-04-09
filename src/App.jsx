// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import EventsPage from './pages/EventsPage.jsx';
import MembersPage from './pages/Members.jsx';
import Navbar from './components/navbar.jsx'; // Import your Navbar component

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar /> {/* Place Navbar here, outside Routes but inside Router */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/members" element={<MembersPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;