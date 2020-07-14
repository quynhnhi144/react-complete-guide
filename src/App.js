import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {

  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 26 },
      { name: "Stephanie", age: 24 },
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = "Maximillan";
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 26 },
        { name: "Stephanie", age: 25 },
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 26 },
        { name: "Stephanie", age: 24 },
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I'm React</h1>
        <p>This is working!!!</p>
        <button onClick={() => { this.switchNameHandler("Maximillan") }}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Max!")}
          changed={this.nameChangedHandler}
        >My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>

      // It hasn'tlocation in component scope ==> Error 
      //<p>This is working!!!</p>
    );
    // This is some things will be compiled
    //return React.createElement('div', { className: 'App' }, null, React.createElement('h1', null, 'Hi I\'m React'));

  }

}

export default App;
