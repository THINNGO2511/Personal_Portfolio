import './index.scss'
import { useState } from 'react'
// import LogoS from '../../assets/images/logo-s.png'
import LogoS from '../../assets/images/16th.png'
// import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  // faYoutube,
  // faSkype,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <Link 
        className="logo"
        to="/Personal_Portfolio"
        onClick={() => setShowNav(false)}>
        <img src={LogoS} alt="Logo" />
        {/* <img className="sub-logo" src={LogoSubtitle} alt="slobodan" /> */}
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink 
          exact
          to="/Personal_Portfolio" end
          activeClassname="active"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink 
          
          activeClassname="active"
          className="about-link"
          to="/Personal_Portfolio/about"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          
          activeClassname="active"
          className="contact-link"
          to="/Personal_Portfolio/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
      </nav>

      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/ngothinh/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/THINNGO2511"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div>
  )
}

export default Sidebar
