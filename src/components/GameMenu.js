const GameMenu = ( {onSwitchMenu, showUserSelection, onSwitchUser} ) => {
  return (
    <div>
        <button className="btn"
                onClick={() => onSwitchMenu()}>
            Go to Main menu
        </button>
        <button className='btn blue'>
            {showUserSelection ? "x is selected" : "o is selected"}
        </button>
    </div>
  )
}

export default GameMenu