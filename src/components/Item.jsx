import { NavLink } from "react-router-dom"
import AddItemCount from "./AddItemCount"

const Item = ({product}) => {

  return (
    <div className='product flex__col'>
      <NavLink to={`/item/${product.id}`}>
        <img className='product__img' alt={`Imagen de producto de ${product.title}`} src={product.pictureUrl} />
        <h3 className='product__title' >{product.title}</h3>
        <p className='product__description' >{product.description}</p>
        <p className='product__price' >{product.price}€</p>
      </NavLink>
      <AddItemCount product={product} stock={5} initial={1} />
    </div>
  )
}

export default Item