import React from 'react';
import Navbar from './components/navbar.jsx';
import Collaboration from './components/collaboration.jsx';
import { Aboutus } from './components/aboutUs.jsx';
import ContactPage from './components/ContactPage.jsx';
import Cards from './components/cards.jsx';

const App = () => {
  return (
    <div className="min-h-screen bg-black">
        <Navbar />
        <Collaboration />
        <Aboutus />
        <ContactPage />
        <Cards />
    </div>
  );
}

export default App;