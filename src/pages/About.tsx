import "./About.css";
import { Helmet } from 'react-helmet';
import portrait from "../images/portrait.jpg";

export default function About() {

  const skills = ["C", "C++", "Java", "Python", "HTML", "CSS", "TypeScript", "React", "Grafikdesign"]

  return (
    <>
      <Helmet>
        <title>Über mich | CS-Code</title>
      </Helmet>
      <div className="about-container">
        <div className="about-content">
          <img
            src={portrait}
            alt="Christian Sulzinger"
            className="about-portrait"
          />
          <div className="about-text">
            <h1 className="about-title">Über mich</h1>
            <h2 className="about-name">Christian Sulzinger</h2>
            <p className="about-description">
              Informatik - Bachelor of Science (B.Sc.)
            </p>
            <div className="about-skills">
              {skills.map((skill) => (<span className="skill-tag">{skill}</span>))}
            </div>
            <p className="about-paragraph">
              Nach meiner erfolgreichen <span className="highlight">Ausbildung zum Einzelhandelskaufmann</span> und dem Nachholen des <span className="highlight">allgemeinen Abiturs</span> verfolgte ich mit Begeisterung mein <span className="highlight">Studium in den Computerwissenschaften</span>.
            </p>
            <p className="about-paragraph">
              Meine Leidenschaft gilt besonders der <span className="highlight">Webentwicklung</span>, bei der ich mein Wissen in <span className="highlight">praktischen Projekten</span> umsetze.
            </p>
            <p className="about-paragraph">
              Mein persönliches Ziel ist es, Websites zu gestalten, die nicht nur <span className="highlight">funktional</span> und <span className="highlight">benutzerfreundlich</span> sind, sondern auch durch ein <span className="highlight">ansprechendes Design</span> überzeugen.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}