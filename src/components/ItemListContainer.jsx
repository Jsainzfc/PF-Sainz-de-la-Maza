import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { useEffect, useState } from 'react'

const ItemListContainer = ({greeting}) => {

  const [category, setCategory] = useState('')

  const {id} = useParams()

  useEffect (() => {
    setCategory(id)
  }, [id])
  
  return (
    <main>
      <h2 className="tienda__greeting">{category ? `${greeting} ${category}` : greeting}</h2>
      <ItemList category={category}/>
    </main>
  )
}

export default ItemListContainer