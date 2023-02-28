import logo from './img/both-shapes.svg';
import { ReactComponent as CircleShape } from './img/Oval.svg';
import { ReactComponent as XShape } from './img/x-shape.svg';
import { ReactComponent as RestartGame } from './img/RestartGame.svg';
import Button from './Button.js'
import Alert from './Alert.js'
import { useEffect, useState } from 'react';

const GameMenu = ( {onSwitchMenu, showUserSelection, onSwitchUser, currentPlayer, onSwitchCurrentPlayer, onSetCurrentPlayer, onIsMultiplayer} ) => {
  const [gameboard,setGameboard] = useState([
    0,0,0,
    0,0,0,
    0,0,0
  ])
  const [scoreboard, setScoreboard] = useState([0,0,0]);
  const [gameover, setGameover] = useState(false);
  const [lastWinner, setLastWinner] = useState();
  const [gameboardKey, setGameboardKey] = useState(0);
  const [showRestart, setShowRestart] = useState(false);
  const [areButtonsDisabled, setAreButtonsDisabled] = useState(false);
  

  let sum = function(x,y,z) {
    return gameboard[x] + gameboard[y] + gameboard[z];
  }

  let isGameboardFull = function() {
    for (let i = 0; i < 10 ; i++) {
      if (gameboard[i] === 0) return false;
    }
    return true
  }

  let sumScore = function(shape=true) {
    let three = (shape) ? 3 : -3;
    if (sum(0,1,2) === three ||
        sum(3,4,5) === three ||
        sum(6,7,8) === three ||
        sum(0,3,6) === three ||
        sum(1,4,7) === three ||
        sum(2,5,8) === three ||
        sum(0,4,8) === three ||
        sum(6,4,2) === three) {
          if (shape) {
            return 'x'
          } else {
            return 'o'
          }
        }
    if (isGameboardFull()) {
      return 'tie'
    }
    return false
  }

  useEffect(() => {
    if (sumScore(true) || sumScore(false)) {
      let newArr = [...scoreboard];
      if (sumScore(true) == 'x') {
        console.log('x won!');
        newArr[0] +=1
        setLastWinner('x');
      } else if (sumScore(false) == 'o') {
        console.log('o won!');
        newArr[2] +=1
        setLastWinner('o');
      } else if (sumScore() == 'tie') {
        console.log('tie!')
        newArr[1] +=1
        setLastWinner('ROUND TIED')
      }
      setScoreboard(newArr);
      setGameover(true);
      //console.log('scoreboard should be: ' + newArr);
      //console.log('scoreboard: ' + scoreboard);
      //console.log('is gameover: ' + gameover);
      setAreButtonsDisabled(true);

    }
  }, [gameboard]);


  useEffect(() => {
    // multiplayer cpu

    if (!onIsMultiplayer && showUserSelection !== currentPlayer && !isGameboardFull() 
         && !sumScore(true) && !sumScore(false) ) {
      let testIndex = Math.floor(Math.random() * 9);
      while (gameboard[testIndex] !== 0) {
        testIndex = Math.floor(Math.random() * 9)
        if (gameboard[testIndex] === 0) break;
      }
      updateGameboard(testIndex,currentPlayer);
      onSwitchCurrentPlayer();
    } 
  }, [currentPlayer,gameboardKey])

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

  let nextRound = function() {
    setGameover(false);
    setGameboard([0,0,0,0,0,0,0,0,0]);
    console.log('next round: pre current player: ' + currentPlayer);
    onSetCurrentPlayer(true);
    console.log('next round: post current player: ' + currentPlayer);
    setAreButtonsDisabled(false);
    setGameboardKey(gameboardKey + 1);
  }

  let setShowRestartFalse = function() {
    setShowRestart(false);
    setAreButtonsDisabled(false);
  }

  let setShowRestartTrue = function() {
    setAreButtonsDisabled(true);
    setShowRestart(true);
  }

  let restartGame = function() {
    setScoreboard([0,0,0]);
    nextRound();
    setShowRestartFalse();
  }

  let quit = function() {
    nextRound();
    onSwitchMenu();
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
        <button className="btn"  disabled={areButtonsDisabled} onClick={() => setShowRestartTrue()}>
          <RestartGame className='shape dark-blue'/>
        </button>
      </div>
      <div className="game-content" key={gameboardKey} >
        {[...Array(9)].map((x, i) =>
          <Button currentPlayer={currentPlayer} 
                  onSwitchCurrentPlayer={onSwitchCurrentPlayer} 
                  onUpdateGameboard={updateGameboard}
                  index={i}
                  key={i}
                  onAreButtonsDisabled={areButtonsDisabled}
                  myIndex={gameboard[i]}/>
        )}
      </div> 
      <div className="game-score">
        <button className="btn">
          X
          <h1 className="font-m">{scoreboard[0]}</h1>
        </button>
        <button className="btn">
          TIES 
          <h1 className="font-m">{scoreboard[1]}</h1>
        </button>
        <button className="btn">
          O
          <h1 className="font">{scoreboard[2]}</h1>
        </button>
      </div>   


      {gameover ? <Alert title={lastWinner}
                         buttonOne='QUIT'
                         buttonOneOnClick={quit}
                         buttonTwo='NEXT ROUND'
                         buttonTwoOnClick={nextRound}
                        // resultText="hi"
                   />
              : null
      }

      {showRestart ? <Alert title='RESTART GAME?'
                         buttonOne='NO, CANCEL'
                         buttonOneOnClick={setShowRestartFalse}
                         buttonTwo='YES, RESTART'
                         buttonTwoOnClick={restartGame}
                   />
              : null
      }
    </div>
  )
}

export default GameMenu