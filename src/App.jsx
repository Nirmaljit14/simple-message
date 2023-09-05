
import './App.css'
import React from 'react';
import Hello from './components/Hello';

function App() {
  const [message, setMessage] = React.useState("JavaScript is so cool.");
  
  function handleClick() {
    setMessage("I love React");
  }  
  return (      
    <div>       
      <h1>This is something I missed,{Hello} {message}</h1>        
      <button onClick={handleClick}>something</button>      
      </div>
      );
}


export default App;