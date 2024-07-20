import './Navbar.css';

export default function Navbar() {
    return (
        <nav>
            <div className="nav-entry">
                <p onClick={() => { window.location.href = '/'; }}>HOME</p>
            </div>
            <div className='separator'></div>
            <div className="nav-entry">
                <p onClick={() => { window.location.href = '/projects'; }}>MY PROJECTS</p>
            </div>
            <div className='separator'></div>
            <div className="nav-entry">
                <p onClick={() => { window.location.href = '/about'; }}>ABOUT ME</p>
            </div>
        </nav>
    );
}