import Swal from "sweetalert2";
import "./purchase.css"

const Purchase = ({onClearCart}) => {

    const handleSubmitPurchase = (e) => {
        e.preventDefault();
        onClearCart();
        Swal.fire({
            icon: "success",
            title: "You have successfully purchased the products. Coming soon be delivered to your address.",
            showConfirmButton: false,
            timer: 3000, 
        });
    }
    
  return (
    <div className="wrapper purchase">
        <form onSubmit={handleSubmitPurchase} className="form-purchase"> 
            <div>
                <label>First Name: </label>
                <input type="text" />
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" />
            </div>
            <div>
                <label>Address: </label>
                <input type="text" />
            </div>
            <div>
                <label>City: </label>
                <input type="text" />
            </div>
            <div>
                <label>Postal Code: </label>
                <input type="text" />
            </div>
            <input type="submit" value="Buy" className="btn buy-btn"/>
        </form>
    </div>
  )
}

export default Purchase