import Cart from './Cart'
import Brand from './Brand'
import NavMenu from './NavMenu'
import Hamburger from './Hamburger'

const NavBar = () => 
  <nav class="navBar">
    <Hamburger />
    <Brand />
    <NavMenu />
    <Cart />
  </nav>

  export default NavBar
