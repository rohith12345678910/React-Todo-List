import React, { useState } from "react"
function UpdateComponent(){
    const[foods,setFoods] = useState(["apple","banana","orange"]);

    function handleAddFood(){
        const newFood = document.getElementById("foodinput").value;
        document.getElementById("foodinput").value = "";
        setFoods([...foods,newFood]);
    }
    function handleRemoveFood(index){
       

        setFoods(foods.filter((_,i)=>i!==index));
    }

return(
    <div>
        <h2>List of Foods</h2>
        <ul>
            {foods.map((food,index)=> <li key={index} onClick={()=>handleRemoveFood(index)}>{food}</li>)}
        </ul>
        
        <input type="text" id="foodinput" placeholder="Enter Food Name" />
        <button onClick={handleAddFood}>Add</button>
        
    </div>
)
}
export default UpdateComponent