import logo from './Group-2-2.svg'

const StartMenu = () => {
  return (
    <div className='start-menu'>
      {/* <img src="Group-2-2.svg" alt=""  /> */}
      <img src={logo} alt="" className='logo' />
      <div className='pick-player'>
        <h1 className='font-xs'>PICK PLAYER 1's MARK</h1>
        {/* img */}
        <h1 className='font-body'>REMEMBER: X GOES FIRST</h1>
      </div>
      <div className='btns'>
        <button className='orange btn'>
          <h1>NEW GAME (VS CPU)</h1>
        </button>
        <button className="blue btn">
          <h1>NEW GAME (VS PLAYER)</h1>
        </button>
      </div>
    </div>
  )
}

export default StartMenu