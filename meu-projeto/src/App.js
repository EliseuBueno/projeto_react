import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';

function App() {
  const name = 'Eliseu'
  const idade = '33'
  const profissao = 'Programador'
  const newName = name.toUpperCase()
  const url = 'https://via.placeholder.com/150'
  function sum(a, b){
    return a + b
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Renderização Condicional</h1>
        <Condicional />
        <br></br>
        <h1>Alterando o JSX</h1>
        <SayMyName nome={name}/>
        <p>Olá, {newName}</p>
        <p>Soma: {2 + 2}</p>
        <p>Som por Função: {sum(1, 2)}</p>
        <img src={url} alt="Minha Imagem"/>
        <HelloWorld></HelloWorld>
        <Pessoa nome={name} idade={idade} profissao={profissao} foto={url}/>
        <List/>
        <Evento numero="1"/>
        {/* <Evento numero="2"/> */}
        <Form />
      </header>
    </div>
  );
}

export default App;
