import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const name = 'Eliseu'
  const newName = name.toUpperCase()
  const url = 'https://via.placeholder.com/150'
  function sum(a, b){
    return a + b
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Alterando o JSX</h1>
        <p>Olá, {newName}</p>
        <p>Soma: {2 + 2}</p>
        <p>Som por Função: {sum(1, 2)}</p>
        <img src={url} alt="Minha Imagem"/>
        <HelloWorld></HelloWorld>
      </header>
    </div>
  );
}

export default App;
