// Frontend/src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home.jsx';
import About from './pages/About.jsx';
import Login from './pages/Login.jsx'; // <-- Import the Login page

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} /> {/* Add login route */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
