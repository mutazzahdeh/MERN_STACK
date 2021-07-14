import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
  <PersonCard name={"Doe,Jane"} age={45} color={"Black"}/>
  <PersonCard name={"Doe,Jane"} age={45} color={"Black"}/>
  <PersonCard name={"Doe,Jane"} age={45} color={"Black"}/>
  <PersonCard name={"Doe,Jane"} age={45} color={"Black"}/>
    </div>
  );
}

export default App;
