import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BeerList from '../../components/BeerList/BeerList';
import { getLatestBeers } from '../../lib/beer-list-utils';
import { setDocumentTitle } from '../../lib/common-utils';

class Home extends Component{
	componentDidMount() {
		setDocumentTitle('Beer me', false);
	}

	render() {
		const latestBeers = getLatestBeers(this.props.beers, 2);

		return (
			<div>
				<h1>Home</h1>
				<Link to={"/my-beers"}>My beers</Link>
				<BeerList beers={latestBeers} />
			</div>
		)
	}
}

export default Home;
