import { IoAirplaneSharp, IoAtCircleSharp, IoCaretForwardCircleSharp } from "react-icons/io5";
import Button from './Button';

const App = () => {
  const handleClick = () => {
    console.log('Button clicked')
  };

  return (
    <div>
      <div>
        <Button primary outline rounded onClick={handleClick}>
          <IoAirplaneSharp />
          Continue
        </Button>
      </div>
      <div>
        <Button secondary outline rounded onClick={handleClick}>
          <IoAtCircleSharp />
          Buy now!
        </Button>
      </div>
      <div>
        <Button success outline rounded onClick={handleClick}>
          <IoCaretForwardCircleSharp />
          Click here
        </Button>
      </div>
      <div>
        <Button warning outline rounded onClick={handleClick}>
          Warning
        </Button>
      </div>
      <div>
        <Button danger outline rounded onClick={handleClick}>
          Danger
        </Button>
      </div>
    </div>
  )
}

export default App

