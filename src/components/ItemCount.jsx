import { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {
  const [count, setCount] = useState(initial)

  const addOne = () => {
    if (count < stock) setCount (count+1)
  }

  const removeOne = () => {
    if (count > 0) setCount (count-1)
  }

  const handleAdd = () => {
    if (count > 0) onAdd(count)
  }

  return (
    <div className="itemCount flex__col flex--center">
      <div className="itemCount__quantity flex">
        <button onClick={removeOne} className="itemCount__quantity--button">-</button>
        <span className="itemCount__quantity--amount">{count}</span>
        <button onClick={addOne} className="itemCount__quantity--button">+</button>
      </div>
      <button onClick={handleAdd} className="itemCount__add-to-cart">Añadir al carrito</button>
    </div>
  )
}

export default ItemCount