import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading'
import Summation from './components/Summation'
import Numbers from './components/Numbers'
import React from 'react';

function App() {

  function showCalculator() {
    return (
      <main className='back'>
        <div className='entire__container'>
          <Heading />
          <Summation />
          <Numbers />
        </div>
      </main>
    )
  }

  return (

    showCalculator()

  );
}

export default App;
