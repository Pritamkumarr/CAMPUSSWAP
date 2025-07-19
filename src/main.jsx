// Frontend/src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Import your App component
import { BrowserRouter } from 'react-router-dom'; // Only BrowserRouter is needed here
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components/Home.css'; // Import your custom CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App /> {/* Render your App component, which now handles routes */}
    </BrowserRouter>
  </React.StrictMode>,
);