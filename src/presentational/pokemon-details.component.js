import React from 'react';

const PokemonDetails = (props) => (
	<div>
		<h1 className="main__title">Pokemon</h1>
	    <div className="pokemonDetails">
	    	<div className="singlePokemon__pokeball pokemonDetails__pokeball">
		    	<div className="pokeball__inside">
		        	<img className="pokeball__img" src={props.pokemon.url} alt="pokemon" />
		        </div>
	    	</div>
	        <div className="pokemonDetails__info">
	            <h2 className="pokemonDetails__info--title">{props.pokemon.name}</h2>
	            <div className="pokemonDetails__info--box">
	            	<p className="box__text"><span className="bold">Id: </span>{props.pokemon.id}</p>
	            	<p className="box__text"><span className="bold">Type: </span>{props.pokemon.typepokemon}</p>
	            	<p className="box__text"><span className="bold">Experience: </span>{props.pokemon.base_experience}</p>
	            	<p className="box__text"><span className="bold">Height: </span>{props.pokemon.height}</p>
	            	<p className="box__text"><span className="bold">Weight: </span>{props.pokemon.weight}</p>
	        	</div>
	        </div>
	    </div>
    </div>
);

export default PokemonDetails;