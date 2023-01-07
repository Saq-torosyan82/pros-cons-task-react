import './App.css';
import Items from './components/Items';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Should I eat at McDonalds?</h1>
      </div>

      <div className="main-content my-flex">
        <Items type="pros" />
        <Items type="cons" />
      </div>      
    </div>
  );
}

export default App;
