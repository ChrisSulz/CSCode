import './Navbar.css';

export default function Navbar() {
    return (
        <nav>
            <div className="nav-entry">
                <p onClick={() => { window.location.href = '/'; }}>HOME</p>
            </div>
            <div className='separator'></div>
            <div className="nav-entry">
                <p onClick={() => { window.location.href = '/projects'; }}>PROJEKTE</p>
            </div>
            <div className='separator'></div>
            <div className="nav-entry">
                <p onClick={() => { window.location.href = '/about'; }}>ÜBER MICH</p>
            </div>
        </nav>
    );
}