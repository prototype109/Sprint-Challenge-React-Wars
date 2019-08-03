import React from 'react';
import PersonCard from './components/PersonCard/PersonCard';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <PersonCard person="1" />
      <PersonCard person="2" />
      <PersonCard person="3" />
      <PersonCard person="4" />
    </div>
  );
}

export default App;
