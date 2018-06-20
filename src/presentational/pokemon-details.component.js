import React from 'react';

const PokemonDetails = (props) => (
    <div className="country-wrapper">
        <header>
            <img className="pokemon-photo" src={props.pokemon.url} alt="country photo" />
        </header>
        <div className="country-info">
            <h2>Pokemon: {props.pokemon.name}</h2>
        </div>
    </div>
);

export default PokemonDetails;