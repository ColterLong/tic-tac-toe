import logo from './img/both-shapes.svg'
import circle from './img/Oval.svg'
import circleDark from './img/Oval-Dark.svg'
import xShape from './img/x-shape.svg'
import xShapeDark from './img/x-shape-dark.svg'

const StartMenu = () => {
  return (
    <div className='start-menu'>
      <img src={logo} alt="" className='logo' />
      <div className='pick-player'>
        <h1 className='font-xs pick-player-text'>PICK PLAYER 1's MARK</h1>
        <div className="shape-container">
          <div className="shape-box">
            <img src={xShape} alt="" className='shape'/>
          </div>
          <div className="shape-box">
            <img src={circle} alt="" className='shape'/>
          </div>
        </div>
        <h1 className='font-body pick-player-text'>REMEMBER : X GOES FIRST</h1>
      </div>
      <div className='btns'>
        <button className='orange btn font-s'>NEW GAME (VS CPU)</button>
        <button className="blue btn font-s">NEW GAME (VS PLAYER)</button>
      </div>
    </div>
  )
}

export default StartMenu