import StartMenu from './components/StartMenu.js'
import GameMenu from './components/GameMenu.js'
import { useState } from 'react'

function App() {
  const [showStartMenu, setShowStartMenu] = useState(true);
  const [userSelection, setUserSelection] = useState("x");

  const switchMenu = () => {
    showStartMenu ? setShowStartMenu(false) : setShowStartMenu(true);
  }

  const switchUser = () => {
    if (userSelection === "x") {
      setUserSelection("o");
    } else {
      setUserSelection("x");
    }
  }

  return (
    <div className="container">
      {showStartMenu 
        ? <StartMenu onSwitchMenu={switchMenu} onSwitchUser={switchUser}/> 
        : <GameMenu onSwitchMenu={switchMenu} onSwitchUser={switchUser}/> }
    </div>
  );
}

export default App;
