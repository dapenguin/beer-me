import React from 'react';
import { Simulate } from 'react-addons-test-utils';
import { MemoryRouter } from 'react-router';
import { shallow, render, mount } from 'enzyme';
import AddBeerForm from './AddBeerForm';

describe('<AddBeerForm> component', () => {
	describe('Beer name', () => {
		let addBeerFormComponent = mount(<AddBeerForm />).get(0);

		it('should be no longer than 100 characters', () => {
			const beerName = 'a'.repeat(101),
				beerNameState = {
					value: beerName,
					errorMessage: ''
				},
				beerNameField = addBeerFormComponent.beerNameField.textInput;

			// Set the state so that the value of the field and the error message are empty.
			addBeerFormComponent.setState({beerName: beerNameState});

			// Simulate leaving the field to trigger the validation for the field
			Simulate.blur(beerNameField);

			expect(addBeerFormComponent.state.beerName.errorMessage).toBe('The beer name cannot be more than 100 characters long');
		});

		it('should not be empty', () => {
			const beerNameState = {
					value: '',
					errorMessage: ''
				},
				beerNameField = addBeerFormComponent.beerNameField.textInput;

			// Set the state so that the value of the field and the error message are empty.
			addBeerFormComponent.setState({beerName: beerNameState});

			// Simulate leaving the field to trigger the validation for the field
			Simulate.blur(beerNameField);

			expect(addBeerFormComponent.state.beerName.errorMessage).toBe('Please enter the name of the beer');
		});

		xit('should encode any HTML entered by the user', () => {

		});
	});
});


