import { useEffect, useState } from "react";
import AddItemCount from "./AddItemCount";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetail = ({productId}) => {

  const [product, setProduct] = useState({})

  useEffect (() => {
    const db = getFirestore();
    const categoriesCollection = doc(db, "items", productId)
    getDoc(categoriesCollection)
    .then((snapshot) => {
      console.log(snapshot.exists())
      if (snapshot.exists()) {
        setProduct({id: snapshot.id, ...snapshot.data()})
      }
    })
    .catch (err => console.error(err))
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