import './Header.css';
import logo from "../../images/cs-code-logo.svg";

export default function Header() {
  return (
    <header>
        <div className="header-container-left">
          <a href="/">
            <img src={logo} className="cs-code-logo"/>
          </a>
        </div>
        <div className="header-container-right">
          <p className="under-construction">
            Diese Webseite ist noch im Aufbau!
            <br/>
            This website is still under construction!
          </p>
        </div>
    </header>
  );
}

