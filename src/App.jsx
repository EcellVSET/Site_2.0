import React from 'react';
import Navbar from './components/navbar.jsx';
import Collaboration from './components/collaboration.jsx';
import { Aboutus } from './components/aboutUs.jsx';
import ContactPage from './components/ContactPage.jsx';

const App = () => {
  return (
    <div className="min-h-screen bg-black">
        <Navbar />
        <Collaboration />
        <Aboutus />
        <ContactPage />
    </div>
  );
}

export default App;