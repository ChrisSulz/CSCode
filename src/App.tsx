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
          <p>
            Willkommen auf meiner Website! Wie Sie vielleicht bemerkt haben, ist
            sie <b>noch nicht vollständig</b> eingerichtet. Aber keine Sorge, ich
            arbeite hart daran, sie so schnell wie möglich fertigzustellen.
          </p>
          <br />
          <p>
            In der Webdesign-Welt ist es üblich, <b>Fülltexte</b> zu verwenden, um
            die Platzhaltertexte zu ersetzen, bis der endgültige Inhalt eingefügt
            wird. Der am häufigsten verwendete Fülltext ist "Lorem ipsum", der
            seit dem 16. Jahrhundert als <b>Platzhaltertext</b> verwendet wird.
          </p>
          <br />
          <p>
            Aber ich wollte kreativer sein und etwas mehr Persönlichkeit in meine
            Website einbringen. Deshalb habe ich beschlossen, einen <b>eigenen 
            Fülltext</b> zu schreiben. Ich wollte, dass er informativ,
            interessant und unterhaltsam ist - eine Mischung aus beidem.
          </p>
          <br />
          <p>
            Und so begann ich, die Geschichte von <b>Lückentexten</b> zu
            erforschen und stellte fest, dass sie tatsächlich viel weiter
            zurückreicht, als ich dachte. Schon in der Antike wurden Texte mit
            Lücken als Lernmethode verwendet, um das Gedächtnis zu verbessern. Im
            Mittelalter wurden <b>Lückentexte</b> häufig in religiösen Schriften
            verwendet.
          </p>
          <br />
          <p>
            Heute werden <b>Lückentexte</b> in einer Vielzahl von Anwendungen
            eingesetzt, von Sprachlernmaterialien bis hin zu psychologischen
            Tests. Ich fand all diese Informationen so faszinierend, dass ich
            beschloss, sie in meinen eigenen <b>Fülltext</b> zu integrieren.
          </p>
          <br />
          <p>
            Ich hoffe, dass Sie meinen kreativen Ansatz zu schätzen wissen und
            dass Sie bald in den Genuss meiner <b>vervollständigten 
            Website</b> kommen können!
          </p>
        </div>
      </main>
      <Footer/>
    </>
  );
}