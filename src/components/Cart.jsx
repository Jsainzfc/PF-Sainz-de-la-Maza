import { useContext } from 'react'
import TrashIcon from '../assets/bin.png'
import { Context } from '../cartContextProvider'
import { NavLink } from 'react-router-dom'

const Cart = () => {

  const {cartList, removeItem, getTotal, clear} = useContext(Context)

  const handleRemoveItem = (id) => {
    const handler = () => {
      removeItem(id)
    }
    return handler
  }

  const handleEmptyCart = () => {
    clear()
  }

  return (
    <main className="container flex flex__col cart-page">
      <h2 className="tienda__greeting">Carrito</h2>
      {cartList.length === 0 
        ? <>
            <p className='empty-cart'>El carrito está vacío</p>
            <NavLink to='/' className='button cart-back'>Volver a la tienda</NavLink>
          </>
        : <div className="flex flex__col cart-page__content">
            <ul className='flex flex__col cart-content'>
              {cartList.map(item => {
                return (
                  <li className='cart-item' key={item.product.id}>
                    <div className='flex flex__col cart-item__details'>
                      <p className='cart-details__title'>{item.product.title}</p>
                      <p className='cart-details__price'>{`${item.product.price} €`}</p>
                      <div className='flex cart-details__count'>
                        <p className='item-count__quantity'>Cantidad: <span className='cart-quantity'>{item.quantity}</span></p>
                        <img onClick={handleRemoveItem(item.product.id)} className='item-count__trash' src={TrashIcon} alt='Eliminar del carrito' />
                      </div>
                    </div> 
                    <img className='cart-item__picture' alt={`Imagen de producto de ${item.product.title}`} src={item.product.pictureUrl} />
                  </li>
                )})}
              </ul>
              <p className='cart-total'>Total: {getTotal()}€</p>
              <NavLink className="button" to="/checkout">Terminar la compra</NavLink>
              <button onClick={handleEmptyCart} className='emptyCart button'>Vacíar el carrito</button>
            </div>}
    </main>
  )
}

export default Cart