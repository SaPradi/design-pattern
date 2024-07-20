import { Product } from "../models/product"

interface CardProductProps {
    product:Product

}

const CardProduct:React.FC<CardProductProps> = ({product}) => {  
    return (
    <div >
      { product.id}
      { product.name}
    </div>
  )
}

export default CardProduct
