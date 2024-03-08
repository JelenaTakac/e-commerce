import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import shopCart from "../../assets/shop.jpg";
import instance from "../../utils/api";
import "./views.css"
import { ProductsListItem } from "../products";

const Home = () => {
    const [featuredProducts, setFeaturedProducts] = useState(undefined);
    const navigate = useNavigate();

    useEffect(() => {
        instance.get("/products")
        .then(res => {
            setFeaturedProducts(res.data);
            console.log(res.data);
        })
        .catch(error => console.error("Error occure", error))
    }, []);

    return (
        <>
            <div className="home-page wrapper">
                <div className="home-introduction">
                    <h1 className="title">Welcome to our store!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, omnis explicabo sit amet consectetur!</p>
                    <p>Facere quidem soluta ullam unde omnis laboriosam dolorum dicta totam quasi eaque perspiciatis explicabo vel quos repellendus, commodi, quaerat illo architecto non, corrupti consectetur! Earum quam, eum ullam sapiente asperiores at nisi voluptatum enim assumenda vitae molestias.</p>
                    <button onClick={() => navigate("/products")} className="btn home-introduction-btn">Shop now</button>
                </div>
                <div className="home-container-image">
                    <img src={shopCart} alt="Shop cart" className="home-image"/>
                </div>
            </div>
            {featuredProducts ? (
            <div className="home-feature wrapper">
                <h2 className="title">Featured Products</h2>
                <div className="home-product-container">
                    {featuredProducts.slice(0, 4).map(product => (
                        <ProductsListItem product={product} />
                    ))}
                </div>
            </div>
            ) : null}
        </>
    )
}

export default Home