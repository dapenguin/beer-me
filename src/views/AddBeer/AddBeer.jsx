import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { setDocumentTitle } from '../../lib/common-utils';
import TextField from '../../components/TextField/TextField';

class AddBeer extends Component{
	componentDidMount() {
		setDocumentTitle('Add a beer');
	}

	render() {
		return (
			<div>
				<h1>Add a beer</h1>
				<Link to={"/my-beers"}>Back to My beers</Link>
				<form>
					<TextField fieldLabel="Beer name:" fieldId="beerNameField" />
					<TextField fieldLabel="Brewery:" fieldId="breweryField" />
					<TextField fieldLabel="Beer type:" fieldId="beerType" />
				</form>
			</div>
		)
	}
}

export default AddBeer;
