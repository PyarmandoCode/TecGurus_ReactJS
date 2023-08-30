import React ,{Component} from "react";
import { PokemonList } from "./PokemonList";
import data from "../data/pokemons.json";

export class Ex01 extends Component {
    render () {
        return <PokemonList pokemons={data}/>
    }
}


