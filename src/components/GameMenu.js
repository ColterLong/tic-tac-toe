import logo from './img/both-shapes.svg';
import { ReactComponent as CircleShape } from './img/Oval.svg';
import { ReactComponent as XShape } from './img/x-shape.svg';
import { ReactComponent as MainMenu } from './img/MainMenu.svg';
import Button from './Button.js'


const GameMenu = ( {onSwitchMenu, showUserSelection, onSwitchUser} ) => {
  return (
    <div className='game-menu'>
      <div className="game-header">
        <img src={logo} alt="" />
        <button className="btn silver font-xs">
          {showUserSelection 
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
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
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