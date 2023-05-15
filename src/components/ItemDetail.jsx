import { useEffect, useState } from "react";
import ItemCount from "./ItemCount"
import itemsDB from "../productsDB";

const ItemDetail = ({productId}) => {
  console.log(productId)

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

  const onAdd = (count) => {
    console.log(`Added ${count}`)
  }

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
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
          </div>
        </div>
      </div>
    )}
}

export default ItemDetail