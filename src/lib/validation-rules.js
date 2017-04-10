function notEmpty(value){
	return value.length > 0;
}

function maxLength(value, { maxChars }){
	if (typeof maxChars !== 'number') return true;
	return value.length <= maxChars;
}

export default {
	notEmpty: notEmpty,
	maxLength: maxLength
}
