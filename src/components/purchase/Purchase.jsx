import { useState } from "react";
import Swal from "sweetalert2";


const Purchase = ({cartTotal, onClearCart}) => {
    const [purchaseSuccess, setPurchaseSuccess] = useState(false);

    const handleSubmitPurchase = (e) => {
        e.preventDefault();
        setPurchaseSuccess(true);
        onClearCart();
        Swal.fire({
            icon: "success",
            title: "You have successfully purchased the products. Coming soon be delivered to your address.",
            showConfirmButton: false,
            timer: 3000, 
        });
    }
    
  return (
    <div>
        <form onSubmit={handleSubmitPurchase}> 
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
            <h4>TOTAL: ${cartTotal}</h4>
            <input type="submit" value="Send"/>
        </form>
    </div>
  )
}

export default Purchase