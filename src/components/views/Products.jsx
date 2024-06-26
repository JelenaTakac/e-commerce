import { useState, useEffect, useContext  } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from "../../utils/actionTypes";
import instance from "../../utils/api";
import Loading from "../loading/Loading";
import Error from "../error/Error";
import { ProductsList } from "../products";

const Products = () => {
    const {productState, productDispatch} = useContext(ProductContext);
    const {products, loading, error} = productState;
    const [categories, setCategories] = useState([]);
    const [categoryValue, setCategoryValue] = useState("all");
    const [priceFlow, setPriceFlow] = useState("ascending");

    const handleChangeCategory = (e) => {
        setCategoryValue(e.target.value);
    }

    const handleChangePriceFlow = (e) => {
        setPriceFlow(e.target.value);
    }

    useEffect(() => {
        productDispatch({type: FETCH_PRODUCTS_REQUEST});
        instance.get("/products/categories")
        .then(res => {
            console.log(res.data);
            setCategories(["all", ...res.data])
        })
        .catch(error => console.error("Error occured", error))
    }, [])


    useEffect(() => {
        productDispatch({type: FETCH_PRODUCTS_REQUEST});
        instance.get("/products")
        .then(res => {
            productDispatch({
                type: FETCH_PRODUCTS_SUCCESS,
                payload: {
                    data: res.data,
                    categoryValue, 
                    priceFlow,
                },
            })
            console.log(res.data);
        })
        .catch(error => {
            productDispatch({
                type: FETCH_PRODUCTS_FAILURE,
                payload: error.message,
            })
        })
            
    }, [categoryValue, priceFlow]);
    
    return (
        <div className="products-page wrapper">
            <h1 className="title products-page-title">Filter by:</h1>
            <div className="filter-products">
                <div className="filter">
                    <label>Filter by category:</label>
                    <select value={categoryValue} onChange={handleChangeCategory} className="select select-bordered w-full max-w-xs">
                        {categories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                            ))}
                    </select>
                </div>
                <div className="filter">
                    <label>Sort products by price:</label>
                    <select value={priceFlow} onChange={handleChangePriceFlow} className="select select-bordered w-full max-w-xs">
                        <option value="ascending">Ascending</option>
                        <option value="descending">Descending</option>
                    </select>
                </div>
            </div>
            {loading ? <Loading /> : error ? <Error error={error}/> : <ProductsList products={products}/>}
        </div>
    )
}

export default Products