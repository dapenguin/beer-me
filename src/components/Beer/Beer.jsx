import React from 'react';
import './Beer.css';

function Beer(props){
	const imagePath = `/img/${props.image}`;

	return (
		<div className="beer">
			<h3 className="beer-name">{props.beerName}</h3>
			<img className="beer-image" src={imagePath} alt="" />
			<p className="beer-brewery"><span className="beer-breweryLabel">Brewery:</span> {props.brewery}</p>
			<p><span className="beer-typeLabel">Type:</span> {props.beerType}</p>
			<p><span className="beer-ratingLabel">Rating:</span> {props.rating}</p>
			<p className="beer-userNotes">{props.userNotes}</p>
		</div>
	);
}

export default Beer;
