import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import LoginSignup from './components/LoginSignup';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<LoginSignup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
