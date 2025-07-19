import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Services from './pages/Services';







function App() {
  return (
    <Router>
      <Navbar />
      
      
      <div className="app-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      </div>
      
      
      <Footer />
    </Router>
  );
}

export default App;



