import { useParams } from "react-router-dom"

const ItemDetails = () => {

  const {itemId} = useParams()
  return (
    <div>ItemDetails {itemId}</div>
  )
}

export default ItemDetails