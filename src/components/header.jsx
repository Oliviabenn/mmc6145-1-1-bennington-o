import { Link, useLocation } from 'react-router-dom'

export default function Header() {
const location= useLocation();

    return (
        <header>
            <nav>
                <Link to="/" className={location.pathname === "/" ? 'active' : ''}>Home</Link>
                <div>
                    <Link to="/about" className={location.pathname === "/about" ? 'active' : ''}>About</Link>
                    <Link to="/contact" className={location.pathname === "/contact" ? 'active' : ''}>Contact</Link>
                </div>
            </nav>
               <div className="info">
                    <h2>OB Portfolio</h2>
                    <p>Web Developer Extraordinaire</p>
                    <p><button>About Me</button></p>
               </div>
        </header> 
    )
}