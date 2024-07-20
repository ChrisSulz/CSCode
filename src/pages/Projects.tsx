import "./Projects.css";
import { Helmet } from 'react-helmet';
import CSCode from "../images/cs-code-logo.svg";

export default function Impressum() {
  return (
    <>
      <Helmet>
        <title>Projekte | CS-Code</title>
      </Helmet>
      <div className="projects-container">
        <h1>Meine Projekte</h1>
        <br />
        <p className="work-in-progress">- WORK IN PROGRESS -</p>

        <div className="projects-entry">
          <img src={CSCode} alt="project symbol" className="project-icon" />
          <div className="project-details">
            <h2 className="project-title">PROJECT PLACEHOLDER 1</h2>
            <p className="project-descr">Project description placeholder</p>
          </div>
        </div>

        <div className="projects-entry">
          <img src={CSCode} alt="project symbol" className="project-icon" />
          <div className="project-details">
            <h2 className="project-title">PROJECT PLACEHOLDER 2</h2>
            <p className="project-descr">Project description placeholder</p>
          </div>
        </div>
      </div>
    </>
  );
}