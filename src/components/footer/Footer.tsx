import { Link } from 'react-router-dom';
import './Footer.css';


export default function Footer() {
  return (
    <footer>
      <Link className="bold-link" to='/impressum'>
        <p>Impressum</p>
      </Link>
    </footer>
  );
}