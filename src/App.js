import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';

const App = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 26 },
      { name: "Stephanie", age: 24 },
    ],
  });

  const [otherState, setOtherState] = useState("some other value");

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = "Maximillan";
    setPersonsState({
      persons: [
        { name: "Maximillan", age: 28 },
        { name: "Manu", age: 26 },
        { name: "Stephanie", age: 25 },
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hi I'm React</h1>
      <p>This is working!!!</p>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >My Hobbies: Racing</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>

    // It hasn'tlocation in component scope ==> Error 
    //<p>This is working!!!</p>
  );
  // This is some things will be compiled
  //return React.createElement('div', { className: 'App' }, null, React.createElement('h1', null, 'Hi I\'m React'));

}

export default App;

