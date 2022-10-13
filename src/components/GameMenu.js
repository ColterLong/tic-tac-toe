import React from 'react'

const GameMenu = ( {onSwitchMenu} ) => {
  return (
    <div>
        <button className="btn"
                onClick={() => onSwitchMenu()}>
            Go to Main menu
        </button>
    </div>
  )
}

export default GameMenu