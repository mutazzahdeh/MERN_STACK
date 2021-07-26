
import './App.css';
import Number from "./components/Number";
import  {Router}  from '@reach/router';
import Home from "./components/Home"



function App() {
  return (
    <div className="App">
     
      <Router>
            <Number path="/:id"/>
            <Number path="/:id/:color/:color2"/>
            <Home path="/home" />
        
         
        </Router>
    </div>
  );
}

export default App;
