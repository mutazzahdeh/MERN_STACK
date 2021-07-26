import React, { useState, useEffect } from "react"
import { navigate } from '@reach/router'

const Luke = (props) => {
    const [data, setData] = useState([])
    const [id,setId]=useState("")
    const [item,setItem]=useState("")
    const [inf,setInf]=useState([])
    
    useEffect(() => {
        fetch('https://swapi.dev/api/')
            .then(response => response.json())
            .then(response => setData(response))
    }, []);
    const gotolink = (e) => {
        e.preventDefault();
        fetch("https://swapi.dev/api/"+item+"/"+id)
        .then(response => response.json())
        .then(response => setInf(response));
        
        navigate("/"+item+"/"+id);
        
    };
    return(
        <div>
            <form onSubmit={ gotolink }>
                <select onChange={ (e) => setItem(e.target.value)}>
            {  Object.keys(data).map((item, i) =>{
                return (<option value={item} key={i}>{item}</option>)
            })}
            </select>
            <label>ID: </label> 
                <input type="Number" onChange={ (e) => setId(e.target.value) } />
                <input type="submit" value="Sarche" />
            </form>
          
            {  Object.keys(inf).map((item, i) =>{
                return (<h1  key={i}>{item}:{inf[item]}</h1>)
            })}
        </div>

    );

}
export default Luke;
