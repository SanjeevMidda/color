import { useState } from 'react';
import './index.css';
import Tile from './components/Tile';

function App() {

  let colors = ["green", "blue", "red", "black", "purple", "pink", "yellow", "brown", "orange"];

  const [computerColor, setComputerColor] = useState(randomColor())

  const [addNumber, setAddNumber] = useState(0);

  function changeVisibility(e){
    console.log(e.target.innerText);
}
  
  function randomColor(){
    return colors[Math.floor(Math.random() * colors.length)];
  }

  let elementStyling = {
    transition: "all 1s",
    backgroundColor: computerColor
  }


  return (
    <div className="App">

    <div style={elementStyling} className='color'></div>

      <div className="container">

        {
          colors.map((color) => {
            return <Tile key={color} text={color} updateNumber = {setAddNumber} originalAddNumber = {addNumber} computerSelected={computerColor} setComputerColor = {setComputerColor} randomColor={randomColor}
            />
          })
        }        
      </div>
      <h3>Correct {addNumber}</h3>

    </div>
  );
}

export default App;
