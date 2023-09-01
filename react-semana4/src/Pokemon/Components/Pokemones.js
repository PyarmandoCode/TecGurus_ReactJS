import axios from "axios";
import React, { useState, useEffect } from "react";

const Pokemones = () => {
    const [pokemones, setPokemones] = useState([]);

    //Usando fetch
    // useEffect(() => {
    //     async function cargarPokemonesApi() {
    //         const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
    //         //console.log(await resp.json());
    //         const data = await resp.json();
    //         setPokemones(data.results)
    //     }
    //     cargarPokemonesApi();
    // }, [])

    //axios get
    const loadData = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
            .then(resp => {
                for (let i = 0; i < resp.data.results.length; i++) {
                    axios.get(resp.data.results[i].url)
                        .then(result => {
                            setPokemones(prevArray => [...prevArray, result.data])
                        })
                }

            })
    }


    useEffect(loadData, [])
    return (
        <ul>

            {pokemones.map((pokemon, index) => {
                return (pokemon = (
                    <div key={index} className='pokemon-item'>
                        <h1>{pokemon.name}</h1>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />


                       
                    


                    </div>
                ));
            })};
            
        </ul>
    )
}

export default Pokemones;