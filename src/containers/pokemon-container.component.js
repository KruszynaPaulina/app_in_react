import React, { Component } from 'react';
import { connect } from 'react-redux';
import PokemonList from '../presentational/pokemon-list.component';
import { getPokemons, searchPokemons } from '../actions/actions-pokemons';

class PokemonContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getPokemons());
        this.props.dispatch(searchPokemons(''));
    }

    search(event) {
        this.props.dispatch(searchPokemons(event.target.value));
    }

    render() {
        return (
            <div>
                <h1>Pokemon List</h1>
                <div className="search text-center">
                    <input type="text" onChange={this.search.bind(this)}/>
                </div>
                <PokemonList pokemons={this.props.visiblePokemons} />
            </div>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        pokemons: store.pokemonsReducer.pokemons,
        visiblePokemons: store.pokemonsReducer.visiblePokemons
    };
};

export default connect(mapStateToProps)(PokemonContainer);