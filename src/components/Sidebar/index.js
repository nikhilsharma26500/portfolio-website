import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faHome, faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => (
  <div className="nav-bar">   

    <nav>
      {/*
            -creating NavLink which is similar to <a> HTML tag but is built to work with React Router. 
            - the 'exact' prop is used to specify that a route should only match when the URL path is an exact match. 
            - FontAwesomeIcon imports icons for the navogation bar
      */}

      <NavLink exact="true" activeclassname="acitve" to="/">
        <FontAwesomeIcon icon={faHome} color="#b0b0b0" />
      </NavLink>
      <NavLink
        activeclassname="acitve"
        className="portfolio-link"
        to="/portfolio"
      >
        <FontAwesomeIcon icon={faSuitcase} color="#b0b0b0" />
      </NavLink>
      <NavLink
        activeclassname="acitve"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faPhone} color="#b0b0b0" />
      </NavLink>
    </nav>


    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:nikhilsharma26500@outlook.com"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#b0b0b0" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/nikhilsharma26500/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#b0b0b0" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/nikhilsharma26500"
        >
          <FontAwesomeIcon icon={faGithub} color="#b0b0b0" />
        </a>
      </li>
    </ul>
  </div>
);

export default Sidebar;
