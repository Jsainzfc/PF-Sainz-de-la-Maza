import { useContext, useState } from "react"
import { Context } from "../cartContextProvider"
import { NavLink } from "react-router-dom"
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";

const Checkout = () => {
  const {cartList, getTotal} = useContext(Context)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const [orderId, setOrderId] = useState('')

  const sendOrder = (order) => {
    console.log(order)
    const db = getFirestore()
    const ordersCollection = collection(db, "orders")
    addDoc(ordersCollection, order)
      .then (({id}) => setOrderId(id))
      .catch(err => alert('Ha habido algún error procesando su solicitud'))
    console.log(orderId)
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    const items = cartList.map(item => {
      return {
        id: item.product.id,
        quantity: item.quantity
      }
    })
    const order = {
      buyer: {
        name: name,
        email: email,
        phone: phone,
      },
      total: getTotal(),
      items: items,
      date: serverTimestamp()
    }
    console.log(order)
    await sendOrder(order)
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value)
  }

  return (
    <main className="container">
      {orderId
        ? <>
            <h3>Gracias por su compra. Su identificador es: {orderId}</h3>
          </>
        : <>
            <h2 className="tienda__greeting">Finalizar la compra</h2>
        {cartList.length === 0 
          ? <>
              <p className='empty-cart'>El carrito está vacío</p>
              <NavLink to='/' className='button cart-back'>Volver a la tienda</NavLink>
            </>
          :
          <form className="checkout container" onSubmit={handleSubmit}>
            <div className="flex flex__col checkout__data">
              <input type="text" value={name} onChange={handleNameChange} placeholder="Nombre" required />
              <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" required />
              <input type="tel" value={phone} onChange={handlePhoneChange} placeholder="Teléfono" required />
              <button className="button">Comprar</button>
            </div>
            <ul className="flex flex__col checkout__summary">
              {cartList.map(item => 
                <li className="checkout__item" key={item.product.id}>
                  <div className='flex flex__col checkout__item--details'>
                    <p className='checkout__item--title'>{item.product.title}</p>
                    <p className='checkout__item--price'>{`${item.product.price} €`}</p>
                    <div className='flex cart-details__count'>
                      <p className='item-count__quantity'>Cantidad: <span className='cart-quantity'>{item.quantity}</span></p>
                    </div>
                  </div> 
                  <img className='checkout__item--picture' alt={`Imagen de producto de ${item.product.title}`} src={item.product.pictureUrl} />
                </li>
              )}
            </ul>
          </form>
        }     
          </> 
        }
    </main>
  )
}

export default Checkout