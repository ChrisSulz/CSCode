import "./Projects.css";
import { Helmet } from 'react-helmet';
import CSCode from "../images/cs-code-logo.svg";
import BachelorThesis from "../images/icons/bachelor-thesis.svg";

export default function Projects() {

  const projects = [
    {
      id: 1,
      title: 'Bachelorarbeit',
      description: 'Meine Bachelorarbeit über die <b>automatisierte Generierung</b> eines <b>Benutzerhandbuchs</b> mittels <b>Cypress</b> anhand des Content-Management-Systems <b>Strapi</b>.',
      image: BachelorThesis,
      altText: 'Bachelor Thesis',
      onClick: () => handleClickStrapi()
    },
    {
      id: 2,
      title: 'Phasmophobia Guide',
      description: 'Eine Zusammenstellung von hilfreichen Informationen für das Spiel <b>Phasmophobia</b> als eigenständiger <b>Guide</b>.',
      image: CSCode,
      altText: 'project symbol',
      onClick: () => { window.location.href = '/PhasmoGuide'; }
    }
  ]

  const handleClickStrapi = () => {
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
        {projects.map((project) => (
          <div key={project.id} className="projects-entry" onClick={project.onClick}>
            <img src={project.image} alt={project.altText} className="project-icon" />
            <div className="project-details">
              <h2 className="project-title">{project.title.toUpperCase()}</h2>
              <p className="project-descr" dangerouslySetInnerHTML={{ __html: project.description }} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};