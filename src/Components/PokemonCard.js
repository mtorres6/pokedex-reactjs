import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import green from '@material-ui/core/colors/green';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
	card: {
		//maxWidth: 345,
	},
	media: {
		height: 50,
		//paddingTop: '56.25%', // 16:9
		display: 'none'
	},
	avatar: {
		backgroundColor:  green[500],
		textTransform: "uppercase"
	},
	pokemonname: {
		textTransform: "capitalize"
	},
	button: {
		margin: theme.spacing.unit,
	}
});
const PokemonCard = (props) =>{
	const { classes } = props;
	return (
		<div>
			<Card className={classes.card}> 
				<CardHeader
					avatar={
						<Avatar aria-label="Name" className={classes.avatar}>
						{props.pokemon.name[0]}
						</Avatar>
					}
					title={
						<Typography gutterBottom variant="headline" component="h2"  className={props.pokemon.name}>
							{props.pokemon.name}
						</Typography>
					}
					/>
				<CardMedia
					className={classes.media}
					image="https://vignette.wikia.nocookie.net/ssbb/images/9/9c/S%C3%ADmbolo_Pok%C3%A9mon.png/revision/latest?cb=20141224084453&path-prefix=es"
					title={props.pokemon.name}
				/>
				<CardActions>
					<Button variant="raised" className={classes.button} onClick={(e) => {
						fetch(props.pokemon.url)
							.then((response) => {
								return response.json()
							})
							.then((response) => {
								props.onPokemonSelect(response);
							})
					}}>
					View Detail
					</Button>
				</CardActions>
			</Card>
		</div>
	);
}

PokemonCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PokemonCard);