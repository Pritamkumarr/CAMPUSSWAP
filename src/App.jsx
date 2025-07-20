import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home.jsx';
import About from './pages/About.jsx';
import BuyItems from './pages/BuyItems.jsx';
import ItemDetails from './pages/ItemDetails.jsx';
import SellItem from './pages/SellItem.jsx'; 

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/buy" element={<BuyItems />} />
          <Route path="/sell" element={<SellItem />} /> 
          <Route path="/item/:id" element={<ItemDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
