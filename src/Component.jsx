import React, { useState } from "react";

function Component(){

    const[car,setCar] = useState({year:2024,make:"Mahindra",model:"Thar"});

    function handleYear(event){
        setCar(c => ({...c ,year: event.target.value}))
    }
    
    function handleMake(event){
        setCar(c => ({...c ,make: event.target.value}))
    }
    function handleModel(event){
        setCar(c =>({...c,model:event.target.value}))
    }
    
    return(
        <div>
          <p>  Your Favourite Car : {car.year} {car.make} {car.model}</p>
            <br/>
            
            Year : <input type="number" onChange={handleYear} value={car.year} />
        <br/>
            Make : <input type="text" onChange={handleMake} value={car.make}/>
        <br/>
            Model : <input type="text" onChange={handleModel} value={car.model}/>
        </div>
    )

}
export default Component