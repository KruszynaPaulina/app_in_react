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
                <h1 className="main__title">Type of Pokemon</h1>
                <p className="main__text">Search Pokemon by type:</p>
                <div className="main__input">
                    <select onChange={e => this.chooseType(e)} className="main__input--text main__select">
                        <option value="grass">Grass</option>
                        <option value="poison">Poison</option>
                        <option value="fire">Fire</option>
                        <option value="flying">Flying</option>
                        <option value="bug">Bug</option>
                        <option value="water">Water</option>
                    </select>
                </div>
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