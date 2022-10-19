import { ReactComponent as CircleShape } from './img/Oval.svg';
import { ReactComponent as XShape } from './img/x-shape.svg';

const Alert = ({ title, buttonOne, buttonOneOnClick, buttonTwo, buttonTwoOnClick, shape }) => {
  
  let willShowShape = function() {
    if (title == 'x') {
      shape=true;
      return true;
    } else if (title == 'o') {
      shape=false;
      return true
    }
    return false
  }

  return (
    <div className="alert restart">
        <div className="content">
            {willShowShape() ? <h1 className="font-l silver">
                              {shape ? <XShape className="shape"/>
                                     : <CircleShape className="shape"/>}
                              &nbsp;won!
                            </h1>
                          : <h1 className="font-l silver">{title}</h1>
            } 

           
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