import Accordion from './components/Accordion';

const App = () => {
  const items = [
    {
      id: '123',
      label: 'This is test',
      content: 'The more details'
    },
    {
      id: '724',
      label: 'Project setup',
      content: 'More about project'
    },
    {
      id: '325',
      label: 'Project is going to be decided',
      content: 'Will be explained soon'
    }
  ];


  return <Accordion items={items} />;
}

export default App;


