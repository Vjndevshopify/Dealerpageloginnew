import logo from './Retrologo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Retrospec has migrated to a new b2b solution, please go login <a class="App-link" href="https://b2b.retrospec.com" target="_blank" rel="noopener noreferrer">here</a>
        </p>
        <a
          className="App-link"
          href="https://b2b.retrospec.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          login here
        </a>
      </header>
    </div>
  );
}

export default App;
