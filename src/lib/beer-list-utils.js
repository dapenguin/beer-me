/**
 * Takes an object and returns a filtered copy of it, only containing
 * properties that match any of hte keys passed.
 * @param  {Object} obj  The object we want to filter.
 * @param  {Array}  keys The keys we are filtering by.
 * @return {Object}      A filtered copy of the object.
 */
function filterObjectByKeys(obj, keys){
	const filteredObject = {};

	keys.forEach((key) => {filteredObject[key] = {...obj[key]}});
	
	return filteredObject;
}

/**
 * Takes a list of beers and returns a specified number of the latest beers
 * to have been added.
 * @param  {Object} beers         The beers we will be sorting through.
 * @param  {Number} numberOfBeers The number of beers to return.
 * @return {Object}               Beer info for the number of beers returned.
 */
function getLatestBeers(beers, numberOfBeers){
	const latestBeersKeys = Object.keys(beers).splice(0, numberOfBeers);

	return filterObjectByKeys(beers, latestBeersKeys);
}

export { getLatestBeers };
