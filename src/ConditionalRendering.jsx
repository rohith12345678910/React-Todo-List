//  Conditional Rendering -   allows you to control what get rendered in your application
//                          based on certain conditions.
//                              (Show,hide or change components)
import propTyes from 'prop-types'
function ConditionalRendering(props){

            //  First Method

    // if(props.isLoggedin){
    //     return(
    //         <h1>Welcome {props.userName}</h1>
    //     )
    // }else{
    //     return(
    //     <h1>Please Login</h1>
    //     )
    // }

            //  Second Method

     // return(props.isLoggedin ? <h1>Welcome {props.userName}</h1> : 
    //                            <h1>Please Login</h1>)    

            // Third Method

    const WelcomeMessage = <h1>Welcome {props.userName}</h1>
    const GuestMessage = <h1>Please Login</h1>

    return(props.isLoggedin ? WelcomeMessage : GuestMessage)
}
    //  Fourth Method

    ConditionalRendering.propTypes ={
            isLoggedin : propTyes.bool,
            userName : propTyes.string,
    }
    ConditionalRendering.defaultProps = {
            isLoggedin : false,
            userName : "Rohith",
    }


export default ConditionalRendering