import './App.css';
import getTricks from '../API/API';
import { useEffect, useState } from 'react';
import React from 'react';
import Tricks from '../Tricks/Tricks';



function App() {
useEffect(()=>{
  getTricks()
}, [])




  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <Tricks />
    </div>
  );
}

export default App; 
