import CartIcon from '../../assets/cart.png'

const Cart = () => 
  <a class="flex navBar__cart" href="/">
    <img src={CartIcon} alt="Carrito" />
    <p>0</p>
  </a>


export default Cart