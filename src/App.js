import Button from './Button';

const App = () => {
  return (
    <div>
      <div>
        <Button success rounded outline>Click</Button>
      </div>
      <div>
        <Button danger outline>Buy now!</Button>
      </div>
      <div>
        <Button>Deal</Button>
      </div>
    </div>
  )
}

export default App

