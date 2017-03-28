import React from 'react';
import { shallow, render } from 'enzyme';
import BeerList from './BeerList';
import Beer from '../Beer/Beer';

describe('<BeerList> component', () => {
	it('should display all the beers it is given', () => {
		const beers = [
				{
					beerName: 'Rockhopper',
					brewery: 'West Acton Brewing Co.',
					beerType: 'Pilsner',
					image: 'rockhopper.jpeg',
					userNotes: 'Really smooth with no strong aftertaste.',
					rating: 5
				},
				{
					beerName: 'Emperor IPA',
					brewery: 'West Acton Brewing Co.',
					beerType: 'IPA',
					image: 'emperor_ipa.jpeg',
					userNotes: 'Nice citrus notes. Mildly bitter aftertaste.',
					rating: 5
				}
			],
			beerListComponent = shallow(
				<BeerList beers={beers} />
			);

		expect(beerListComponent.find(Beer).length).toEqual(2);
	});

	it('should display a message when there are no beers given to it', () => {
		const beers = [],
			beerListComponent = shallow(
				<BeerList beers={beers} />
			);

		expect(beerListComponent.find('.beerList-emptyMsg').length).toEqual(1);
	});
});
