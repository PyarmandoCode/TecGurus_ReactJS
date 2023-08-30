import React, { useState, useEffect } from "react";

const Pokemones = () => {
    const [pokemones, setPokemones] = useState([]);

    useEffect(() => {
        async function cargarPokemonesApi() {
            const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
            console.log(await resp.json());
        }

        cargarPokemonesApi();
    }, [])
    return (
        <p>Lista de Pokemones</p>
    )
}
export default Pokemones;