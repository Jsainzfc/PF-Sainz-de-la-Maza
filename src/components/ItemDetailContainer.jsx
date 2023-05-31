import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

  const [productId, setProductId] = useState()

  const {id} = useParams()

  useEffect (() => {
    setProductId(id)
  }, [id])
  console.log(productId)

  return <ItemDetail productId={productId}/>
}

export default ItemDetailContainer