import InputPadrao from './Components/InputPadrao';
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <fieldset>
          <InputPadrao tipo="text" nome="" texto="Nome:" max="40"/>
          <InputPadrao tipo="email" nome="" texto="Email:" max="50"/>
          <InputPadrao tipo="number" nome="" texto="CPF:" max="11"/>
          <InputPadrao tipo="text" nome="" texto="Endereco:" max="200"/>
          <InputPadrao tipo="text" nome="" texto="Cidade:" max="40"/>
          <InputPadrao tipo="select" nome="" texto="Estado:" max="40"/>
          <InputPadrao tipo="radio" nome="" texto="Tipo:" max="40"/>
        </fieldset>
        <fieldset>
            <InputPadrao />
            <InputPadrao />
            <InputPadrao />
        </fieldset>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
