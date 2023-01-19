import './App.css';
import Joke from './Components/Joke.js'
import jokesData from './Components/jokesData.js'

function App() {
  const jokeElements = jokesData.map (x => {
    return <Joke setup={x.setup} punchline = {x.punchline} />
  })
  return (
    <div className="App">
      {jokeElements}
    </div>
  );
}

export default App;
