import './Tricks.css'

function Tricks({ tricks }) {
    return (
      <div className="tricks">
        {tricks.map((trick, index) => (
          <div className='trick' key={index}>
            <p>{trick.stance} {trick.name}</p>
            <p>Obstacle: {trick.obstacle}</p>
            <p>Link to Tutorial</p>
            <p>{trick.tutorial}</p>
          </div>
        ))}
      </div>
    );
  }
export default Tricks