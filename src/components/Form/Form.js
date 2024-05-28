import { useState } from "react"
import './Form.css'

function Form (){
    const [stance, selectedStance]= useState("")
    const [name, setName] = useState("")
    const [obstacle, selectedObstacle]= useState("")
    const [tutorial, setTutorial] = useState("")  
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    const trick = { stance, name, obstacle, tutorial };

    try {
      const response = await fetch('http://localhost:3001/api/v1/tricks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(trick),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      setSuccess("Trick added successfully!");
      selectedStance("");
      setName("");
      selectedObstacle("");
      setTutorial("");
    } catch (error) {
      setError("Failed to add trick: " + error.message);
    }
  };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <select value={stance} onChange={(event)=> selectedStance(event.target.value)}>
                <option value="">Choose your Stance</option>
                <option value="regular">Regular</option>
                <option value="switch">Switch</option>
            </select>
            <input 
            type="text"
            value={name} 
            placeholder="Name of Trick"
            onChange={(event)=> setName(event.target.value)} />
            <select value={obstacle} onChange={(event)=> selectedObstacle(event.target.value)}>
                <option value= "">Choose your Obstacle</option>
                <option value= "flatground">Flatground</option>
                <option value="ledge">Ledge</option>
                <option value="rail">Rail</option>
                <option value="stairs">Stairs</option>
                <option value="pool">Pool</option>
            </select>
            <input 
            type="Text"
            value={tutorial} 
            placeholder="Link to Tutorial"
            onChange={(event)=> setTutorial(event.target.value)}/>
            <button type="submit">Send it</button>
        </form>    
    )
}
export default Form