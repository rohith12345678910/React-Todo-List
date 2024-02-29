// React Hook  = special function that allows  functional components 
//                    to use react features without writing class components 
//                  (useState,useEffect,useContext,useReducer,useCallback, and more...)
// useState() = A React hook that allows the creation of a stateful variable
//              and a setter function to update its value in the virtual DOM.
//              [name,setName]

import React, { useState } from "react"; 

function Usestate(){

const [name,setName] =  useState("Guest");
const[count,setCount] = useState(0);
const[isEmployed,setIsEmployed] = useState(true);

const updateName = () => {
    setName("Rohith Sivakumar")
}
const increment = () => {
    setCount(count + 1);
}
const decrement = () => {
    setCount(count - 1);
}
const reset = () => {
    setCount(0);
}
const ToggleEmployed = () => {
    setIsEmployed(!isEmployed);
}
return(
    <div>
        <p className="Para">Name : {name} </p>
        <button onClick={updateName}>Set Name</button>
        <br/>
        <p className="count">Count : {count}</p>
        <button className="increase" onClick={increment}>Increment</button>
        <button className="reset" onClick={reset}>Reset</button>
        <button className="decrease" onClick={decrement}>decrement</button>
        <br/>
        <p className="is">IsEmployed : {isEmployed ? "yes" : "no"}</p>
        <button className="toggle" onClick={ToggleEmployed}>Toggle</button>
    </div>
)
}
export default Usestate