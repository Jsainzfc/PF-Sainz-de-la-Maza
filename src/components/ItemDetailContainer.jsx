import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

  const item = {
    id: 'packGifs',
    title: 'Pack de 30 gifs para tu marca',
    price: 187,
    description: 'Pack de 30 gifs totalmente adaptados a tu branding y al formato de las distintas redes sociales en las que tenga presencia tu marca.',
    pictureUrl: 'https://a2colores.es/wp-content/uploads/2020/02/Cabecera-2020-imagen-de-marca-800x400-1.jpg'
  }

  const [product, setProduct] = useState()

  const getItem = new Promise ((resolve, reject) => {
    setTimeout (() => {
      resolve(item)
      }, 2000);
    })

  const awaitItem = async () => {
    await getItem
      .then(response => setProduct(response))
      .catch(err => console.error(err))
  }

  useEffect(() => {
    awaitItem()
  }, [])

  if (product === undefined) {
    return <div id="loading"></div>
  } else {
    return (
      <div className='item-detail container'>
        <ItemDetail product={product}/>
      </div>
    )}
}

export default ItemDetailContainer