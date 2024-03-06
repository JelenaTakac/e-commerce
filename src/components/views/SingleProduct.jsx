import { useState, useEffect, useContext} from "react";
import { useParams, useNavigate } from "react-router-dom"
import instance from "../../utils/api";
import { CartContext } from "../../contexts/CartContext";
import { ADD_TO_CART } from "../../utils/actionTypes";

const SingleProduct = () => {
    const {cartState, cartDispatch} = useContext(CartContext);
    // const {numItemsInCart} = cartState

    // ovdje hocu da pozovme funkciju tj. type: ADD_TO_CART i ond updejtuje stanje cartState sa proizovidima koji su dodati u korpu

    const {productId} = useParams();
    const navigate = useNavigate();

    const [productInfo, setProductInfo] = useState(undefined);
    const [amount, setAmount] = useState(1);
    // const {image, title, rating, price, category} = productInfo;

    const toggleAmount = (id, type) => {
        console.log(id, type);
        console.log(cartState);
        // cartDispatch({})
    }


    const handleClick = (productInfo) => {
        console.log(productInfo);
        if (productInfo) {
            cartDispatch({
                type: ADD_TO_CART,
                payload: {
                    productInfo,
                    amount
                }
            })
        }
    }

    useEffect(() => {
        instance.get(`/products/${productId}`)
        .then(res => {
            setProductInfo(res.data)
        })
        .catch(error => console.error(`Error occured, ${error}`))
    }, []);


    return (
        <>
            <button onClick={() => navigate(-1)}>Back to products</button>
            {productInfo ? (

            <div>
                <img src={productInfo.image} alt={productInfo.title} />
                <div>
                    <h4>{productInfo.title}</h4>
                    <p>Rate: {productInfo.rating.rate}</p>
                    <p>$ {productInfo.price}</p>
                    <h5>{productInfo.category}</h5>
                    <p>{productInfo.description}</p>
                </div>
            </div>) : null}
            <div>
                <span onClick={() => toggleAmount(productInfo.id ,"dec")}>-</span>
                <span>0</span>
                <span onClick={() => toggleAmount(productInfo.id ,"inc")}>+</span>
            </div>
            <button onClick={() => handleClick(productInfo)}>Add to cart</button>
        </>
    )
}

export default SingleProduct