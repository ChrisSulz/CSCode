import "./Projects.css";
import { Helmet } from 'react-helmet';
import CSCode from "../images/cs-code-logo.svg";
import BachelorThesis from "../images/icons/bachelor-thesis.svg";

export default function Projects() {

  const handleClick1 = () => {
    window.open('https://github.com/ChrisSulz/StrapiManual', '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Projekte | CS-Code</title>
      </Helmet>
      <div className="projects-container">
        <h1>Meine Projekte</h1>
        <br />
        <p className="work-in-progress">- WORK IN PROGRESS -</p>

        <div className="projects-entry" onClick={handleClick1} >
          <img src={BachelorThesis} alt="Bachelor Thesis" className="project-icon" />
          <div className="project-details">
            <h2 className="project-title">BACHELORARBEIT</h2>
            <p className="project-descr">Meine Bachelorarbeit über die <b>automatisierte Generierung</b> eines <b>Benutzerhandbuchs</b> mittels <b>Cypress</b> anhand des Content-Management-Systems <b>Strapi</b>. </p>
          </div>
        </div>

        <div className="projects-entry">
          <img src={CSCode} alt="project symbol" className="project-icon" />
          <div className="project-details">
            <h2 className="project-title">PROJECT PLACEHOLDER</h2>
            <p className="project-descr">Project description placeholder</p>
          </div>
        </div>
      </div>
    </>
  );
}