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

  switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = "Maximillan";
    this.setState({
      persons: [
        { name: "Maximillan", age: 28 },
        { name: "Manu", age: 26 },
        { name: "Stephanie", age: 25 },
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I'm React</h1>
        <p>This is working!!!</p>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies: Racing</Person>
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
