import React, { Component } from 'react';
import validationRules from '../../lib/validation-rules';
import TextField from '../../components/TextField/TextField';

class AddBeerForm extends Component{
	constructor(){
		super();

		this.handleOnChange = this.handleOnChange.bind(this);
		this.handleOnBlur = this.handleOnBlur.bind(this);
		this.handleOnSubmit = this.handleOnSubmit.bind(this);
		this.validateField = this.validateField.bind(this);

		this.state = {
			beerName: {
				value: '',
				hasError: false,
				errorMessage: ''
			},
			brewery: {
				value: '',
				hasError: false,
				errorMessage: ''
			},
			beerType: {
				value: '',
				hasError: false,
				errorMessage: ''
			}
		};

		// Set up an object of validation rules here
		this.addBeerFormValidation = {
			beerName: [
				{
					rule: 'notEmpty',
					message: 'Please enter the name of the beer'
				},
				{
					rule: 'maxLength',
					options: { maxChars: 100 },
					message: 'The beer name cannot be more than 100 characters long'
				}
			]
		};
	}

	validateForm(formValidationRules){
		const fieldsToValidate = Object.keys(formValidationRules);

		fieldsToValidate.forEach((fieldName) => {this.validateField(fieldName, formValidationRules[fieldName]);});
	}

	validateField(fieldName, fieldValidationRules){
		const fieldData = {...this.state[fieldName]},
			fieldValue = fieldData.value;

		let errorMessage = '',
			hasError = false;

		for (let i = 0, il = fieldValidationRules.length; i < il; i++){
			if (typeof validationRules[fieldValidationRules[i].rule] === 'function'){
				errorMessage = validationRules[fieldValidationRules[i].rule](fieldValue, fieldValidationRules[i].options) ? '' : fieldValidationRules[i].message;
			}

			if (errorMessage.length > 0){
				hasError = true;
				break;
			};
		}

		fieldData.errorMessage = errorMessage;
		fieldData.hasError = hasError;

		this.setState({
			[fieldName]: fieldData
		});
	}

	handleOnChange(event){
		const targetElement = event.target,
			fieldData = {...this.state[targetElement.name]};

		fieldData.value = targetElement.value;

		this.setState({
			[targetElement.name]: fieldData
		});
	}

	handleOnBlur(event){
		const fieldName = event.target.name,
			fieldValidationRules = this.addBeerFormValidation[fieldName];

		// Validate the field that has been left
		this.validateField(fieldName, fieldValidationRules);
	}

	handleOnSubmit(event){
		event.preventDefault();

		// Validate entire form here
		this.validateForm(this.addBeerFormValidation);
	}

	render() {
		return (
			<form onSubmit={this.handleOnSubmit}>
				<TextField
					ref={(field) => {this.beerNameField = field;}}
					fieldLabel="Beer name:"
					fieldId="beerNameField"
					name="beerName"
					value={this.state.beerName.value}
					onChange={this.handleOnChange}
					onBlur={this.handleOnBlur}
					hasError={this.state.beerName.hasError}
					errorMessage={this.state.beerName.errorMessage} />
				<TextField
					fieldLabel="Brewery:"
					fieldId="breweryField"
					name="brewery"
					value={this.state.brewery.value}
					onChange={this.handleOnChange}
					errorMessage={this.state.brewery.errorMessage} />
				<TextField
					fieldLabel="Beer type:"
					fieldId="beerTypeField"
					name="beerType"
					value={this.state.beerType.value}
					onChange={this.handleOnChange}
					errorMessage={this.state.beerType.errorMessage} />
				<input type="submit" />
			</form>
		)
	}
}

export default AddBeerForm;
