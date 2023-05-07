import ItemList from './ItemList'

const ItemListContainer = ({greeting}) => {

  return (
    <main>
      <h2 className="tienda__greeting">{greeting}</h2>
      <ItemList />
    </main>
  )
}

export default ItemListContainer