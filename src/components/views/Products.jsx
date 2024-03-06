import { useEffect, useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from "../../utils/actionTypes";
import instance from "../../utils/api";
import Loading from "../loading/Loading";
import Error from "../error/Error";
import { ProductsList } from "../products";


const Products = () => {
    const {productState, productDispatch} = useContext(ProductContext);
    const {products, loading, error} = productState;

    useEffect(() => {
        productDispatch({type: FETCH_PRODUCTS_REQUEST});
        instance.get("/products")
        .then(res => {
            productDispatch({
                type: FETCH_PRODUCTS_SUCCESS,
                payload: res.data,
            })
            console.log(res.data);
        })
        .catch(error => {
            productDispatch({
                type: FETCH_PRODUCTS_FAILURE,
                payload: error.message,
            })
        })
            
    }, []);
    
    return (
        <div className="products-page">
            <h1>Filter by:</h1>
            <label>Filter by category:</label>
            <select>
                <option value="electronics">Electronics</option>
                <option value="jewelery">Jewelery</option>
                <option value="men's clothing">Men's clothing</option>
                <option value="women's clothing">Women's clothing</option>
            </select>
            <label>Sort products by price:</label>
            <select>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
            </select>
            {loading ? <Loading /> : error ? <Error error={error}/> : <ProductsList products={products}/>}
        </div>
    )
}

export default Products