import Cart from './CartWidget'
import Instagram from '../assets/instagram.png'
import Youtube from '../assets/youtube.png'
import Linkedin from '../assets/linkedin.png'
import Logo from '../assets/logo.png'

const NavBar = () => 
  <nav className="navBar">
    <div className="hamburger">
      <span></span>
    </div>
    <a href="/index.html">
      <img className="navBar__logo" src={Logo} alt="logo" />
    </a>
    <div className="flex__col flex--center navBar__menu">
      <ul className="flex__col flex--center center-text navBar__navigation">
        <li><a href="#">Servicios Digitales</a></li>
        <li><a href="#">Plantillas</a></li>
        <li><a href="#">Freebies</a></li>
      </ul>

      <ul className="flex--center navBar__ssnn">
        <li><a href="https://www.instagram.com/yellowcactustudio"><img src={Instagram} alt="instagram" /></a>
        </li>
        <li><a href="https://www.youtube.com/channel/UCVSJtKXJRQF9KXcyZTNyoKA"><img src={Youtube}
              alt="youtube" /></a></li>
        <li><a href="https://www.linkedin.com/in/jorge-sainz-de-la-maza-b360b4a5/"><img src={Linkedin}
              alt="linkedin" /></a></li>
      </ul>

      <a className="navBar__button button" href="./src/contacto.html">Contactar</a>
    </div>
    <Cart />
  </nav>

  export default NavBar
