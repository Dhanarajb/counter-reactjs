import React, { useState } from 'react'; //hooks import
import './style.css';

export default function App() {
  //main component
  const [count, setCount] = useState(0); //hooks

  const Increment = () => {
    //increment function
    setCount(count + 1);
  };
  const Decrement = () => {
    //decrement function
    setCount(count - 1);
  };
  const Reset = () => {
    //reste function
    setCount(0);
  };
  return (
    <div className="box">
      <h1>{count}</h1>
      <div className="btn">
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={Reset}>Reset</button>
      </div>
    </div>
  );
}
