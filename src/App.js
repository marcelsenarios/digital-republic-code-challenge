import React from 'react'
import './App.css';
import Body from './template/body/Body'
import ParedesData from './config/Parades'


function App() {
  return (
    
      <div className="App">
        <ParedesData>
        <Body />
        </ParedesData>
        
      </div>
    
  );
}

export default App;