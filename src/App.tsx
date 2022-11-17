import React from 'react';
import logo from './logo.svg';
import './App.css';
import CompOne from './Components/CompOne';
import CompTwo from './Components/CompTwo';
import CompThree from './Components/CompThree';
import CompFour from './Components/CompFour';

function App() {
  return (
    <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <div>
        <CompOne/>
        <CompTwo/>
        <CompThree/>
        <CompFour/>
      </div>
    </div>
  );
}

export default App;
