import React, {useState} from 'react';
import './App.css';
import Person from "./Person/Person";


const App = (props) => {

  const [personState, setPersonsState] = useState({
    persons: [
      {name: 'Max', age: 27},
      {name: 'Arnold', age: 29},
      {name: 'Stephanie', age: 26},
    ],
    otherState: 'some other value',
    showPersons: false
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

  const [show, setShow] = useState(false);

  const togglePersonsHandler = () => {
    const doesShow = show;
    setShow(!doesShow);
  }

  let persons = null;

  if (show) {
    persons = (
      <div>
        {personState.persons.map(person => {
          return <Person
            name={person.name}
            age={person.age}/>
        })};
      </div>
    )
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working</p>
      <button style={style} onClick={togglePersonsHandler}>Toggle Persons</button>
      {persons}
    </div>
  );
}

export default App;


