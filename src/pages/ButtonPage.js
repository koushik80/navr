import { IoAirplaneSharp, IoAtCircleSharp, IoCaretForwardCircleSharp } from 'react-icons/io5';
import Button from '../components/Button';

const ButtonPage = () => {
  const handleClick = () => {
    //console.log('Button clicked!')
  };

  return (
    <div>
      <div>
        <Button
          primary
          outline
          rounded
          className="mb-5"
          onClick={handleClick}>
          <IoAirplaneSharp />
          Continue
        </Button>
      </div>
      <div>
        <Button
          secondary
          outline
          rounded
          className="mb-5"
          onClick={handleClick}>
          <IoAtCircleSharp />
          Buy now!
        </Button>
      </div>
      <div>
        <Button
          success
          outline
          rounded
          className="mb-5"
          onClick={handleClick}>
          <IoCaretForwardCircleSharp />
          Click here
        </Button>
      </div>
      <div>
        <Button
          warning
          outline
          rounded
          className="mb-5"
          onClick={handleClick}>
          Warning
        </Button>
      </div>
      <div>
        <Button
          danger
          outline
          rounded
          className="mb-5"
          onClick={handleClick}>
          Danger
        </Button>
      </div>
    </div>
  )
}

export default ButtonPage;