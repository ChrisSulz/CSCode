import "./About.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import portrait from "../../images/portrait.jpg";

export default function About() {
  return (
    <>
      <Header/>
      <Navbar/>
      <main>
      <div className="about-me-container">
        <img
          src={portrait}
          alt="about-me-portrait"
          className="about-me-portrait"
        />
        <div className="about-me-text">
          <h1>Über mich</h1>
          <p>
            Mein Name ist <b>Christian Sulzinger</b> und ich studiere momentan <b>Informatik</b> an der Hochschule für angewandte Wissenschaften in <b>Landshut</b>. 
            Nach meiner erfolgreichen <b>Ausbildung zum Einzelhandelskaufmann</b> habe ich mich dazu
            entschieden, mein <b>allgemeines Abitur</b> an einer
            Berufsoberschule nachzuholen und meine Leidenschaft für die <b>Computerwissenschaften</b> weiter zu vertiefen. Seitdem verfolge
            ich mit Begeisterung mein <b>Studium</b> in diesem spannenden
            Bereich und setze mein erworbenes Wissen in <b>praktischen Projekten</b> um.
          </p>
          <br />
          <p>
            Für mich ist die <b>Webentwicklung</b> derzeit ein ganz besonderes
            Interessengebiet. Ich arbeite leidenschaftlich gerne mit <b>HTML</b>, <b>CSS</b> und <b>JavaScript</b> und entwerfe auch mit
            viel Freude <b>Grafiken</b>, <b>Symbole</b> und <b>Logos</b>. Mein
            Ziel ist es, eine Website zu gestalten, die nicht nur <b>funktional</b> und <b>benutzerfreundlich</b> ist, sondern auch
            durch ein <b>ansprechendes Design</b> überzeugt. Gerne können Sie
            sich von meinem bisherigen Können auf <b>meiner Website</b> überzeugen.
          </p>
          <br />
        </div>
      </div>
    </main>
    <Footer/>
    </>
  );
}