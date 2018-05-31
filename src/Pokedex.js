import React, { Component } from 'react';
import Header from './Components/Header';
import GridPokemons from './Components/GridPokemons';
import PokemonDetail from './Components/PokemonDetail';

class Pokedex extends Component {	
    constructor(props){
        super(props);
		this.state = {
			openDetail: false,
			selectedPokemon: null
		};
		//this.getPokemons();
    }
	
	showModalDetail = (pokemon) => {
		this.setState({ openDetail: true, selectedPokemon: pokemon });
	};

	closeModalDetail = () => {
		this.setState({ openDetail: false, selectedPokemon: null });
	};
	
    render() {
		return (
			<div className="PokeList">
				<Header />
				<PokemonDetail openDetail={this.state.openDetail} pokemon={this.state.selectedPokemon} onCloseModalDetail={this.closeModalDetail} />
				<GridPokemons onPokemonSelect={selectedPokemon => this.showModalDetail(selectedPokemon)} />
			</div>
		);
    }
}

export default Pokedex;
