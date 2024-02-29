import Button from "./Button";
import Card from "./Card";
import Food from "./Food";
import Fotter from "./Footer";
import Header from "./Header";
import Buttonss from "./Buttonss";
import Student from "./Student";
import ConditionalRendering from "./ConditionalRendering";
import RenderList from "./RenderList";
import List from "./List";
import Buttons from "./Buttons";
import Usestate from "./Usestate";
import MyComponent from "./MyComponent";
import Colorpicker from "./Colorpicker";
import Component from "./Component";
import UpdateComponent from "./UpdateComponent";
import TodoList from "./TodoList";
import UseEffect from "./UseEffect";
import UseEffectEg from "./UseEffectEg";
import ComponentA from "./UseContext/ComponentA";
import UseRef from "./UseRef";

function App() {
  {/* List Example */}
  const fruits = [
    {id:1, name : "apple" , calories : 95 } ,
    {id:2,name :  "banana", calories : 85},
    {id:3, name : "orange", calories : 75}, 
    {id:4,name : "Mango", calories : 65},
    {id:5, name : "animal", calories :100}
];
const Vegetables = [
  {id:1, name : "Carrot" , calories : 95 } ,
  {id:2,name :  "betroot", calories : 85},
  {id:3, name : "ladiesfinger", calories : 75}, 
  {id:4,name : "potato", calories : 65},
  {id:5, name : "onion", calories :100}
];
  return (
    <>
        {/* <UseRef/> */}
      
        {/* <ComponentA/> */}
        
        {/* <UseEffectEg/> */}

      {/* <UseEffect/> */}

    <TodoList/>

    {/* <UpdateComponent/> */}

    {/* <Component/> */}

    {/* <Colorpicker/> */}

        {/* <MyComponent/> */}

    {/* <Usestate/> */}

    {/* <Buttons/> */}
    
    {/* <List items={fruits} category= "Fruits"/>
    <List items={Vegetables} category= "Vegetables"/> */}

  {/* <RenderList/> */}

    {/* <ConditionalRendering isLoggedin ={true}  /> */}

       {/* <Student name ="RohithSivakumar" age= {25} area="Kodungaiyur" isStudent={true}/> 
       <Student name ="Samika" age= {25} area="Errukancheery" isStudent={false}/> 
       <Student name ="Abishek" age= {25} area="Errukancheery" isStudent={false}/> 
       <Student name ="Yashwanth" age= {25} area="Union Colony" isStudent={false}/> 
        <Student name = "Parthiban" age={24} area="thiruvallur" isStudent={true} /> */}

    {/* <Header/>
    <Food/>
    <Fotter/> */}
    
     {/* <Card/>  */}

    {/* <Button/> */}

    {/* <Buttonss/> */}

    </>
    
  );
}

export default App;
