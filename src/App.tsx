import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import CSCode from "./images/cs-code-logo.svg";

export default function App() {
  return (
    <>
      <Header/>
      <Navbar/>
      <main>
        <div className="index-container">
          <img
            src={CSCode}
            alt="cs-code-logo"
            className="cs-code-logo"
          />
          <div className='index-text'>
            <div className='index-text-header'>
              <h1>Persönlicher Blog</h1>
              <h2>von Christian Sulzinger</h2>
            </div>
            <br />
            <p>
              Um mich selbst und meine Kenntnisse im <b>Web Development</b> weiter zu stärken und voranzubringen, habe ich mich für einen <b>persönlichen Blog</b> entschieden. <br />
              Hier entstehen durch die Verwendung von: <br />
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript (mit der Programmbibliothek React)</li>
                <li>Vite als lokaler Entwicklungsserver</li>
              </ul>
              meine Projekte.
            </p>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}