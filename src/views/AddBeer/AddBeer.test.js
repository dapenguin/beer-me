import React from 'react';
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';
import AddBeer from './AddBeer';

describe('<AddBeer> page', () => {
	let addBeerPage = mount(
		<MemoryRouter>
			<AddBeer />
		</MemoryRouter>
	);

	it('should contain an AddBeerForm', () => {
		expect(addBeerPage.find('AddBeerForm').length).toEqual(1);
	});
});


