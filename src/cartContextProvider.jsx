import { createContext, useState } from "react"

export const Context = createContext()

export const CartContextProvider = ({children}) => {
  const [cartList, setcartList] = useState([])
  
  // Método para añadir un producto y su cantidad asociada al carrito
  const addItem = (product, quantity) => {
    const productToAdd = {
      product: product,
      quantity: quantity
    }
    const newProducts = [...cartList, productToAdd]
    setcartList (newProducts)
  }

  // Método para eliminar un producto del carrito
  const removeItem = (id) => {
    const newProducts = []
    cartList.forEach(item => {
      if (item.product.id !== id) newProducts.push(item)
    })
    setcartList(newProducts)
  }

  // Método para vacíar el carrito
  const clear = () => {
    setcartList([])
  }

  const getTotal = () => {
    return cartList.reduce((acc, curr) => acc + curr.product.price * curr.quantity, 0)
  }

  const value = {cartList, addItem, removeItem, clear, getTotal}

  return <Context.Provider value={value}>{children}</Context.Provider>
}