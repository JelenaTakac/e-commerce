import ProductsListItem from "./ProductsListItem";
import "./products.css"

const ProductsList = ({products}) => {
  return (
    <>
        {/* Omoguciti filtriranje po kategorijama i sortiranje po ceni -> asc or desc */}
        <div className="products-container">
            {products.map(product => <ProductsListItem key={product.id} product={product}/>)}
        </div>
    </>
  )
}

export default ProductsList