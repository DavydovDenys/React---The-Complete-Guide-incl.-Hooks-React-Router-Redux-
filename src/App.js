import React, {useState} from 'react';
import './App.css';
import Person from "./Person/Person";


const App = (props) => {

  const [personState, setPersonsState] = useState({
    persons: [
      {id: 1, name: 'Max', age: 27},
      {id: 2, name: 'Arnold', age: 29},
      {id: 3, name: 'Stephanie', age: 26},
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

  const deletePersonHandler = (personIndex) => {
    /*const persons = personState.persons.slice();*/
    const persons = [...personState.persons];
    persons.splice(personIndex, 1)
    setPersonsState({persons: persons,
      otherState: 'some other value',
      showPersons: false})
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
        {personState.persons.map((person, index) => {
          return <Person
            name={person.name}
            age={person.age}
            key={person.id}
            click={() => {deletePersonHandler(index)}}/>
        })}
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


