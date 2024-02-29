// On change - event handler used primarily with form elements
//              ex: <input>,<textarea>, <select>, <radio>
//              Triggers a function every time the values of the input changes
//  updater function = A function passed to an argument to setState() usually
//                      ex: setYear(year+1)(arrow function)
//                      Allows for safe updates based on the previous state  used 
//                      with multiple state updtes and synchromes functions
//                      Good practice to use updater function
import React, { useState } from "react"; 
function MyComponent(){
    const [name, setName] = useState("Guest");
    const [quantity,setQuantity] = useState(0);
    const [comment,setComment] = useState("");
    const [payment,setPayment] = useState("");
    const [shipping,setShipping] = useState("");

    function handleName(event){
        setName(event.target.value);
    }

    function quantityNumber(event){
        setQuantity(event.target.value)
    }

    function commentText(event){
        setComment(event.target.value)
    }

    function paymentMethod(event){
        setPayment(event.target.value)
    }
    function shippingAddress(event){
        setShipping(event.target.value)
    }

return(
    <div>
        <input  value={name} onChange={handleName}/>
        <p>Name : {name}</p>

        <input value={quantity} type="number" onChange={quantityNumber}/>
        <p>Quantity : {quantity}</p>

        <textarea value={comment} onChange={commentText}/>
        <p>Comment : {comment}</p>

        <select value={payment} onChange={paymentMethod}>
            <option value=" ">Select an option</option>
            <option value="Cash">Cash</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            </select>
            <p>payment : {payment}</p>

            <label>
                <input type="radio" value="Pick-up" checked={shipping == "Pick-up"} onChange={shippingAddress}/>
                Pick-up
            </label>
                <br/>
            <label>
                <input type="radio" value="Delivery" checked={shipping == "Delivery"} onChange={shippingAddress}/>
                Delivery
            </label>
            <p>Shipping : {shipping}</p>
    </div>
)
}

export default MyComponent