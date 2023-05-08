import ItemCount from "./ItemCount"

const ItemDetail = ({product}) => {
  console.log(product)
  const onAdd = (count) => {
    console.log(`Added ${count}`)
  }
  return (
    <div className='product-detail'>
      <img className='product-detail__img' alt={`Imagen de producto de ${product.title}`} src={product.pictureUrl} />
      <div className='product-detail__info flex__col'>
        <h3 className='product-detail__title'>{product.title}</h3>
        <p className='product-detail__description' >{product.description}</p>
        <p className='product-detail__price' >{product.price}€</p>
        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
      </div>
    </div>
  )
}

export default ItemDetail