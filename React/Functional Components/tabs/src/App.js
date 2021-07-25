import MyComponent from "./components/MyComponent"
import react, { useState } from 'react';
import './App.css';

function App() {
  const x=["The first tab","the second tab","The third tab"]
  const [tap,setTap]=useState("");
  const getvalue=(value)=>{
    setTap(value);
  }
  return (
    <div className="App">
     <MyComponent movies={x} value={getvalue}/>
     <textarea 
                rows="4"
                cols="50"
                value={ tap }
            ></textarea>
    </div>
  );
}

export default App;
