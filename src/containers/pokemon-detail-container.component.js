import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPokemon } from '../actions/actions-pokemons';
import PokemonDetails from '../presentational/pokemon-details.component';

class PokemonDetailsContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getPokemon(this.props.params.id));
    }

    render() {
        return (
            <PokemonDetails pokemon={this.props.selectedPokemon} />
        )
    }
}

const mapStateToProps = function (store) {
    return {
        selectedPokemon: store.pokemonsReducer.selectedPokemon
    };
};

export default connect(mapStateToProps)(PokemonDetailsContainer);