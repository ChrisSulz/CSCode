import './Navbar.css';
import iconHome from "../../images/icons/icon-home.svg"
import iconAbout from "../../images/icons/icon-about-me.svg"
import iconContact from "../../images/icons/icon-contact.svg"
import iconProjects from "../../images/icons/icon-projects.svg"

export default function Navbar() {
    return (
        <div id="nav-container">
            <nav>
                <div className="nav-button-container">
                    <img className="nav-button-icon" src={iconHome} alt="iconHome" onClick={() => { window.location.href = '/'; }} />
                    <div className="tooltip">Hauptseite</div>
                </div>
                <div className="separator"></div>
                <div className="nav-button-container">
                    <img className="nav-button-icon" src={iconAbout} alt="iconAbout" onClick={() => { window.location.href = 'about'; }} />
                    <div className="tooltip">Über mich</div>
                </div>
                <div className="separator"></div>
                <div className="nav-button-container">
                    <img className="nav-button-icon" src={iconContact} alt="iconContact" onClick={() => { window.location.href = 'contact'; }} />
                    <div className="tooltip">Kontakt</div>
                </div>
                <div className="separator"></div>
                <div className="nav-button-container">
                    <img className="nav-button-icon" src={iconProjects} alt="iconProjects" onClick={() => { window.location.href = '/'; }} />
                    <div className="tooltip">Meine Projekte (tbd)</div>
                </div>
            </nav>
        </div>
    );
}