import "./Impressum.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

import iconContact from "../../images/icons/icon-contact.svg"

export default function Impressum() {
  return (
    <>
      <Header/>
      <Navbar/>
      <main>
        <div className="impressum-container">
          <h1>Impressum</h1>
          <br />
          <p>
            Christian Sulzinger <br />
            Altöttingerstraße 9 <br />
            84570 Polling <br />
            <br />
            <img src={iconContact} alt="icon-contact" className="icon-small"/> chris.sulzinger@gmail.com
          </p>
        </div>
      </main>
      <Footer/>
    </>
  );
}