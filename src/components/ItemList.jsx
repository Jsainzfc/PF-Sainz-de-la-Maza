import { useEffect, useState } from "react"
import Item from "./Item"

const ItemList = () => {

  const itemsDB = [
    {
      id: 'packGifs',
      title: 'Pack de 30 gifs para tu marca',
      price: 187,
      description: 'Pack de 30 gifs totalmente adaptados a tu branding y al formato de las distintas redes sociales en las que tenga presencia tu marca.',
      pictureUrl: 'https://a2colores.es/wp-content/uploads/2020/02/Cabecera-2020-imagen-de-marca-800x400-1.jpg'
    },
    {
      id: 'valoresMarca',
      title: 'Lista de +180 valores de marca',
      price: 14,
      description: 'Libro que incluye una lista de más de 180 valores de marca que te permitirá analizar y desarrollar tu marca con una mayor profundidad.',
      pictureUrl: 'https://a2colores.es/wp-content/uploads/2020/02/Cabecera-2020-imagen-de-marca-800x400-1.jpg'
    },
    {
      id: 'paletaPerfecta',
      title: 'Guía definitiva para crear tu paleta perfecta',
      price: 8,
      description: 'Libro para que puedas pensar y desarrollar, con sentido, la paleta de colores que más se adecúa a tu marca.',
      pictureUrl: 'https://a2colores.es/wp-content/uploads/2020/02/Cabecera-2020-imagen-de-marca-800x400-1.jpg'
    }
  ]

  const getItems = new Promise ((resolve, reject) => {
      setTimeout (() => {
        resolve(itemsDB)
        }, 2000);
      })

  
  const [products, setProducts] = useState([])

  const awaitItems = async () => {
    await getItems
      .then(response => setProducts(response))
      .catch(err => console.error(err))
  }

  useEffect(() => {
    awaitItems()
  }, [])

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