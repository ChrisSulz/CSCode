import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Impressum from './pages/Impressum';
import Projects from './pages/Projects';
import PhasmoGuide from './pages/projects/PhasmoGuide/PhasmoGuide';
// import LinkList from './pages/projects/linklist/LinkList';

// Wrapper-Komponente für bedingte Rendering-Logik
const AppContent = () => {
  const location = useLocation();

  // Prüfe, ob aktuelle Route eine Standalone-Seite ist
  const isStandalonePage = ['/linklist', '/anotherPage'].includes(location.pathname);

  if (isStandalonePage) {
    return (
      <Routes>
        {/* <Route path="/linklist" element={<LinkList />} /> */}
      </Routes>
    );
  }

  return (
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
  );
};

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}