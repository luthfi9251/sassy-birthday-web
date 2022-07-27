import './App.css';

import Hero from './components/Hero';
import Greeting from './components/Greeting';
import Time from './components/Time';
import Quotes from './components/Quotes';
import Picture from './components/Picture';
import Closing from './components/Closing';

function App() {
  return (
    <div className="App">
      <Hero />
      <Time />
      <Greeting />
      <Quotes />
      <Picture />
      <Closing />
    </div>
  );
}

export default App;
