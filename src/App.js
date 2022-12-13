import './App.css';
import Counter from './Counter';
import CounterButton from './CounterButton';
import ResetButton from './ResetButton';

function App() {

  return (
    <div className="App">
      <h1>Here's my sweet counter app!</h1>
      
      <Counter /> 
      <CounterButton /><ResetButton />
    </div>
  );
}

export default App;
