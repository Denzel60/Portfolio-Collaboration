import './Footer.css'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <div className="social-icons">
                <p><FaSquareFacebook /></p>
                <p><FaInstagram /></p>
                <p><FaTwitter /></p>
                <p><FaLinkedin /></p>
            </div>
            <p>Copyright @{currentYear} All Rights Reserved</p>
        </footer>

    )
}

export default Footer