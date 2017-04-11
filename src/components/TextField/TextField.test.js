import React from 'react';
import { shallow, render } from 'enzyme';
import TextField from './TextField';

describe('<TextField> component', () => {
	let textFieldComponent;

	beforeEach(() => {
		textFieldComponent = shallow(
			<TextField fieldId="textFieldId" fieldLabel="Text field label:" />
		);
	});

	it('should have a label', () => {
		expect(textFieldComponent.find('label').length).toBe(1);
	});

	it('should have a text input', () => {
		expect(textFieldComponent.find('input[type="text"]').length).toBe(1);
	});

	it('should display an error message when there is one', () => {
		textFieldComponent.setProps({errorMessage: 'There is an error on this field'});
		expect(textFieldComponent.find('.textField-errorMessage').length).toBe(1);
	});

	it('should have a class to highlight there is an error', () => {
		textFieldComponent.setProps({hasError: true});
		expect(textFieldComponent.hasClass('textField-hasError')).toBe(true);
	});
});
