import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { setDocumentTitle } from '../../lib/common-utils';
import AddBeerForm from '../../components/AddBeerForm/AddBeerForm';

class AddBeer extends Component{
	componentDidMount(){
		setDocumentTitle('Add a beer');
	}

	render() {
		return (
			<div>
				<h1>Add a beer</h1>
				<p><Link to={"/my-beers"}>Back to My beers</Link></p>
				<AddBeerForm />
			</div>
		)
	}
}

export default AddBeer;
