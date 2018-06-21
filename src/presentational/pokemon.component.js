import React from 'react';

const Pokemon = (props) => (
    <div className="singlePokemon__pokeball">
    	<div className="pokeball__inside">
        <img className="pokeball__img" src={props.pokemon.url} alt="pokemon" />
        <h3 className="pokeball__name">{props.pokemon.name}</h3>
        </div>
    </div>
);

export default Pokemon;