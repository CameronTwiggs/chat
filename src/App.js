import './App.css';
import { Chatbot } from './Components';

const config = {
  date: new Date(),
  other: 'other',
  config: 'config',
  values: 'values',
}

function App() {
  return (
      <>
        <Chatbot config={config}/>
      </>
  );
}

export default App;
