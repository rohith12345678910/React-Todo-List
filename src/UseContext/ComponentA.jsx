//  useContext() =  React Hook that allows you to share values between multiples 
//                  levels of components without passing props through each level

//  Provider Component
// 1. import {createContext} from 'react';
// 2. export  const MyContext = createContext();
// 3. <MyContext .Provider value={value}>
//      <child/>
//    </MyContext>

//    Consumer Component
//     4. import React, {useContext} from 'react';
//      import {MyContext} from "./ComponentA";
//     5. const value = useContext(MyContext);

import React, { useState } from "react" 
import ComponentB from "./ComponentB"

function ComponentA(){
    const [user, setUser] = useState("RohithSivakumar");
    return(
        <div className="box">
            <h1>ComponentA</h1>
            <h6>{`Hello ${user}`}</h6>
            <ComponentB user={user}/>
        </div>
    )

}
export default ComponentA