import { useState, useEffect, useContext} from "react";
import { useParams, useNavigate } from "react-router-dom"
import instance from "../../utils/api";
import { CartContext } from "../../contexts/CartContext";
import { ADD_TO_CART } from "../../utils/actionTypes";

const SingleProduct = () => {
    const {cartState, cartDispatch} = useContext(CartContext);
    const {productId} = useParams();
    const navigate = useNavigate();
    const [productInfo, setProductInfo] = useState(undefined);
    const [amount, setAmount] = useState(1);

    const handleIncrement = () => {
        setAmount(prevState => prevState + 1);
    }

    const handleDecrement = () => {
        if (amount > 1) {
            setAmount(prevState => prevState - 1);
        }
    }

    const handleClick = (productInfo) => {
        const cartProduct = {
            ...productInfo,
            amount,
        }
        console.log(cartProduct);
        if (productInfo) {
            cartDispatch({
                type: ADD_TO_CART,
                payload: cartProduct
            })
        }
        navigate("/cart");
    }

    useEffect(() => {
        instance.get(`/products/${productId}`)
        .then(res => {
            setProductInfo(res.data)
        })
        .catch(error => console.error(`Error occured, ${error}`))
    }, []);


    return (
        <div className="single-product-page wrapper">
            {/* <button onClick={() => navigate(-1)} className="btn">Back to products</button> */}
            {productInfo ? (
                
            <div className="product-details">
                <div className="product-details-image">
                    <img src={productInfo.image} alt={productInfo.title} className="product-img"/>
                </div>
                <div className="product-description">
                    <h4>{productInfo.title}</h4>
                    <p>Rate: {productInfo.rating.rate}</p>
                    <p>$ {productInfo.price}</p>
                    <h5>{productInfo.category}</h5>
                    <p>{productInfo.description}</p>
                    <div className="product-amount">
                        <span className="btn btn-count" onClick={handleDecrement}>-</span>
                        <span className="count-amount">{amount}</span>
                        <span className="btn btn-count" onClick={handleIncrement}>+</span>
                    </div>
                    <button onClick={() => handleClick(productInfo)} className="btn">Add to cart</button>
                </div>
            </div>) : null}
        </div>
    )
}

export default SingleProduct