//  Render List
function List(props){

    const itemList = props.items
    const category = props.category;

    const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name} : &nbsp; 
                                            <b>{item.calories}</b></li> );
return(<>
<h1>{category}</h1>
<ul>{listItems}</ul>
</>)
}
export default List