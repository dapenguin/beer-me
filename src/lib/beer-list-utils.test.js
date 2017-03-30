import { getLatestBeers } from './beer-list-utils';

describe('getLatestBeers() method', () => {
	const beers = {
			beer1: {
				beerName: 'Rockhopper'
			},
			beer2: {
				beerName: 'Emperor IPA'
			},
			beer3: {
				beerName: 'Cypress Honey Lager'
			},
			beer4: {
				beerName: 'Lions Winter Ale'
			}
		};

	it('should return an object', () => {
		const latestBeers = getLatestBeers(beers, 2);

		expect(latestBeers != null && typeof latestBeers === 'object' && Array.isArray(latestBeers) === false).toBe(true);
	});

	it('should return the number of beers specified', () => {
		const latestBeers = getLatestBeers(beers, 2);

		expect(Object.keys(latestBeers).length).toEqual(2);
	});
});
