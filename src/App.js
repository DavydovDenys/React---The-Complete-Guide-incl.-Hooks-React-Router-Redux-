import React, {useState} from 'react';
import './App.css';
import Person from "./Person/Person";
import {Component} from "react";

const App = (props) => {

  const [personState, setPersonsState] = useState({
    persons: [
      {name: 'Max', age: 27},
      {name: 'Arnold', age: 29},
      {name: 'Stephanie', age: 26},
    ],
    otherState: 'some other value'
  });

  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        {name: newName, age: 27},
        {name: 'Arnold', age: 29},
        {name: 'Stephanie', age: 36},
      ]
    });
  };

  const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        {name: 'Max', age: 27},
        {name: event.target.value, age: 29},
        {name: 'Stephanie', age: 36},
      ]
    });
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '3px solid blue',
    borderRadius: '10px',
    padding: '8px'
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working</p>
      <button style={style} onClick={switchNameHandler.bind(this, 'Tom')}>Switch Name</button>

      <div>
        <Person
          name={personState.persons[0].name}
          age={personState.persons[0].age}
          click={switchNameHandler.bind(this, 'Maximilian')}
        >I'm children props!</Person>
        <Person
          name={personState.persons[1].name}
          age={personState.persons[1].age}
          change={nameChangedHandler}
        />
        <Person
          name={personState.persons[2].name}
          age={personState.persons[2].age}
        />
      </div>
    </div>
  );
}

export default App;


