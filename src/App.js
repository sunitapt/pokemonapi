import './App.css';
import Heading from './heading';
import ListItems from './pokemonList';
import SearchAndSort from './seachAndSort'

function App() {
  return (
    <div className="App bg-white">
      <header className="App-heade">
        <Heading/>
        <SearchAndSort/>
        <ListItems/>
      </header>
    </div>
  );
}

export default App;
