import { useContext } from 'react'
import CartIcon from '../assets/cart.png'
import { Context } from '../cartContextProvider'
import { NavLink } from 'react-router-dom'

const CartWidget = () => {
  const {cartList} = useContext(Context)
  return <>
    {cartList.length === 0 
      ? null 
      : <NavLink className="flex navBar__cart" to="/cart">
        <img src={CartIcon} alt="Carrito" />
        <p>{cartList.length}</p>
      </NavLink>}
  </>
}


export default CartWidget