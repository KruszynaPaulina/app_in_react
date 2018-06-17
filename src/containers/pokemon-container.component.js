import React, { Component } from 'react';
import { connect } from 'react-redux';
import PokemonList from '../presentational/pokemon-list.component';
import { getPokemons } from '../actions/actions-pokemons';

class PokemonContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getPokemons());
    }

    render() {
        return (
            <div>
                <h1>Pokemon List</h1>
                <PokemonList pokemons={this.props.pokemons} />
            </div>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        pokemons: store.pokemonsReducer.pokemons
    };
};

export default connect(mapStateToProps)(PokemonContainer);