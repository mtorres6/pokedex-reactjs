import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PokemonCard from './PokemonCard';
import InfiniteScroll from "react-infinite-scroll-component";

const styles = theme => ({
	root: {
		flexGrow: 1,
		margin: '30px'
	}
});

class GridPokemons extends React.Component{
    //state = { pokemonDetail: null };
	constructor(props){
        super(props);
		this.state = {
			page: 0,
			total: 0,
			next: '',
			previous: '',
			pokemonsList: [],
			items: Array.from({ length: 20 })
		};
	}
	
	componentDidMount() {
		setTimeout(() => {
			fetch('https://pokeapi.co/api/v2/pokemon/?limit=12&offset=0')
			.then((response) => {
				return response.json()
			})
			.then((response) => {
				this.setState({ 
					total: response.count,
					next: response.next,
					previous: response.previous,
					pokemonsList: response.results
				})
			});
		}, 1500);
	}

	state = {
	  items: Array.from({ length: 20 })
	};
  
	fetchMoreData = () => {
	  	if(this.state.next != null){
	  setTimeout(() => {
			fetch(this.state.next)
			.then((response) => {
				return response.json()
			})
			.then((response) => {
				this.setState({ 
					page: this.state.page + 1,
					total: response.count,
					next: response.next,
					previous: response.previous,
					pokemonsList: this.state.pokemonsList.concat(response.results)
				})
			});
	  }, 15000);
		}
	};

	render(){
		const { classes } = this.props;
		if (this.state.pokemonsList.length > 0){
			return (
				<div className={classes.root}>
					<InfiniteScroll
						dataLength={this.state.items.length}
						next={this.fetchMoreData}
						hasMore={true}
						loader={<p className="text-center">Loading . . .</p>}
					>
						<Grid key={this.state.page} container spacing={24}>
							{
								this.state.pokemonsList.map((pokemon) => {
									return (
										<Grid key={pokemon.name} item xs={4}>
											<PokemonCard pokemon={pokemon} onPokemonSelect={this.props.onPokemonSelect} />
										</Grid>
									);
								})
							}	
						</Grid>	
					</InfiniteScroll>
				</div>
			);
		} else {
			return <p className="text-center">Loading . . .</p>
		}
	}
}

GridPokemons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GridPokemons);