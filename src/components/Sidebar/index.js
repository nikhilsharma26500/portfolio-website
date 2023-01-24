import './index.scss'
import LogoN from '../../assets/images/N-logo.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to='/'>
            <img src={LogoN} alt="logo"/>
            <img className='sub-logo' src={LogoSubtitle} alt="nikhil" />
        </Link>

        <nav>
            {/*
            -creating NavLink which is similar to <a> HTML tag but is built to work with React Router. 
            - the 'exact' prop is used to specify that a route should only match when the URL path is an exact match. 
            - FontAwesomeIcon imports icons for the navogation bar*/}

            <NavLink exact="true" activeclassname="acitve" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="acitve" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="acitve" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>

        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/nikhilsharma26500/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/nikhilsharma26500">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar;