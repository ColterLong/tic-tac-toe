import Button from './Button.js'

// 2d array as state passed to every button
// plus place in array of button
// check if game finished

const GameContent = ( { currentPlayer, onSwitchCurrentPlayer }) => {
  return (
    <div className="game-content">
        <Button currentPlayer={currentPlayer} onSwitchCurrentPlayer={onSwitchCurrentPlayer}/>
        <Button currentPlayer={currentPlayer} onSwitchCurrentPlayer={onSwitchCurrentPlayer}/>
        <Button currentPlayer={currentPlayer} onSwitchCurrentPlayer={onSwitchCurrentPlayer}/>
        <Button currentPlayer={currentPlayer} onSwitchCurrentPlayer={onSwitchCurrentPlayer}/>
        <Button currentPlayer={currentPlayer} onSwitchCurrentPlayer={onSwitchCurrentPlayer}/>
        <Button currentPlayer={currentPlayer} onSwitchCurrentPlayer={onSwitchCurrentPlayer}/>
        <Button currentPlayer={currentPlayer} onSwitchCurrentPlayer={onSwitchCurrentPlayer}/>
        <Button currentPlayer={currentPlayer} onSwitchCurrentPlayer={onSwitchCurrentPlayer}/>
        <Button currentPlayer={currentPlayer} onSwitchCurrentPlayer={onSwitchCurrentPlayer}/>
    </div>
  )
}

export default GameContent