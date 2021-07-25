import react,{useEffect,useState}from "react";
const Pokemon  = (props) => {
    const [pokemon, setPokemon] = useState([]);
 
const pokm=()=>{
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=807') 
    .then(response => response.json())
    .then(response => setPokemon(response.results))
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