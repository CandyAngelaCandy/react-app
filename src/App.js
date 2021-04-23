import logo from './logo.svg';
import './App.css';

function App() {
  const addUser = () => {
    fetch('http://nginx-gateway:4000/api/user', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods': 'POST'
      }
    })
      .then(response => {
        console.log("call back api success")
      })
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={addUser}>ADD USER</button>
    </div>
  );
}

export default App;
