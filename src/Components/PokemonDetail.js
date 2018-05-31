import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';

class PokemonDetail extends React.Component {	

    state = { pokemonDetail: null };
	
	styles = theme => ({
		row: {
			display: 'flex',
			justifyContent: 'center',
		},
		sprites: {
			justifyContent: 'center'
		},
		root: {
			display: 'flex',
			justifyContent: 'center',
			flexWrap: 'wrap',
		},
		chip: {
		  margin: theme.spacing.unit,
		}
    });

    render() {
        if (this.props.pokemon != null){
			const classes = this.styles;
			const pokemon = this.props.pokemon;
            return (
                <div>
                    <Dialog
                        open={this.props.openDetail}
                        onClose={this.props.onCloseModalDetail}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                    <DialogTitle id="alert-dialog-title">{pokemon.name}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
						<Grid container spacing={24}>
							<Grid key={1} item xs={6} className={classes.sprites}>
								<h3>Sprites</h3>
								<img src={pokemon.sprites.front_default} alt={pokemon.name} />
								<img src={pokemon.sprites.back_default} alt={pokemon.name} />
							</Grid>
							<Grid key={2} item xs={6}>
								<h3>Type</h3>
							{
								pokemon.types.map((pokemonType) => {
									return(
										<Chip key={pokemonType.type.name} label={pokemonType.type.name} className={classes.chip} />
									)
								})
							}
							</Grid>
							<Grid key={3} item xs={6}>
								<h3>Abilities</h3>
							{
								pokemon.abilities.map((pokemonAbility) => {
									return(
										<Chip key={pokemonAbility.ability.name} label={pokemonAbility.ability.name} className={classes.chip} />
									)
								})
							}
							</Grid>
							<Grid key={4} item xs={6}>
								<h3>Moves</h3>
							{
								pokemon.moves.map((pokemonMove) => {
									return(
										<Chip key={pokemonMove.move.name} label={pokemonMove.move.name} className={classes.chip} />
									)
								})
							}
							</Grid>
						</Grid>
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.props.onCloseModalDetail} color="primary" autoFocus>
                        Back
                    </Button>
                    </DialogActions>
                </Dialog>
                </div>
            );
        } else {
            return(
                    <Dialog
                        open={this.props.openDetail}
                        onClose={this.props.onCloseModalDetail}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                    {this.props.pokemon && <DialogTitle id="alert-dialog-title">Pokedex</DialogTitle>}
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <h2>No Pokemon Selected.</h2>
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.props.onCloseModalDetail} color="primary" autoFocus>
                        Back
                    </Button>
                    </DialogActions>
                </Dialog>
            );
        }
    }
}

PokemonDetail.propType = {
	open: PropTypes.bool,
	switchDialog: PropTypes.func
}

export default PokemonDetail;