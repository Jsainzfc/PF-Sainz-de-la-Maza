import Cart from './CartWidget'
import Brand from './Brand'
import NavMenu from './NavMenu'
import Hamburger from './Hamburger'

const NavBar = () => 
  <nav className="navBar">
    <Hamburger />
    <Brand />
    <NavMenu />
    <Cart />
  </nav>

  export default NavBar
