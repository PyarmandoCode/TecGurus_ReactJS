import React, { Component } from 'react';

export class PokemonList extends Component {
    render() {
        const { pokemons } = this.props;

        //Armando el diseño de las tarjetas para cada Pokememon

        const list = pokemons.map((pokemon, index) => {
            return (pokemon = (
                <div key={index} className='pokemon-item'>
                    <h1>{pokemon.name}</h1>
                    <img src={pokemon.image} alt={pokemon.name} />
                    <ul className="pokemon-specs">
                        <li>{pokemon.specs.type}</li>
                        <li>{pokemon.specs.abilities}</li>
                    </ul>
                </div>
            ));
        });
        //Lo Estoy Montando en el Doom
        return (
            <div className='pokemon-container' >
                <h1 className="pokemon-heading">Pokemon List</h1>
                {list}

            </div>
        )

    }
}