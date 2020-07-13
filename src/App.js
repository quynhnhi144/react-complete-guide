import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hi I'm React</h1>
    </div>
  );

  // This is some things will be compiled
  //return React.createElement('div', { className: 'App' }, null, React.createElement('h1', null, 'Hi I\'m React'));
}

export default App;
