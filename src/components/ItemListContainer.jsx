import ItemCount from './ItemCount'

const ItemListContainer = ({greeting}) => {
  const onAdd = (count) => {
    console.log(`Added ${count}`)
  }
  return (
    <main>
      <h2 className="tienda__greeting">{greeting}</h2>
      <ItemCount stock={5} initial={1} onAdd={onAdd}/>
    </main>
  )
}

export default ItemListContainer