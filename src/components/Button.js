import { ReactComponent as CircleShape } from './img/Oval.svg';
import { ReactComponent as XShape } from './img/x-shape.svg';
import { useState, useEffect } from 'react'

const Button = ( { currentPlayer, onSwitchCurrentPlayer, onUpdateGameboard, index, onAreButtonsDisabled, myIndex } ) => {
  const [disable, setDisable] = useState(false);
  const [selectedShape, setSelectedShape] = useState(false);

  
  let setShape = () => {
    setDisable(true);
    setSelectedShape(currentPlayer);
    onUpdateGameboard(index,currentPlayer);
    onSwitchCurrentPlayer();
  }

  useEffect(() => {
    if (myIndex !== 0) {
      setDisable(true);
      setSelectedShape(!currentPlayer);
      //onSwitchCurrentPlayer();
    }
  }, [myIndex]);

  return (
    <button
      className='btn'
      disabled={onAreButtonsDisabled ? true : disable}
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