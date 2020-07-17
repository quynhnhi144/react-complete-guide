import React, { Component } from "react";
import Radium, { StyleRoot } from "radium";

import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { id: "aa1", name: "Max", age: 28 },
      { id: "ab1", name: "Manu", age: 26 },
      { id: "ac1", name: "Stephanie", age: 24 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    /*1. find index of the person by id
    2. reference to a new person
    3. assign new value
    4. assign new Array
    */

    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    // the same way to create a copy object
    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black",
      },
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              ></Person>
            );
          })}
        </div>
      );

      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black",
      };
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red"); // classes = ['red']
    }

    if (this.state.persons.length <= 1) {
      classes.push("bold"); // classes = ['red' ,'bold']
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi I'm React</h1>
          <p className={classes.join(" ")}>This is working!!!</p>
          <button style={style} onClick={this.togglePersonsHandler}>
            Toggle Persons
          </button>

          {persons}
        </div>
      </StyleRoot>
      // It hasn'tlocation in component scope ==> Error
      //<p>This is working!!!</p>
    );
    // This is some things will be compiled
    //return React.createElement('div', { className: 'App' }, null, React.createElement('h1', null, 'Hi I\'m React'));
  }
}

export default Radium(App);
