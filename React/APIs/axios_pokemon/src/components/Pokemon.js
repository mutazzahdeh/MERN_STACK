import react,{useEffect,useState}from "react";
import axios from 'axios';

const Pokemon  = (props) => {
    const [pokemon, setPokemon] = useState([]);

const pokm=()=>{
    
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(response=>{setPokemon(response.data.results)})
}
 
    return (
        <div>
            
            <button onClick={pokm}>Fetch Pokemon</button>
            
            <ul>{
                 pokemon.map((pok, index)=> 
                    <li key={ index }>{ pok.name }</li>
                )
            }</ul>
        </div>
    );
}
export default Pokemon ;