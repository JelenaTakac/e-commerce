import { useState } from "react";


const Purchase = ({cartTotal, onClose, onClearCart}) => {
    const [purchaseSuccess, setPurchaseSuccess] = useState(false);

    const handleSubmitPurchase = (e) => {
        e.preventDefault();
        setPurchaseSuccess(true);
    }
    
    const handleResetForm = () => {
        setPurchaseSuccess(false);
        onClearCart();
        onClose();
    }


  return (
    <div>
        {purchaseSuccess ? (
            <div>
                <p>Uspesno ste kupili proizvode.</p>
                <button onClick={handleResetForm}>Close</button>
            </div>
        ) : (

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
        )}
    </div>
  )
}

export default Purchase