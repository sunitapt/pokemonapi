import './App.css';
import Grid from './grid';
import Heading from './heading';
import ListItems from './pokemonList';

function App() {
  return (
    <div className="App bg-white">
      <header className="App-heade">
        <Heading/>
        <Grid/>
        <ListItems/>
      </header>
    </div>
  );
}

export default App;
