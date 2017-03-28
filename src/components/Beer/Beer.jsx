import React, { Component } from 'react';

function Beer(props){
	return (
		<div className="beer">
			<p>{props.beerName}</p>
			<img src={props.image} alt="" />
			<p>{props.brewery}</p>
			<p>{props.beerType}</p>
			<p>{props.rating}</p>
			<p>{props.userNotes}</p>
		</div>
	);
}

export default Beer;
