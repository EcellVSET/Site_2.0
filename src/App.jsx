import React from 'react';
import Navbar from './components/navbar.jsx';
import Colaboraton from './components/colaboration.jsx';

const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Colaboraton />
    </div>
  );
}

export default App;