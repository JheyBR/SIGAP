import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import ToDos from './Pages/ToDos';
import Costumer from './Pages/Costumer/Costumer';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/*" element={<App />} />
      <Route path="/todos" element={<ToDos />} />
      <Route path="/costumer" element={<Costumer />} />
    </Routes>
  </Router>
);
