import logo from './img/both-shapes.svg';
import { ReactComponent as CircleShape } from './img/Oval.svg';
import { ReactComponent as XShape } from './img/x-shape.svg';
import { ReactComponent as MainMenu } from './img/MainMenu.svg';
import Button from './Button.js'
import Alert from './Alert.js'
import { useEffect, useState } from 'react';


// change MainMenu to redo button
// global disable button for game end?

const GameMenu = ( {onSwitchMenu, showUserSelection, onSwitchUser, currentPlayer, onSwitchCurrentPlayer} ) => {
  const [gameboard,setGameboard] = useState([
    0,0,0,
    0,0,0,
    0,0,0
  ])
  const [scoreboard, setScoreboard] = useState([0,0,0]);
  const [gameover, setGameover] = useState(false);
  // const []

  useEffect(() => {
    let sum = function(x,y,z) {
      return gameboard[x] + gameboard[y] + gameboard[z];
    }

    let sumScore = function(shape) {
      let three = (shape) ? 3 : -3;
      if (sum(0,1,2) === three ||
          sum(3,4,5) === three ||
          sum(6,7,8) === three ||
          sum(0,3,6) === three ||
          sum(1,4,7) === three ||
          sum(2,5,8) === three ||
          sum(0,4,8) === three ||
          sum(6,4,2) === three) {
            return true
          }
      return false
    }

    console.log('useEffect ran, gameboard is: ', gameboard);
    if (sumScore(true) || sumScore(false)) {
      let newArr = [...scoreboard];
      if (sumScore(true)) {
        console.log('x won!');
        newArr[0] +=1
      } else if (sumScore(false)) {
        console.log('o won!');
        newArr[2] +=1
      }
      setScoreboard(newArr);
      setGameover(true);

    }
  }, [gameboard]);

  let updateGameboard = function(index, shape) {
    let newArr = [...gameboard];
    // shape:
    // +1 is x
    // -1 i o
    shape 
      ? newArr[index] += 1
      : newArr[index] -= 1
    setGameboard(newArr);
  }

  let nextRound = function(gameresult) {
    setGameover(false);
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
                  onUpdateGameboard={updateGameboard}
                  index={i}
                  key={i}/>
        )}
      </div>
      {gameover ? <Alert title={currentPlayer + 'hi'}
                         buttonOne='QUIT'
                         buttonOneOnClick={onSwitchMenu}
                         buttonTwo='NEXT ROUND'
                         buttonTwoOnClick={nextRound} />
              : null} 
      <div className="game-score">
        <button className="btn">
          X: {scoreboard[0]}
        </button>
        <button className="btn">
          Ties: {scoreboard[1]}
        </button>
        <button className="btn">
          O: {scoreboard[2]}
        </button>
      </div>   
    </div>
  )
}

export default GameMenu