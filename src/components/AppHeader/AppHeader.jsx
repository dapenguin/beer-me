import React from 'react';
import './AppHeader.css';

function AppHeader(props){
	return (
		<header className="appHeader">
			<div className="appHeader-inner">
				<img src="/img/beer-me-logo.svg" alt="Beer me" />
				<button className="appHeader-loadBeersButton" onClick={props.loadBeers}>Load beers</button>
			</div>
		</header>
	);
}

export default AppHeader;
