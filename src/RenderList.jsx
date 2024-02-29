function RenderList(){

    //      Example 1

// const fruits = ["apple" , "banana", "orange", "Mango"];

// const listItem = fruits.map(fruit => <li>{fruit}</li>)

// return(<ol>{listItem}</ol>);

//      Example 2

const fruits = [
        {id:1, name : "apple" , calories : 95 } ,
        {id:2,name :  "banana", calories : 85},
        {id:3, name : "orange", calories : 75}, 
        {id:4,name : "Mango", calories : 65},
        {id:5, name : "animal", calories :100}
    ];
//fruits.sort((a,b)=>a.name.localeCompare(b.name));   //  Alphabet Order
//fruits.sort((a,b)=>b.name.localeCompare(a.name));     // Reverse Alphabet Order
//fruits.sort((a,b)=>a.calories-b.calories);        // Numeric
//fruits.sort((a,b)=>b.calories-a.calories);          // Reverse Numeric

//const listItem = fruits.map(fruit => <li key={fruit.id}>{fruit.name} : &nbsp; <b>{fruit.calories}</b></li> )

const lowcalFruits = fruits.filter(fruits=>fruits.calories<90);
const listItem = lowcalFruits.map(lowcalFruits => <li key={lowcalFruits.id}>{lowcalFruits.name} : &nbsp; <b>{lowcalFruits.calories}</b></li> )

return(<ol>{listItem}</ol>);

}
export default RenderList;