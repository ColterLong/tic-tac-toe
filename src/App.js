import StartMenu from './components/StartMenu.js'
import GameMenu from './components/GameMenu.js'
import { useState } from 'react'

import Alert from './components/Alert.js'


function App() {
  const [showStartMenu, setShowStartMenu] = useState(true);
  const [userSelection, setUserSelection] = useState(true);
  const [currentPlayer, setCurrentPlayer] = useState(true);


  const switchMenu = () => {
    showStartMenu ? setShowStartMenu(false) : setShowStartMenu(true);
  }

  const switchUser = () => {
    // x is true, o is false. Default X selected
    userSelection ? setUserSelection(false) : setUserSelection(true);
  }

  const switchCurrentPlayer = () => {
    // x is true, o is false. X always goes first so it's the default
    currentPlayer ? setCurrentPlayer(false) : setCurrentPlayer(true);
  }

  return (
    <div className="container">
      {showStartMenu 
        ? <StartMenu onSwitchMenu={switchMenu}
                     showUserSelection={userSelection} 
                     onSwitchUser={switchUser}/> 
        : <GameMenu onSwitchMenu={switchMenu} 
                    showUserSelection={userSelection}
                    onSwitchUser={switchUser}
                    currentPlayer={currentPlayer}
                    onSwitchCurrentPlayer={switchCurrentPlayer}
                    onSetCurrentPlayer={setCurrentPlayer}/> 
      }
      {/* <Alert /> */}
    </div>
  );
}

export default App;
