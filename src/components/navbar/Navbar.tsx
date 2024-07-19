import './Navbar.css';

export default function Navbar() {
    return (
        <nav>
            <div className="nav-button">
                <p onClick={() => { window.location.href = '/'; }}>HOME</p>
            </div>
            <div className='separator'></div>
            <div className="nav-button">
                <p onClick={() => { window.location.href = '/'; }}>MY PROJECTS (tbd)</p>
            </div>
            <div className='separator'></div>
            <div className="nav-button">
                <p onClick={() => { window.location.href = '/about'; }}>ABOUT ME</p>
            </div>
        </nav>
    );
}