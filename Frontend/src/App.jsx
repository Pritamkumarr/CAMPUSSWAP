// Frontend/src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home.jsx';
import About from './pages/About.jsx';
import Login from './pages/Login.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Signup from './pages/Signup.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TermsOfService from './pages/TermsOfService.jsx';
import Faq from './pages/faq.jsx';
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
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/buy" element={<BuyItems />} />
          <Route path="/sell" element={<SellItem />} />
          <Route path="/item/:id" element={<ItemDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
