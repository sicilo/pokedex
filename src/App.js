// libraries
import { useState, useEffect } from "react";
import axios from "axios";

// styles
import './App.scss';

// images
// import pokemonLogo from './assets/img/pokemon_logo.svg'
import pokeballLogo from './assets/img/pokeball_logo.svg'
import pokedexogo from './assets/img/pokedex_logo.webp'

// components
import PokemonsList from './components/PokemonsList'
import PokemonView from './components/PokemonView'

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonSelected, setPokemonSelected] = useState({});

  const getPokemons = async () => {
    let apiUrl = "https://pokeapi.co/api/v2/pokemon/";
    let pokemonsResult = (await axios.get(apiUrl)).data.results;

    pokemonsResult.forEach(async (pokemonUrl) => {
      let pokemonResult = (await axios.get(pokemonUrl.url)).data;

      let newPokemon = {
        name: pokemonResult.name,
        picture: pokemonResult.sprites.front_default,
        number: pokemonResult.id,
        level: pokemonResult.order,
        ability: pokemonResult.abilities[0].ability.name,
        height: pokemonResult.height,
        weight: pokemonResult.weight,
        type: pokemonResult.types[0].type.name
      };

      setPokemons((pokemons) => [...pokemons, newPokemon]);
    });
  }

  useEffect(() => {
    getPokemons();
  }, [])

  useEffect(() => {
    if (pokemons.length > 0)
      setPokemonSelected(pokemons[0]);
  }, [pokemons])

  const selectPokemon = (pokemon) => {
    setPokemonSelected(pokemon)
  }


  return (
    <section className="App">
      <section className="App-container">
        <header className="App-header">
          <img src={pokedexogo} alt="pokemon_text" className="App-poke-logo" />

          <img src={pokeballLogo} alt="pokeball_text" className="App-ball-logo" />
        </header>
        <main className="App-main">
          {
            pokemons.length > 0 ?
              <PokemonView pokemon={pokemonSelected} />
              : ""
          }
        </main>
        <footer className="App-footer">
          <PokemonsList
            pokemons={pokemons} clickPokemon={(pokemon) => selectPokemon(pokemon)} />
        </footer>
      </section>
    </section>
  );
}

export default App;
