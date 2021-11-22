// libraries 
import React, { useState } from "react";

// styles
import './PokemonsList.scss'

function PokemonsList(props) {
	let [positions, setPositions] = useState([0, 4]);
	let pokemosn = props.pokemons;

	const moveRight = () => {
		if (positions[1] == pokemosn.length - 1)
			setPositions([0, 4])
		else
			setPositions([positions[0] + 1, positions[1] + 1])
	}

	const moveLeft = () => {
		if (positions[0] == 0)
			setPositions([pokemosn.length - 5, pokemosn.length - 1])
		else
			setPositions([positions[0] - 1, positions[1] - 1])
	}

	return (
		<section className="List-container">
			<aside className="List-title">
				<div className="Btn" onClick={moveLeft} >⬅️</div>
				<p>OTHERS</p>
				<div className="Btn" onClick={moveRight} >➡️</div>
			</aside>
			<aside className="List-items">
				{
					pokemosn.map((item, index) => {
						if (index >= positions[0] && index < positions[1])
							return (
								<figure className="List-item" onClick={() => {
									props.clickPokemon(item)
								}}>
									<img alt="pokemon_image" src={item.picture} className="Item-picture" />
								</figure>
							)
					})
				}
			</aside>
		</section>
	);
}

export default PokemonsList;