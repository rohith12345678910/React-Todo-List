//props - read only properties that are shared between components 
//          A parentcomponents can send the data to a child component
//          <component key=value/>
//Deafault - default values for props in the case they are not passed from the parent component
//              name:"Guest"
import propTyes from 'prop-types'
function Student(props){
    return(
        <div className="student">
            <p>Name : {props.name}</p>
            <p>Age  : {props.age} </p>
            <p>Area : {props.area}</p>
            <p>Student : {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )
}
Student.propTyes = {
    name : propTyes.string,
    age : propTyes.number,
    area : propTyes.string,
    isStudent : propTyes.bool,
}
Student.defaultProps = {
    name : "Guest",
    age : 100,
    area : "Unknown",
    isStudent : false,

}
export default Student