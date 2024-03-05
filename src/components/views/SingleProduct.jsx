import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"
import instance from "../../utils/api";

const SingleProduct = () => {
    const {productId} = useParams();
    const navigate = useNavigate();

    const [productInfo, setProductInfo] = useState(undefined);

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
                </div>
            ) : null}
            {/* U ovom dijelu se sa ove stranice moze dodavati u korpu i updatovati stanje korpe! */}
            <div>
                <span>-</span>
                <span>0</span>
                <span>+</span>
            </div>
            <button>Add to cart</button>
        </>
    )
}

export default SingleProduct