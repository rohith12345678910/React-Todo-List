import image from "./Images/rohithsivakumar.jpg"
function Card(){
    return(
        <div className="card">
            <img className="card-image" src={image} width={200}></img>
            <h2 className="card-title">Rohith Sivakumar</h2>
            <p className="card-text">I am a Full Stack Java Developer in Besant Technologies</p>

        </div>


    );
}
export default Card;