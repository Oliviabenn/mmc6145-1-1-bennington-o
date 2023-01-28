import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <div>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
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