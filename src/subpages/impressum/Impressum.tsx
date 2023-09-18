import "./Impressum.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

export default function Impressum() {
  return (
    <>
      <Header/>
      <Navbar/>
      <main>
        <div className="impressum-container">
          <h1>Impressum</h1>
          <br />
          <p>Christian Sulzinger</p>
          <p>Altöttingerstraße 9</p>
          <p>84570 Polling</p>
          <br />
          <a href="contact" className="bold-link">Kontakt</a>
        </div>
      </main>
      <Footer/>
    </>
  );
}