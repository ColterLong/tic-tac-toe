import logo from './img/both-shapes.svg';
import { ReactComponent as CircleShape } from './img/Oval.svg';
import { ReactComponent as XShape } from './img/x-shape.svg';
import { ReactComponent as MainMenu } from './img/MainMenu.svg';
import Button from './Button.js'
import { useEffect, useState } from 'react';


// change MainMenu to redo button

// global disable button for game end?

const GameMenu = ( {onSwitchMenu, showUserSelection, onSwitchUser, currentPlayer, onSwitchCurrentPlayer} ) => {
  const [scoreboard,setScoreboard] = useState([
    0,0,0,
    0,0,0,
    0,0,0
  ])

  useEffect(() => {
    console.log('useEffect ran, scoreboard is: ', scoreboard);
    if (scoreboard[0] + scoreboard[1] + scoreboard[2] === 3) {
      console.log('x won!');
    }
  }, [scoreboard]);


  
  let updateScoreboard = function(index, shape) {
    let newArr = [...scoreboard];
    // shape:
    // +1 is x
    // -1 i o
    shape 
      ? newArr[index] += 1
      : newArr[index] -= 1
    setScoreboard(newArr);
  }

  
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
        {[...Array(9)].map((x, i) =>
          <Button currentPlayer={currentPlayer} 
                  onSwitchCurrentPlayer={onSwitchCurrentPlayer} 
                  onUpdateScoreboard={updateScoreboard}
                  index={i}
                  key={i}/>
        )}
      </div>
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