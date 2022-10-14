import { ReactComponent as CircleShape } from './img/Oval.svg';
import { ReactComponent as XShape } from './img/x-shape.svg';

const Button = ( { image, onClick } ) => {
  return (
    <button
      className='btn'
    //   onClick={onClick}
    >
      <CircleShape className='shape'/>
    </button>
  )
}

export default Button