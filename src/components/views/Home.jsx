import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h1>Welcome to US!</h1>
        <h2>Glavni proizvod</h2>
        <button onClick={() => navigate("/products")}>OUR PRODUCTS</button>
    </div>
  )
}

export default Home