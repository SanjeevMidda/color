import React, { useState } from 'react'
import "../index.css"
import { click } from '@testing-library/user-event/dist/click';



function Tile({keyName, text, updateNumber, originalAddNumber, computerSelected, setComputerColor, randomColor}) {

    const [visibility, setVisibility] = useState(false)

   function clicked(e){
    if(e.target.innerText == computerSelected){
        updateNumber(originalAddNumber + 1);

        setVisibility(true)

        setComputerColor(randomColor());
      }

   }
    

  return (
    <div key={keyName} onClick={clicked}>
        <h1 className={visibility? "dontShow" : "Show"}>{text}</h1>
    </div>
  )
}

export default Tile