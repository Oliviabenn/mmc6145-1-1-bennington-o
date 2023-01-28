import { Link } from "react-router-dom";


const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact</h1>
            <div>
                <h2>Let's Get In Touch</h2>
                <p>If you'd like to get in touch with me, you can always reach me by email.</p>
                <div>
                    <p></p>
                    <ul>
                        <li><Link to="#">Github</Link></li>
                        <li><Link to="#">LinkedIn</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Contact;