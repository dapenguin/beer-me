import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BeerList from '../../components/BeerList/BeerList';
import { setDocumentTitle } from '../../lib/common-utils';

class MyBeers extends Component {
	componentDidMount() {
		setDocumentTitle('My Beers');
	}

	render() {
		return (
			<div>
				<h1>My beers</h1>
				<Link to="/">Home</Link>
				<BeerList beers={this.props.beers}/>
			</div>
		)
	}
}

export default MyBeers;
