import React from 'react';
import Button from './components/ui/Button'
import './App.css';
import Boock from './components/Boock';

function App() {
  const data = [   
    {
      id: '1',
      name: ' Harry Potter',
      price: 30
    },
    {
      id: '2',
      name: 'Twilighr',
      price: 30
    },
    {
      id: '3',
      name: 'Jamylya',
      price: 30
    },
  ]

  return (
    <div className="App">
      <h1 style={{color: 'red'}}>Hello World</h1>
      <h2 className='title'>React</h2>
      <Boock book = {data} />
      <Button>Delete</Button>
      <Button>Register</Button>
    </div>
  );
}

export default App;
 