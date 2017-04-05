import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import Home from './views/Home/Home';
import MyBeers from './views/MyBeers/MyBeers';
import AddBeer from './views/AddBeer/AddBeer';

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
					<BrowserRouter>
						<Switch>
							<Route exact path="/">
								<Home beers={this.state.beers} />
							</Route>
							<Route exact path="/my-beers">
								<MyBeers beers={this.state.beers} />
							</Route>
							<Route exact path="/add-beer">
								<AddBeer />
							</Route>
						</Switch>
					</BrowserRouter>
				</div>
			</div>
		);
	}
}

export default App;
