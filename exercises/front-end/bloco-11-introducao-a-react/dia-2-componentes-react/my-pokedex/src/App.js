import './App.css';
import Pokedex from './components/Pokedex';
import data from './data'


function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <div className='Cards'>
      <Pokedex array={data} />
      </div>
      
    </div>
  );
}

export default App;
