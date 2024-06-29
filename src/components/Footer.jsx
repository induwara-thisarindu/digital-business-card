import './card-components.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faInstagram, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <footer>
            <div className="links">
                <button><FontAwesomeIcon icon={faTwitter} className="icon" /></button>
                <button><FontAwesomeIcon icon={faFacebook} className="icon" /></button>
                <button><FontAwesomeIcon icon={faInstagram} className="icon" /></button>
                <button><FontAwesomeIcon icon={faGithub} className="icon" /></button>
            </div>
        </footer>
    )
}

export default Footer