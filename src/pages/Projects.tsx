import "./Projects.css";
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import CSCode from "../images/cs-code-logo.svg";
import BachelorThesis from "../images/icons/bachelor-thesis.svg";
import PhasmoGuide from "../images/icons/icon-ghost.svg";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  altText: string;
  externalLink?: string;
  internalLink?: string;
  workInProgress?: boolean;
}

export default function Projects() {

  const projects: Project[] = [
    {
      id: 1,
      title: 'Bachelorarbeit',
      description: 'Meine Bachelorarbeit über die automatisierte Generierung eines Benutzerhandbuchs mittels Cypress anhand des Content-Management-Systems Strapi.',
      image: BachelorThesis,
      altText: 'Bachelor Thesis',
      externalLink: 'https://github.com/ChrisSulz/StrapiManual'
    },
    {
      id: 2,
      title: 'Phasmophobia Guide',
      description: 'Eine Zusammenstellung von hilfreichen Informationen für das Spiel Phasmophobia als eigenständiger Guide.',
      image: PhasmoGuide,
      altText: 'Phasmophobia Guide',
      internalLink: '/PhasmoGuide',
      workInProgress: true
    }
  ]

  const renderProjectLink = (project: Project) => {
    const ProjectContent = (
      <>
        <img src={project.image} alt={project.altText} className="project-icon" />
        <div className="project-details">
          <h2 className="project-title">{project.title.toUpperCase()}</h2>
          {project.workInProgress && <p className="work-in-progress">- WORK IN PROGRESS -</p>}
          <p className="project-descr">{project.description}</p>
        </div>
      </>
    )

    if (project.externalLink) {
      return (
        <a key={project.id} href={project.externalLink} target="_blank" rel="noopener noreferrer" className="projects-entry">
          {ProjectContent}
        </a>
      );
    } else {
      return (
        <Link key={project.id} to={project.internalLink!} className="projects-entry">
          {ProjectContent}
        </Link>
      );
    }
  }

  return (
    <>
      <Helmet>
        <title>Projekte | CS-Code</title>
      </Helmet>
      <div className="projects-container">
        <h1>Meine Projekte</h1>
        <br />
        <p className="work-in-progress">- WORK IN PROGRESS -</p>
        {projects.map((project) => renderProjectLink(project))}
      </div>
    </>
  )
}