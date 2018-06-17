import React from 'react';

const Pokemon = (props) => (
    <div className="pokemon-wrapper">
        <img className="pokemon-img" src={props.pokemon.url} alt="pokemon" />
        <h3>{props.pokemon.name}</h3>
    </div>
);

export default Pokemon;