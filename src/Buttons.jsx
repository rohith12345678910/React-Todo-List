
//  Click Event = An interaction when a user clicks 
function Buttons(){

    const handleClick = (e) => e.target.textContent = "Ouch 😀"

    return(
        <button onClick={(e)=>handleClick(e)}>Click ME 😃  </button>
    )
}
export default Buttons