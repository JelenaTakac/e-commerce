import { useNavigate } from "react-router-dom";
import shopCart from "../../assets/shop.jpg";
import "./views.css"

const Home = () => {
    const navigate = useNavigate();
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
        {/* <div className="home-feature">
            <h2 className="title">Featured Products</h2>
            <div>
                neke slike koje ce prezetovati najnovije proizvode
            </div>
            <button onClick={() => navigate("/products")} className="btn">Our products</button>
        </div> */}
    </>
  )
}

export default Home