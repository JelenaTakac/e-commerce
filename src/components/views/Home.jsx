import { useNavigate } from "react-router-dom";
import shopCart from "../../assets/shop.jpg";
import "./views.css"
import { useState, useEffect } from "react";
import instance from "../../utils/api";

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
        <div className="home-page">
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
        {/* {featuredProducts ? (
            <div className="home-feature">
            <h2 className="title">Featured Products</h2>
            <div>
                {featuredProducts.slice(0, 3).map(product => (
                    <div key={product.id}>
                        <img src={product.image} alt={product.title} />
                    </div>
                ))}
            </div>
            <button onClick={() => navigate("/products")} className="btn">Our products</button>
        </div>
        ) : null} */}
        </>
    )
}

export default Home