import { useEffect, useState } from "react"
import Item from "./Item"
import itemsDB from "../productsDB"

const ItemList = ({category}) => {

  const [products, setProducts] = useState([])

  const getItems = new Promise ((resolve, reject) => {
      setTimeout (() => {
        resolve(itemsDB)
        }, 2000);
      })

  const awaitItems = async () => {
    await getItems
      .then(response => {
        if (category) {
          setProducts(response.filter(item => item.category === category))
        } else {
          setProducts(response)
        }
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    setProducts([])
    awaitItems()
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