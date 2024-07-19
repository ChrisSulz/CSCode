import "./Impressum.css";
import { Helmet } from 'react-helmet';

import iconContact from "../images/icons/icon-contact.svg"

export default function Impressum() {
  return (
    <>
      <Helmet>
      <title>Impressum | CS-Code</title>
      </Helmet>
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
    </>
  );
}