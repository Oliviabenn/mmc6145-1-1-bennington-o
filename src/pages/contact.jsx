import { Link } from "react-router-dom";


const Contact = () => {
    return (
        <div className="page">
            <h1>Contact</h1>
            <div>
                <h2>Let's Get In Touch</h2>
                <p>If you'd like to get in touch with me, you can reach me by email at: <u>obennington97@ufl.edu</u>.</p>
                <div className="social">
                    <p>Social links:</p>
                    <ul>
                        <li><Link to="https://github.com/Oliviabenn?tab=repositories">Github</Link></li>
                        <li><Link to="https://www.linkedin.com/in/olivia-bennington-857304202">LinkedIn</Link></li>
                        <li><Link to="https://ob.style/">Personal Website</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Contact;