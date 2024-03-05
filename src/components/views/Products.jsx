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
        <div>
            <h1>Products:</h1>
            {loading ? <Loading /> : error ? <Error error={error}/> : <ProductsList products={products}/>}
        </div>
    )
}

export default Products