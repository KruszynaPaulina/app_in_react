import React from 'react';
import { Link } from 'react-router';
import Pokemon from './pokemon.component';

const PokemonList = (props) => (
    <div className="pokemons-list">
        {props.pokemons.map(pokemon => {
            return (
                <div className="single-pokemon" key={pokemon.id}>
                    <Link className='photo' to={'pokemon/' + pokemon.id}>
                        <Pokemon pokemon={pokemon} />
                    </Link>
                </div>
            )
        })}
    </div>
);

export default PokemonList;