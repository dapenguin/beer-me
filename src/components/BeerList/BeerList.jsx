import React from 'react';
import Beer from '../Beer/Beer';
import './BeerList.css';

function BeerList(props){
	let beerListContent = '',
		beers = props.beers;

	function renderBeer(key){
		const beer = beers[key];

		return (
			<li key={key}>
				<Beer beerName={beer.beerName}
					brewery={beer.brewery}
					beerType={beer.beerType}
					image={beer.image}
					userNotes={beer.userNotes}
					rating={beer.rating} />
			</li>
		);
	};

	if (typeof beers === 'undefined' || Object.keys(beers).length === 0){
		beerListContent = <p className="beerList-emptyMsg">You do not have any beers in your list.</p>
	} else {
		beerListContent = (
			<ul className="beerList-beers">
				{Object.keys(beers).map(renderBeer)}
			</ul>
		)
	}
	return (
		<div className="beerList">
			<h2>Your beers</h2>
			{beerListContent}
		</div>
	);
}

export default BeerList;
