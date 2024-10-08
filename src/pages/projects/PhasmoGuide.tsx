import "./PhasmoGuide.css";
import { Helmet } from 'react-helmet';

export default function PhasmoGuide() {
  return (
    <>
      <Helmet>
        <title>PhasmoGuide | CS-Code</title>
      </Helmet>
      <div className="PhasmoGuide-container">
        <h1>Phasmophobia Guide</h1>
        <br />
        <p className="work-in-progress">
          - WORK IN PROGRESS -
        </p>
      </div>
    </>
  );
}