import { Link } from "react-router-dom";

const ProductsListItem = ({product}) => {
  return (
    <Link to={`/products/${product.id}`}>
        <div className="product">
            <img src={product.image} alt={product.title} className="product-image"/>
            <h4>{product.title}</h4>
            <h4>{product.category}</h4>
            <h4>{product.price}</h4>
        </div>
    </Link>
  )
}

export default ProductsListItem;