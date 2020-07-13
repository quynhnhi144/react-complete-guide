import React from 'react';
import Person from './Person/Person';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hi I'm React</h1>
      <p>This is working!!!</p>
      <Person />
    </div>

    // It hasn'tlocation in component scope ==> Error 
    //<p>This is working!!!</p>
  );

  // This is some things will be compiled
  //return React.createElement('div', { className: 'App' }, null, React.createElement('h1', null, 'Hi I\'m React'));
}

export default App;
