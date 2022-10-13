import logo from './img/both-shapes.svg';
// import React from 'react';
import { useState } from 'react';
import { ReactComponent as CircleShape } from './img/Oval.svg';
import { ReactComponent as XShape } from './img/x-shape.svg';


const StartMenu = ( { onSwitchMenu, onSwitchUser }) => {
  const [xSelected,setXSelected] = useState(true);
  const [circleSelected,setCircleSelected] = useState(false);

  const switchSelected = function() {
    xSelected ? setXSelected(false) : setXSelected(true);
    circleSelected ? setCircleSelected(false) : setCircleSelected(true);
  }

  return (
    <div className='start-menu'>
      <img src={logo} alt="" className='logo' />
      <div className='pick-player'>
        <h1 className='font-xs pick-player-text'>PICK PLAYER 1's MARK</h1>
        <div className="shape-container">
          <button onClick={() => switchSelected()}
                  className={xSelected ? "shape-btn" : "shape-btn-dark"}>
            <XShape className={xSelected ? "shape dark-blue" : "shape silver"}/>
          </button>
          <button onClick={() => switchSelected()}
                  className={circleSelected ? "shape-btn" : "shape-btn-dark"}>
            <CircleShape className={circleSelected ? "shape dark-blue" : "shape silver"}/>
          </button>
        </div>
        <h1 className='font-body pick-player-text'>REMEMBER : X GOES FIRST</h1>
      </div>
      <div className='btns'>
        <button className='orange btn font-s'
                onClick={() => onSwitchMenu()}>
          NEW GAME (VS CPU)
        </button>
        <button className="blue btn font-s"
                onClick={() => onSwitchMenu()}>
          NEW GAME (VS PLAYER)
        </button>
      </div>
    </div>
  )
}

export default StartMenu