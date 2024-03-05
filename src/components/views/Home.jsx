import { useNavigate } from "react-router-dom";
import shopCart from "../../assets/shop.jpg";
import "./views.css"

const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div>
            <h1>Welcome to US!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, omnis explicabo? Laborum tempore deserunt harum non, repellat vitae optio voluptatibus velit quo obcaecati labore quibusdam. Facere quidem soluta ullam unde omnis laboriosam dolorum dicta totam quasi eaque perspiciatis explicabo vel quos repellendus, commodi, quaerat illo architecto non, corrupti consectetur! Earum quam, eum ullam sapiente obcaecati error neque, totam ea dicta vero quia debitis sit asperiores at nisi voluptatum enim assumenda vitae molestias. Porro labore odio ipsa adipisci iusto perspiciatis, eveniet earum ullam, provident, ut assumenda quibusdam. Quis voluptatem expedita minima molestiae amet ad nesciunt esse architecto tempore commodi? Odio, quos.</p>
            <button onClick={() => navigate("/products")}>Shop now</button>
        </div>
        <div>
            <img src={shopCart} alt="Shop cart" className="shopCart-home"/>
        </div>
        
        <div>
            <h2>Featured Products</h2>
            <div>
                neke slike koje ce prezetovati najnovije proizvode
            </div>
            <button onClick={() => navigate("/products")}>OUR PRODUCTS</button>
        </div>
    </div>
  )
}

export default Home