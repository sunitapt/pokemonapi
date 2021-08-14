import './App.css';
import Heading from './heading';
import ListItems from './pokemonList';

function App() {
  return (
    <div className="App bg-white">
      <header className="App-heade">
        <Heading/>
        <ListItems/>
      </header>
    </div>
  );
}

export default App;
