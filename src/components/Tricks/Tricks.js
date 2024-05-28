import './Tricks.css'

function Tricks({stance, name, obstacle, tutorial}){
    return(
    <div className="tricks">
        <p>{stance}{name}</p>
        <p>Obstacle: {obstacle} </p>
        <p>Link to Tutorial</p>
        <p>{tutorial}</p>
    </div> 
    )
}
export default Tricks