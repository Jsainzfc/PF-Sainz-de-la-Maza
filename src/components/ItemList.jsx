import { useEffect, useState } from "react"
import Item from "./Item"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

const ItemList = ({category}) => {

  const [products, setProducts] = useState([])

  useEffect (() => {
    const db = getFirestore();
    let q
    if (category) {
      q = query(
        collection(db, "items"),
        where("category", "==", category)
      )
    } else {
      q = query(
        collection(db, "items")
      )
    }
    getDocs(q)
    .then((snapshot) => {
      setProducts(snapshot.docs.map(item => ({id: item.id, ...item.data()})))
    })
    .catch (err => console.error(err))
  }, [category])

  if (products.length === 0) {
    return <div id="loading"></div>
  } else {
    return (
      <div className='products container'>
        {
        products.length===0 
          ? <div id="loading"></div> 
          : products.map(product => <Item key={product.id} product={product}/> )
        }
      </div>
    )}
  }

export default ItemList