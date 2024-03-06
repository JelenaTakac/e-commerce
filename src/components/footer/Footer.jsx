import { Link } from "react-router-dom"
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer">
        <p className="copyrights"> © 2024 MyShopStore by Jelena</p>
        <div className="footer-items">
            <Link to={"/privacy-policy"} className="footer-item">Privacy Policy</Link>
            <Link to={"/terms-of-service"} className="footer-item">Terms Of Servise</Link>
            <Link to={"/contact-us"} className="footer-item">Contact Us</Link>
        </div>
    </div>
  )
}

export default Footer