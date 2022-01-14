import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export default function App() {
  var [result, setResult] = useState('');
  var [num, setNum] = useState(0);

  const handleResult = (event) => {
    event.preventDefault();
    const numbers = {
      M̅: 1000000,
      C̅M̅: 900000,
      D̅: 500000,
      C̅D̅: 400000,
      C̅: 100000,
      X̅C̅: 90000,
      L̅: 50000,
      X̅L̅: 40000,
      X̅: 10000,
      MX̅: 9000,
      V̅: 5000,
      MV̅: 4000,
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    for (const key in numbers) {
      const numberValue = numbers[key];
      while (numberValue <= num) {
        num -= numberValue;
        result += key;
      }
    }
    setResult(result);
  };

  const clearResult = () => {
    setNum('');
    setResult('');
    // const clearInput = document.getElementById('clear');
    // clearInput.setAttribute('value', 0);
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <div style={{ display: 'grid', padding: '5px' }}>
          <input
            value={num}
            id='clear'
            type='number'
            placeholder='Type arabic number'
            onChange={(e) => setNum(e.target.value)}
          />
          <button onClick={handleResult}>Convert</button>
          <button onClick={clearResult}>Clear</button>
        </div>
        <span style={{ color: 'white', padding: '10px', fontSize: '3em' }}>
          {result}
        </span>
      </header>
    </div>
  );
}
