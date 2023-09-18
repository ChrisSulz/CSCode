import "./Contact.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

export default function Contact() {
  return (
    <>
      <Header/>
      <Navbar/>
      <main>
        <div className="contakt-container">
          <h1>Kontakt</h1>
          <br />
          <p>chris.sulzinger@gmail.com</p>
        </div>
      </main>
      <Footer/>
    </>
  );
}