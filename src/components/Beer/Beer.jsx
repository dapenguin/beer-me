import React from 'react';
import './Beer.css';

function Beer(props){
	const imagePath = `/img/${props.image}`;

	return (
		<div className="beer">
			<h3 className="beer-name">{props.beerName}</h3>
			<img className="beer-image" src={imagePath} alt="" />
			<p>{props.brewery}</p>
			<p>{props.beerType}</p>
			<p>{props.rating}</p>
			<p>{props.userNotes}</p>
		</div>
	);
}

export default Beer;
