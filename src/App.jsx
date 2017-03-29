import React, { Component } from 'react';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import BeerList from './components/BeerList/BeerList';

import sampleBeers from './sample-data/beers.data.js';

class App extends Component {
	constructor() {
		super();

		this.loadSampleBeers = this.loadSampleBeers.bind(this);

		this.state = {
			beers: {}
		}
	}

	loadSampleBeers() {
		this.setState({beers: sampleBeers});
	}

	render() {
		return (
			<div className="app">
				<AppHeader loadBeers={this.loadSampleBeers} />
				<div className="app-body">
					<BeerList beers={this.state.beers} />
				</div>
			</div>
		);
	}
}

export default App;
