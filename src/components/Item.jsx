import ItemCount from "./ItemCount"

const Item = ({product}) => {
  const onAdd = (count) => {
    console.log(`Added ${count}`)
  }
  return (
    <div className='product flex__col'>
      <img className='product__img' alt={`Imagen de producto de ${product.title}`} src={product.pictureUrl} />
      <h3 className='product__title' >{product.title}</h3>
      <p className='product__description' >{product.description}</p>
      <p className='product__price' >{product.price}€</p>
      <ItemCount stock={5} initial={1} onAdd={onAdd}/>
    </div>
  )
}

export default Item