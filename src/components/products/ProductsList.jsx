import ProductsListItem from "./ProductsListItem";
import "./products.css"

const ProductsList = ({products}) => {
  return (
    <>
        <div className="products-container">
            {products.map(product => <ProductsListItem key={product.id} product={product}/>)}
        </div>
    </>
  )
}

export default ProductsList