import "./Impressum.css";
import { Helmet } from 'react-helmet';

import iconContact from "../images/icons/icon-contact.svg"

export default function Impressum() {
  return (
    <>
      <Helmet>
        <title>Impressum | CS-Code</title>
      </Helmet>
      <div className="impressum-container">
        <h1>Impressum</h1>
        <br />
        <p>
          Christian Sulzinger <br />
          Ritter-von-Schoch-Straße 8 <br />
          84036 Landshut <br />
          <br />
          <img src={iconContact} alt="icon-contact" className="icon-small" /> c.sulzinger@gmx.de
        </p>
      </div>
    </>
  );
}