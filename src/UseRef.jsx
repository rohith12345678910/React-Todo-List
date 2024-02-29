// useState() = Renders the components when the state value change 

//useRef() = "use References" does not causes re-renders when its value changes 
//              when you want a component to "remember" some information.
//              but you dont want the information to triggers new renders.

//          1. Accessing/Interacting with Dom Elements;
//          2. Handling Focus , Animations and Transitions;
//          3. Managing Timers and Intervals

import React, { useEffect, useRef, useState } from "react";

function UseRef(){
   const inputRef = useRef(null);
    useEffect(()=>{
        console.log("Component Rendering");
       
    });
    function handleNumber(){
       inputRef.current.focus();
       inputRef.current.style.backgroundColor = "yellow"
    }
return(
    <div>
        
        <button onClick={handleNumber}>Click Me</button>
        <input ref={inputRef}/>
    </div>
)
}
export default UseRef