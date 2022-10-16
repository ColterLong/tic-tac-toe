import logo from './img/both-shapes.svg';
import { ReactComponent as CircleShape } from './img/Oval.svg';
import { ReactComponent as XShape } from './img/x-shape.svg';
import { ReactComponent as MainMenu } from './img/MainMenu.svg';
import Button from './Button.js'
import GameContent from './GameContent';
import { useState } from 'react';


// change MainMenu to redo button

// global disable button for game end?
// useEffect for who wins?

// state variable of array, update array

const GameMenu = ( {onSwitchMenu, showUserSelection, onSwitchUser, currentPlayer, onSwitchCurrentPlayer} ) => {
  const [scoreboard,setScoreboard] = useState([
    0,0,0,
    0,0,0,
    0,0,0
  ])
  
  
  return (
    <div className='game-menu'>
      <div className="game-header">
        <img src={logo} alt="" />
        <button className="btn silver font-xs">
          {currentPlayer 
            ? <XShape className="shape"/>
            : <CircleShape className="shape"/>
          }
           &nbsp;&nbsp;&nbsp;TURN
        </button>
        <button className="btn">
          <MainMenu className='shape dark-blue' onClick={() => onSwitchMenu()}/>
        </button>
      </div>
      <div className="game-content">
        <Button currentPlayer={currentPlayer} onSwitchCurrentPlayer={onSwitchCurrentPlayer}/>
        <Button currentPlayer={currentPlayer} onSwitchCurrentPlayer={onSwitchCurrentPlayer}/>
        <Button currentPlayer={currentPlayer} onSwitchCurrentPlayer={onSwitchCurrentPlayer}/>
        <Button currentPlayer={currentPlayer} onSwitchCurrentPlayer={onSwitchCurrentPlayer}/>
        <Button currentPlayer={currentPlayer} onSwitchCurrentPlayer={onSwitchCurrentPlayer}/>
        <Button currentPlayer={currentPlayer} onSwitchCurrentPlayer={onSwitchCurrentPlayer}/>
        <Button currentPlayer={currentPlayer} onSwitchCurrentPlayer={onSwitchCurrentPlayer}/>
        <Button currentPlayer={currentPlayer} onSwitchCurrentPlayer={onSwitchCurrentPlayer}/>
        <Button currentPlayer={currentPlayer} onSwitchCurrentPlayer={onSwitchCurrentPlayer}/>
      </div>
      {/* <GameContent currentPlayer={currentPlayer} onSwitchCurrentPlayer={onSwitchCurrentPlayer} /> */}


      <div className="game-score">
        <button className="btn">
          X
        </button>
        <button className="btn">
          Ties
        </button>
        <button className="btn">
          O
        </button>
      </div>   
    </div>
  )
}

export default GameMenu