import logo from './logo.svg';
import './App.css';

const Task = (tarefas) => {
  return (
    tarefas.map((element) => {
      return <li>{element}</li>
    })
  );
}

const tarefas = ['dormir','acordar','beber','estudar','comer'];

function App() {
  return (
    <div>
      { Task(tarefas)}
      <h1>
        Testando React
      </h1>

    </div>
  );
}

export default App;
