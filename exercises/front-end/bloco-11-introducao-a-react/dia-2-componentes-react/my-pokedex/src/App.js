import './App.css';
import Pokedex from './components/Pokedex';
import data from './data'


function App() {
  return (
    <div>
      <h1>Pokedex</h1>
      <div className="App">
        <div className='Cards'>
        <Pokedex array={data} />
        </div>
      </div>
  </div>
  );
}

export default App;
