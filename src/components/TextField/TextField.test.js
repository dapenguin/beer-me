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

	it('should contain a <label> element', () => {
		expect(textFieldComponent.find('label').length).toEqual(1);
	});

	it('should contain an <input> element', () => {
		expect(textFieldComponent.find('input').length).toEqual(1);
	});
});
