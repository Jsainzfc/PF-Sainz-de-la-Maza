import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

  const [productId, setProductId] = useState()

  const {id} = useParams()

  useEffect (() => {
    setProductId(id)
  }, [id])

  return (
    <main>
      {productId 
        ? <ItemDetail productId={productId}/> 
        : <div id="loading"></div>}
    </main> 
  )
}

export default ItemDetailContainer