import './card-components.css'
import Avatar from '../assets/avatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Info() {
    return (
        <div className='card__info__section'>
            <div className="card__img">
                <img src={Avatar} alt="avatar" />
            </div>
            <div className="card__info">
                <h2 className='info__name'>Laura Smith</h2>
                <p className='info__role'>Frontend Developer</p>
                <p className='info__weblink'>laurasmith.website</p>
                <div className="info__btns">
                    <button className="primary-btn email-btn">
                        <FontAwesomeIcon icon={faEnvelope} className='email__icon'/>
                        <p>Email</p>
                    </button>
                    <button className="primary-btn linkedin-btn">
                        <FontAwesomeIcon icon={faLinkedin} className='linkedin__icon'/>
                        <p>LinkedIn</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Info