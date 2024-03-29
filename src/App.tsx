import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import CSCode from "./images/cs-code-logo.svg";
import HTML5Icon from "./images/icons/icon-html5.svg";
import CSS3Icon from "./images/icons/icon-css3.svg";
import JSIcon from "./images/icons/icon-javascript.svg";
import ReactIcon from "./images/icons/icon-react.svg";
import ViteIcon from "./images/icons/icon-vite.svg";
import GitHubIcon from "./images/icons/icon-github.svg";

export default function App() {
  return (
    <>
      <Header/>
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
              Hier entstehen meine <b>Projekte</b> durch die Verwendung von: <br />
              <ul>
                <li><img src={HTML5Icon} alt="html5-icon" className='icon-small'/> <b>HTML</b></li>
                <li><img src={CSS3Icon} alt="css3-icon" className='icon-small'/> <b>CSS</b></li>
                <li><img src={JSIcon} alt="javascript-icon" className='icon-small'/> <b>JavaScript</b></li>
                <li><img src={ReactIcon} alt="react-icon" className='icon-small'/> <b>React</b> als Programmbibliothek</li>
                <li><img src={ViteIcon} alt="vite-icon" className='icon-small'/> <b>Vite</b> als lokaler Entwicklungsserver</li>
              </ul>
              <a href="https://github.com/ChrisSulz/CSCode">
                <button className='button-github'>
                  <img src={GitHubIcon} alt="github-icon" className='icon-small'/> GitHub Repository
                </button>
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}