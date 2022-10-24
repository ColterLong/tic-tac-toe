import logo from './img/both-shapes.svg';
// import React from 'react';
import { ReactComponent as CircleShape } from './img/Oval.svg';
import { ReactComponent as XShape } from './img/x-shape.svg';


const StartMenu = ( { onSwitchMenu, showUserSelection, onSwitchUser, onSetIsMultiplayer }) => {
  // showUserSelection = true means x is selected, false is o
  let changeMenus = function(bool) {
    onSetIsMultiplayer(bool);
    onSwitchMenu()
  }
  
  return (
    <div className='start-menu'>
      <img src={logo} alt="" className='logo' />
      <div className='pick-player'>
        <h1 className='font-xs pick-player-text'>PICK PLAYER 1's MARK</h1>
        <div className="shape-container">
          <button onClick={() => onSwitchUser()}
                  className={showUserSelection ? "shape-btn" : "shape-btn-dark"}>
            <XShape className={showUserSelection ? "shape dark-blue" : "shape silver"}/>
          </button>
          <button onClick={() => onSwitchUser()}
                  className={showUserSelection ? "shape-btn-dark" : "shape-btn"}>
            <CircleShape className={showUserSelection ? "shape silver" : "shape dark-blue"}/>
          </button>
        </div>
        <h1 className='font-body pick-player-text'>REMEMBER : X GOES FIRST</h1>
      </div>
      <div className='btns'>
        <button className='orange btn font-s'
                onClick={() => changeMenus(false)}>
          NEW GAME (VS CPU)
        </button>
        <button className="blue btn font-s"
                onClick={() => changeMenus(true)}>
          NEW GAME (VS PLAYER)
        </button>
      </div>
    </div>
  )
}

export default StartMenu