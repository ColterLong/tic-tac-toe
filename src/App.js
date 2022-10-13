import StartMenu from './components/StartMenu.js'
import GameMenu from './components/GameMenu.js'
import { useState } from 'react'

function App() {
  const [showStartMenu, setShowStartMenu] = useState(true);
  const [userSelection, setUserSelection] = useState(true);


  const switchMenu = () => {
    showStartMenu ? setShowStartMenu(false) : setShowStartMenu(true);
  }

  const switchUser = () => {
    // x is true, o is false
    userSelection ? setUserSelection(false) : setUserSelection(true);
  }

  return (
    <div className="container">
      {showStartMenu 
        ? <StartMenu onSwitchMenu={switchMenu}
                     showUserSelection={userSelection} 
                     onSwitchUser={switchUser}/> 
        : <GameMenu onSwitchMenu={switchMenu} 
                    showUserSelection={userSelection}
                    onSwitchUser={switchUser}/> }
    </div>
  );
}

export default App;
