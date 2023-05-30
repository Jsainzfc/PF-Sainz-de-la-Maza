import { useContext } from "react"
import { Context } from "../cartContextProvider"
import ItemCount from "./ItemCount"

const AddItemCount = ({product, initial, stock}) => {
  const {addItem} = useContext(Context)

  const onAdd = (count) => {
    addItem(product, count)
  }
  return <ItemCount stock={stock} initial={initial} onAdd={onAdd}/>
}

export default AddItemCount