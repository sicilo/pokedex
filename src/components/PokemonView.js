// import React, { useState, useEffect } from "react";

// styles
import './PokemonView.scss'

function PokemonView(props) {

	return (
		<section className="Pokemon-content">


			<section className="Pokemon-details">
				<section className="Pokemon-figure">
					<section className="Pokemon-image-title">
						<p>Pokemon Name</p>
					</section>
					<img className="Pokemon-avatar" src={props.pokemon.picture} alt="avatar" />
				</section>

				<section className="Pokemon-skills">
					<section className="Pokemon-skills-title">
						No
					</section>
					<section className="Pokemon-skills-value">
						{props.pokemon.number}
					</section>
					<section className="Pokemon-skills-title">
						Level
					</section>
					<section className="Pokemon-skills-value">
						{props.pokemon.level}
					</section>
					<section className="Pokemon-skills-title">
						Type
					</section>
					<section className="Pokemon-skills-value">
						{props.pokemon.type}
					</section>
					<section className="Pokemon-skills-title">
						Hability
					</section>
					<section className="Pokemon-skills-value">
						{props.pokemon.ability}
					</section>
					<section className="Pokemon-skills-title">
						Height
					</section>
					<section className="Pokemon-skills-value">
						{props.pokemon.height}
					</section>
					<section className="Pokemon-skills-title">
						Weight
					</section>
					<section className="Pokemon-skills-value">
						{props.pokemon.weight}
					</section>
				</section>
			</section>


			{/* <section className="p-section">

                <section className="p-content">
                    <p className="p-title">
                        pokemonName
                    </p>

                    <img className="p-avatar" src={props.avatar} alt="avatar" />

                    <div className="p-floor"></div>
                </section>

                <div className="p-floor"></div>
            </section> */}

		</section>
	)
}

export default PokemonView;