export const createDomAnchor = (anchorId: string) => {
	if (!document.getElementById(anchorId)) {
		const anchor = document.createElement('div');
		anchor.id = anchorId;
		document.body.insertBefore(anchor, document.body.childNodes[0]);
	}
};
