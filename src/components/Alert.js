const Alert = ({ title, buttonOne, buttonOneOnClick, buttonTwo, buttonTwoOnClick }) => {
  return (
    <div className="alert restart">
        <div className="content">
            <h1 className="font-l silver">{title}</h1>
            <div className="btns">
                <button className="btn font-xs"
                        onClick={buttonOneOnClick}>{buttonOne}</button>
                <button className="btn font-xs"
                        onClick={buttonTwoOnClick}>{buttonTwo}</button>
            </div>
        </div>
    </div>
  )
}

export default Alert