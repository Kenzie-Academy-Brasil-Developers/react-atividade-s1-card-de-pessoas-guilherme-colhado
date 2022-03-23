import './App.css';
import CardPessoa from './components/cardPessoa';


function App() {
  const pessoas = [
    {
      nome: 'Guilherme Colhado',
      idade: '19',
      origem: 'Brasil'
    },
    {
      nome: 'Caio Gonçalves',
      idade: '9',
      origem: 'Brasil'
    },
    {
      nome: 'Erick Silva',
      idade: '2 1',
      origem: 'Estados Unidos'
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <CardPessoa array={pessoas}/>
      </header>
    </div>
  );
}

export default App;
