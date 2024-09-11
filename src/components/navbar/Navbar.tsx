import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <nav>
            <Link className="nav-entry" to='/'>
                <p>HOME</p>
            </Link>
            <div className='separator'></div>
            <Link className="nav-entry" to='/projects'>
                <p>PROJEKTE</p>
            </Link>
            <div className='separator'></div>
            <Link className="nav-entry" to='/about'>
                <p>ÜBER MICH</p>
            </Link>
        </nav>
    );
}
