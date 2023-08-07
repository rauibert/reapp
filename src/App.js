import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {/** Usar mi componente Card */}
        <Card /> 

      </header>  
      
    </div>
  );
}

export default App;
