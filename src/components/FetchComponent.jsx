import { useState } from "react";

    const FetchComponent= () => {

        const [pokemon, setPokemon] = useState();
        const fetchAllPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
            .then(res => {
                console.log(res);
                return res.json()
            })
            .then(jsonResponse => {
                console.log(jsonResponse.results[0].name)
                setPokemon(jsonResponse.results)
            })
            .catch(err => console.log(err))
        };

    return (
        <div>
            <h1>Fetching Pokemon</h1>
            <button onClick={fetchAllPokemon}>Fetch Pokemon</button>
            {
                pokemon?
                pokemon.map((item,idx)=> {
                    return <ul><li>{item.name}</li></ul>
                }):
                <h1>Please fetch Pokemon</h1>
            }
        </div>
    )
}

export default FetchComponent