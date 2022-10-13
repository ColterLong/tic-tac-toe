import logo from './img/both-shapes.svg';
import { ReactComponent as CircleShape } from './img/Oval.svg';
import { ReactComponent as XShape } from './img/x-shape.svg';
import { ReactComponent as Redo } from './img/Redo.svg';
import Button from './Button.js'

const GameMenu = ( {onSwitchMenu, showUserSelection, onSwitchUser} ) => {
  return (
    <div className='game-menu'>
      <div className="game-header">
        <img src={logo} alt="" />
        <button className="btn">
          {showUserSelection 
            ? <XShape className="shape silver"/>
            : <CircleShape className="shape silver"/>
          }
          Turn
        </button>
        <button className="btn">
          <Redo className='shape dark-blue'/>
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



        <button className="btn"
                onClick={() => onSwitchMenu()}>
            Go to Main menu
        </button>
        
    </div>
  )
}

export default GameMenu