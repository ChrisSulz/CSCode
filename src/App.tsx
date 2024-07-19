import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Navbar from "./components/navbar/Navbar";
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Impressum from './pages/Impressum';

export default function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/impressum" element={<Impressum />} />
          </Routes>
                <Footer />
      </div>
    </Router>
  );
}