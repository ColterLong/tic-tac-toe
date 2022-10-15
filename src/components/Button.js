import { ReactComponent as CircleShape } from './img/Oval.svg';
import { ReactComponent as XShape } from './img/x-shape.svg';
import { useState } from 'react'

const Button = ( { currentPlayer, onSwitchCurrentPlayer } ) => {
  const [disable, setDisable] = useState(false);
  const [selectedShape, setSelectedShape] = useState(false);

  
  let setShape = () => {
    setDisable(true);
    setSelectedShape(currentPlayer);
    onSwitchCurrentPlayer();
  }

  return (
    <button
      className='btn'
      disabled={disable}
      onClick={() => {setShape()}}
    >
      {/* if disabled, display selected shape based on current player */}
      {disable
        ? selectedShape
           ? <XShape className="shape"/>
           : <CircleShape className="shape"/>
        : ''
      }
    </button>
  )
}

export default Button