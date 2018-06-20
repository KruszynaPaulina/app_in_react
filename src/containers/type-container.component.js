import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setType } from '../actions/actions-pokemons';
import PokemonList from '../presentational/pokemon-list.component';

class TypeContainer extends Component {
    constructor(props) {
        super(props);
    }

    chooseType(event) {
        this.props.dispatch(setType(event.target.value))
    }

    componentDidMount() {
        this.props.dispatch(setType('grass'));
    }

    render() {
        return (
            <div>
                <select onChange={e => this.chooseType(e)}>
                    <option value="grass">grass</option>
                    <option value="ivysaur">ivysaur</option>
                </select>
                <PokemonList pokemons={this.props.visiblePokemons} />
            </div>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        visiblePokemons: store.pokemonsReducer.visiblePokemons
    };
};

export default connect(mapStateToProps)(TypeContainer);