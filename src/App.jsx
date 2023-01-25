import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [count, setCount] = useState(Math.floor(Math.random() * 100))

  function randonNumber() {
    setCount(Math.floor(Math.random() * 100) + 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <span>Numero = {count}</span>
        <button onClick={randonNumber}>Criar novo número</button>
      </header>
    </div>
  );
}

export default App;
