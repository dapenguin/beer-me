import React from 'react';
import { shallow, render } from 'enzyme';
import Beer from './Beer';

describe('<Beer> component', () => {
	let beerData,
		beerComponent;

	beforeEach(() => {
		beerData = {
			beerName: 'Rockhopper',
			brewery: 'West Acton Brewing Co.',
			beerType: 'Pilsner',
			image: 'rockhopper.jpeg',
			userNotes: 'Really smooth with no strong aftertaste.',
			rating: 5
		};

		beerComponent = shallow(
			<Beer beerName={beerData.beerName}
				brewery={beerData.brewery}
				beerType={beerData.beerType}
				image={beerData.image}
				userNotes={beerData.userNotes}
				rating={beerData.rating}/>
		);
	});

	it('should display the name of the beer', () => {
		expect(beerComponent.text()).toMatch(/Rockhopper/);
	});

	it('should display the name of the brewery that made the beer', () => {
		expect(beerComponent.text()).toMatch(/West Acton Brewing Co\./);
	});

	it('should display an image of the beer', () => {
		expect(beerComponent.find(`img[src="/img/${beerData.image}"]`).length).toEqual(1);
	});

	it('should display the type of beer. (i.e. Ale, Wheat beer, Bitter, Stout, etc.)', () => {
		expect(beerComponent.text()).toMatch(/Pilsner/);
	});

	it('should display my notes from tasting the beer', () => {
		expect(beerComponent.text()).toMatch(/Really smooth with no strong aftertaste\./);
	});

	it('should display my rating for the beer', () => {
		expect(beerComponent.text()).toMatch(/5/);
	});	
});
