import React from 'react';
import PersonCard from './components/PersonCard/PersonCard';
import styled from 'styled-components';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const Container = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background: rgba(255, 255, 255, 0.5);
        max-width: 90%;
        margin: 0 auto;
    `;

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      
        <PersonCard />
      
    </div>
  );
}

export default App;
