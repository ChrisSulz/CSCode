import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Impressum from './pages/Impressum';
import Projects from './pages/Projects';
import PhasmoGuide from './pages/projects/PhasmoGuide';

export default function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/phasmo" element={<PhasmoGuide />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}