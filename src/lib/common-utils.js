function setDocumentTitle(title, addSiteSuffix = true){
	const siteSuffix = ' | Beer Me';

	document.title = title + (addSiteSuffix ? siteSuffix : '');
}

export { setDocumentTitle };
