import './App.css';
import getTricks from '../API/API';
import { useEffect, useState } from 'react';
import React from 'react';
import Tricks from '../Tricks/Tricks';
import Form from '../Form/Form';



function App() {
  const [tricks, setTricks] = useState([])
  
  useEffect(() => {
    const fetchTricks = async () => {
      try {
        const fetchedTricks = await getTricks();
        setTricks(fetchedTricks);
      } catch (error) {
        console.error('Error fetching tricks:', error);
      }
    };

    fetchTricks();
  }, []);

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <Form />
      <Tricks tricks={tricks} />
    </div>
  );
}

export default App; 
