import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 26 },
      { name: "Stephanie", age: 24 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = "Maximillan";
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 26 },
        { name: "Stephanie", age: 25 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 26 },
        { name: "Stephanie", age: 24 },
      ],
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person) => {
            return <Person name={person.name} age={person.age}></Person>;
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi I'm React</h1>
        <p>This is working!!!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>

        {persons}
      </div>

      // It hasn'tlocation in component scope ==> Error
      //<p>This is working!!!</p>
    );
    // This is some things will be compiled
    //return React.createElement('div', { className: 'App' }, null, React.createElement('h1', null, 'Hi I\'m React'));
  }
}

export default App;
