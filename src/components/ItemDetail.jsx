import { useEffect, useState } from "react";
import itemsDB from "../productsDB";
import AddItemCount from "./AddItemCount";

const ItemDetail = ({productId}) => {

  const [product, setProduct] = useState({})

  const getItem = new Promise ((resolve, reject) => {
    setTimeout (() => {
      resolve(itemsDB)
      }, 2000);
    })

  const awaitItem = async () => {
    await getItem
      .then(response => setProduct(response.find (item => item.id === productId)))
      .catch(err => console.error(err))
  }

  useEffect(() => {
    setProduct()
    awaitItem()
  }, [productId])

  if (product === undefined) {
    return (
      <div className='item-detail container'>
        <div id="loading"></div>
      </div>
    )
  } else {
    return (
      <div className='item-detail container'>
        <div className='product-detail'>
          <img className='product-detail__img' alt={`Imagen de producto de ${product.title}`} src={product.pictureUrl} />
          <div className='product-detail__info flex__col'>
            <h3 className='product-detail__title'>{product.title}</h3>
            <p className='product-detail__description' >{product.description}</p>
            <p className='product-detail__price' >{product.price}€</p>
            <AddItemCount product={product} stock={5} initial={1}/>
          </div>
        </div>
      </div>
    )}
}

export default ItemDetail