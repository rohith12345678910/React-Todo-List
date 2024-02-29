// useEffect() = React Hook that tells React Do some code when (pick one):
//                  this component renders
//                  this component mounts
//                  the state of a value

// useEffect (function,[dependencies])

// 1. useEffect(()=>{})         //Runs After every Re-render
// 2. useEffect(()=>{},[])      //Runs only on mount
// 3. useEffect(()=>{},[value]) //Runs on mount + when value changes

// USES
// #1 Event Listeners
// #2 DOM Manipulation
// #3 Subscriptions (real-time updates)
// #4 Fecting Data from an API
// #5 Clean up when a component unmounts

import React, { useEffect, useState } from "react";

function UseEffect(){
    const [count,setCount] = useState(0);
    const[color,setColor] = useState("green");
        //First Example

    // useEffect(()=>{                                              
    //     document.title = `you clicked : ${count} times `;
    // },)

        //Second Example

        // useEffect(()=>{
        //     document.title = `you clicked : ${count} times`;
        // },[]);

        //Third Example

        // useEffect(()=>{
        //     document.title = `you clicked : ${count} ${color} times`;
        // },[count,color]);

function addCount(){
    setCount (c => c+1);
}
function subCount(){
    setCount(c =>c-1);
}
function resetCount(){
    setCount(0);
}
function changeColor(){
        setColor(c => c==="green"? "red" : "green");
}
    return(<>
    <p style={{color:color}}>Count : {count} </p>
    <button onClick={addCount}>Add</button>
    <button onClick={resetCount}>Reset</button>
    <button onClick={subCount}>Sub</button>
    <button onClick={changeColor}>Color</button>
    </>)
}
export default UseEffect