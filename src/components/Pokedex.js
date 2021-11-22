// libraries 
import React, { useState, useEffect } from "react";
import axios from "axios";

// components 
import PokemonView from './PokemonView'

// styles
import './Pokedex.scss';

// images
import pokemonLogo from '../assets/img/pokemon_logo.svg'
import pokeballLogo from '../assets/img/pokeball_logo.svg'


function Pokedesk() {
    const [pokemons, setPokemons] = useState([]);

    const getPokemons = async () => {
        let apiUrl = "https://pokeapi.co/api/v2/pokemon/";
        let pokemonsResult = (await axios.get(apiUrl)).data.results;

        pokemonsResult.forEach(async (pokemonUrl) => {
            let pokemonResult = (await axios.get(pokemonUrl.url)).data;

            let newPokemon = {
                name: pokemonResult.name,
                picture: pokemonResult.sprites.front_default
            };

            setPokemons((pokemons) => [...pokemons, newPokemon]);
        });
    }

    useEffect(() => {
        getPokemons();
    }, [])

    return (
        <div className="p-container">
            <header className="p-header">
                <img src={pokemonLogo} alt="pokemon_text" className="p-image" />

                <img src={pokeballLogo} alt="pokemon_text" className="p-image" />
            </header>
            {
                pokemons.length > 0 ?
                <main className="p-main">
                    <PokemonView avatar={pokemons[0].picture} />
                </main>
                : ""
            }

        </div>
    )
}

export default Pokedesk;